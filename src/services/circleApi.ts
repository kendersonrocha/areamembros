// src/services/circleApi.ts
// Usar backend local em vez de chamar Circle API diretamente
let BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'

// Garantir que a URL tenha protocolo (https:// ou http://)
if (BACKEND_URL && !BACKEND_URL.startsWith('http://') && !BACKEND_URL.startsWith('https://')) {
  BACKEND_URL = `https://${BACKEND_URL}`
  console.warn('⚠️ URL do backend não tinha protocolo. Adicionado https://')
}

const USE_BACKEND = import.meta.env.VITE_USE_BACKEND !== 'false' // true por padrão

interface CircleApiResponse<T> {
  success: boolean
  data: T
  error?: string
}

// Debug: Verificar configuração
console.log('🔧 API Config:', {
  backendUrl: BACKEND_URL,
  useBackend: USE_BACKEND,
  env: {
    VITE_BACKEND_URL: import.meta.env.VITE_BACKEND_URL,
    VITE_USE_BACKEND: import.meta.env.VITE_USE_BACKEND
  }
})

// Dados mockados realistas para fallback (caso backend não esteja disponível)
const MOCK_STATS = {
  members_count: 1247,
  posts_count: 523,
  comments_count: 2156
}

// Função para testar conectividade com o backend
export async function testCircleConnection(): Promise<CircleApiResponse<any>> {
  try {
    const testUrl = `${BACKEND_URL}/api/circle/test`
    console.log('🧪 Testando conexão com backend...')
    console.log('📍 URL completa:', testUrl)
    
    if (!USE_BACKEND) {
      throw new Error('Backend desabilitado')
    }

    const response = await fetch(testUrl)
    
    console.log('📡 Response status:', response.status)
    console.log('📡 Response headers:', Object.fromEntries(response.headers.entries()))
    
    if (!response.ok) {
      const errorText = await response.text()
      console.log('📡 Response body (error):', errorText.substring(0, 200))
      throw new Error(`Backend Error ${response.status}`)
    }
    
    const contentType = response.headers.get('content-type')
    console.log('📡 Content-Type:', contentType)
    
    const responseText = await response.text()
    console.log('📡 Response body (first 200 chars):', responseText.substring(0, 200))
    
    const result = JSON.parse(responseText)
    console.log('✅ Backend conectado:', result)
    return result
  } catch (error) {
    console.error('❌ Erro ao conectar com backend:', error)
    return {
      success: false,
      data: null,
      error: error instanceof Error ? error.message : 'Backend não disponível'
    }
  }
}

// Obter estatísticas da comunidade através do backend
export async function getCommunityStats(): Promise<CircleApiResponse<{
  members_count: number
  posts_count: number
  comments_count: number
}>> {
  try {
    console.log('📊 Buscando estatísticas da comunidade via backend...')
    
    if (!USE_BACKEND) {
      console.log('🔄 Backend desabilitado, usando dados mockados...')
      return { 
        success: true, 
        data: MOCK_STATS,
        error: 'Dados simulados - Backend desabilitado'
      }
    }

    const response = await fetch(`${BACKEND_URL}/api/circle/stats`)
    
    if (!response.ok) {
      throw new Error(`Backend Error ${response.status}`)
    }
    
       const result = await response.json()
           
           if (result.success) {
             if (result.mock) {
               console.log('ℹ️ Estatísticas mockadas carregadas:', result.data)
               return {
                 success: true,
                 data: result.data,
                 error: result.message || 'Dados de exemplo'
               }
             } else {
               console.log('✅ Estatísticas reais carregadas do backend:', result.data)
               return result
             }
           } else {
             throw new Error(result.error || 'Erro ao buscar estatísticas')
           }
  } catch (error) {
    console.error('❌ Erro ao buscar estatísticas:', error)
    
    // Fallback para dados mockados se backend não estiver disponível
    console.log('🔄 Usando dados mockados como fallback...')
    return {
      success: true,
      data: MOCK_STATS,
      error: 'Dados simulados - Backend não disponível'
    }
  }
}

// Obter posts recentes através do backend
export async function getRecentPosts(limit = 10) {
  try {
    if (!USE_BACKEND) {
      return { success: false, data: [], error: 'Backend desabilitado' }
    }

    const response = await fetch(`${BACKEND_URL}/api/circle/posts?limit=${limit}`)
    
    if (!response.ok) {
      throw new Error(`Backend Error ${response.status}`)
    }
    
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    return {
      success: false,
      data: [],
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }
  }
}

// Obter membros ativos através do backend
export async function getActiveMembers(limit = 10) {
  try {
    if (!USE_BACKEND) {
      return { success: false, data: [], error: 'Backend desabilitado' }
    }

    const response = await fetch(`${BACKEND_URL}/api/circle/members?limit=${limit}`)
    
    if (!response.ok) {
      throw new Error(`Backend Error ${response.status}`)
    }
    
    const result = await response.json()
    return result
  } catch (error) {
    console.error('Erro ao buscar membros:', error)
    return {
      success: false,
      data: [],
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    }
  }
}

// src/hooks/useCommunity.tsx
import { useState, useEffect } from 'react'
import { getCommunityStats, testCircleConnection } from '@/services/circleApi'

interface CommunityStats {
  members_count: number
  posts_count: number
  comments_count: number
}

export function useCommunityStats() {
  const [stats, setStats] = useState<CommunityStats>({
    members_count: 0,
    posts_count: 0,
    comments_count: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        setLoading(true)
        setError(null)
        
        // Primeiro testa a conexão
        console.log('🔍 Testando conexão com Circle API...')
        const connectionTest = await testCircleConnection()
        
        if (!connectionTest.success) {
          setError(`Erro de conexão: ${connectionTest.error}`)
          return
        }
        
        // Se a conexão funcionou, busca as estatísticas
        console.log('📊 Buscando estatísticas...')
        const result = await getCommunityStats()
        
        if (result.success) {
          setStats(result.data)
          console.log('✅ Estatísticas carregadas com sucesso!')
          // Se há erro mas dados foram carregados (dados simulados), manter o erro para mostrar aviso
          if (result.error) {
            setError(result.error)
          }
        } else {
          setError(result.error || 'Erro ao carregar estatísticas')
        }
      } catch (err) {
        console.error('❌ Erro geral:', err)
        setError('Erro ao conectar com a comunidade')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return { stats, loading, error }
}

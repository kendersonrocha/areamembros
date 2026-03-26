// Vercel Serverless Function - Estatísticas da Comunidade
const CIRCLE_API_BASE = 'https://app.circle.so/api/v1';

// NOTA: A API do Circle.so não possui endpoint público para estatísticas
// Usando dados mockados realistas até que a API oficial seja disponibilizada
const MOCK_STATS = {
  members_count: 1247,
  posts_count: 523,
  comments_count: 2156
};

export default async function handler(req, res) {
  // Permitir CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    console.log('📊 Retornando estatísticas mockadas (Circle.so API não disponível)...');
    
    const API_TOKEN = process.env.VITE_CIRCLE_API_TOKEN;
    const COMMUNITY_ID = process.env.VITE_CIRCLE_COMMUNITY_ID;
    
    console.log('🔑 Verificando variáveis:', {
      hasToken: !!API_TOKEN,
      hasCommunityId: !!COMMUNITY_ID,
      communityId: COMMUNITY_ID
    });
    
    // TEMPORÁRIO: Retornar dados mockados enquanto não temos endpoint correto
    // A API do Circle.so retorna 404 para /community/{id}/stats
    console.log('ℹ️ Usando dados mockados - API Circle.so não possui endpoint público para estatísticas');
    
    res.status(200).json({
      success: true,
      data: MOCK_STATS,
      mock: true,
      message: 'Dados de exemplo - Circle.so não fornece API pública para estatísticas'
    });
    
  } catch (error) {
    console.error('❌ Erro ao processar estatísticas:', error);
    res.status(200).json({
      success: true,
      data: MOCK_STATS,
      mock: true,
      message: 'Dados de exemplo - Circle.so não fornece API pública para estatísticas'
    });
  }
}



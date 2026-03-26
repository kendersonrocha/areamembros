// Vercel Serverless Function - Testar conexão com Circle API
const CIRCLE_API_BASE = 'https://app.circle.so/api/v1';

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
    console.log('🧪 Testando conexão com Circle API...');
    
    const API_TOKEN = process.env.VITE_CIRCLE_API_TOKEN;
    
    if (!API_TOKEN) {
      throw new Error('Token não configurado');
    }

    const response = await fetch(`${CIRCLE_API_BASE}/me`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Circle API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log('✅ Conexão com Circle bem-sucedida!');
    
    res.status(200).json({
      success: true,
      message: 'Conexão com Circle API bem-sucedida!',
      data
    });
  } catch (error) {
    console.error('❌ Erro ao testar conexão:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}



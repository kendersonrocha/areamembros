import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleChatMessage } from './routes/chat.js';

// Para usar __dirname em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carregar variáveis de ambiente do .env na raiz do projeto
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações
const CIRCLE_API_BASE = 'https://app.circle.so/api/v1';
const API_TOKEN = process.env.VITE_CIRCLE_API_TOKEN;
const COMMUNITY_ID = process.env.VITE_CIRCLE_COMMUNITY_ID;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'], // Permitir Vite dev server
  credentials: true
}));
app.use(express.json());

// Verificar se as credenciais do Circle estão configuradas
if (!API_TOKEN || !COMMUNITY_ID) {
  console.warn('⚠️ AVISO: Variáveis do Circle não configuradas!');
  console.warn('Configure VITE_CIRCLE_API_TOKEN e VITE_CIRCLE_COMMUNITY_ID no arquivo .env para usar funcionalidades da comunidade');
  console.warn('O servidor continuará funcionando com as outras funcionalidades...\n');
}

console.log('🔧 Circle API Config:', {
  hasToken: !!API_TOKEN,
  tokenLength: API_TOKEN?.length || 0,
  communityId: COMMUNITY_ID
});

// Headers padrão para requisições ao Circle
const getCircleHeaders = () => ({
  'Authorization': `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json',
  'Accept': 'application/json'
});

// ==========================================
// ROTAS DA API
// ==========================================

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Backend está funcionando!',
    timestamp: new Date().toISOString()
  });
});

// ==========================================
// ROTAS DO CHAT AI
// ==========================================

// Rota para processar mensagens do chat
app.post('/api/chat', handleChatMessage);

// Testar conexão com Circle API
app.get('/api/circle/test', async (req, res) => {
  try {
    console.log('🧪 Testando conexão com Circle API...');
    
    const response = await fetch(`${CIRCLE_API_BASE}/me`, {
      headers: getCircleHeaders()
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Circle API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log('✅ Conexão com Circle bem-sucedida!');
    
    res.json({
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
});

// Obter estatísticas da comunidade
app.get('/api/circle/community/stats', async (req, res) => {
  try {
    console.log('📊 Buscando estatísticas da comunidade...');
    
    const response = await fetch(
      `${CIRCLE_API_BASE}/community/${COMMUNITY_ID}/stats`,
      {
        headers: getCircleHeaders()
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Erro da API Circle:', errorText);
      throw new Error(`Circle API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log('✅ Estatísticas carregadas:', data);
    
    res.json({
      success: true,
      data
    });
  } catch (error) {
    console.error('❌ Erro ao buscar estatísticas:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      data: {
        members_count: 0,
        posts_count: 0,
        comments_count: 0
      }
    });
  }
});

// Obter posts recentes
app.get('/api/circle/posts', async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    console.log(`📝 Buscando ${limit} posts recentes...`);
    
    const response = await fetch(
      `${CIRCLE_API_BASE}/posts?community_id=${COMMUNITY_ID}&per_page=${limit}`,
      {
        headers: getCircleHeaders()
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Circle API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log(`✅ ${data.length || 0} posts carregados`);
    
    res.json({
      success: true,
      data
    });
  } catch (error) {
    console.error('❌ Erro ao buscar posts:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      data: []
    });
  }
});

// Obter membros ativos
app.get('/api/circle/members', async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    console.log(`👥 Buscando ${limit} membros ativos...`);
    
    const response = await fetch(
      `${CIRCLE_API_BASE}/community_members?community_id=${COMMUNITY_ID}&per_page=${limit}&status=active`,
      {
        headers: getCircleHeaders()
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Circle API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log(`✅ ${data.length || 0} membros carregados`);
    
    res.json({
      success: true,
      data
    });
  } catch (error) {
    console.error('❌ Erro ao buscar membros:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      data: []
    });
  }
});

// Rota 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Rota não encontrada'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log('');
  console.log('🚀 ================================');
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
  console.log('🚀 ================================');
  console.log('');
  console.log('📍 Rotas disponíveis:');
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log(`   POST http://localhost:${PORT}/api/chat`);
  console.log(`   GET  http://localhost:${PORT}/api/circle/test`);
  console.log(`   GET  http://localhost:${PORT}/api/circle/community/stats`);
  console.log(`   GET  http://localhost:${PORT}/api/circle/posts`);
  console.log(`   GET  http://localhost:${PORT}/api/circle/members`);
  console.log('');
});


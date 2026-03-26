import OpenAI from 'openai';

/**
 * Configuração de LLM para o chat
 * Suporta múltiplos providers: Groq (grátis), OpenAI, Anthropic
 */

// Determina qual provider usar baseado nas variáveis de ambiente
const LLM_PROVIDER = process.env.LLM_PROVIDER || 'groq'; // 'groq', 'openai', ou 'anthropic'

// Configuração do cliente baseado no provider
let llmClient;
let modelName;

if (LLM_PROVIDER === 'groq') {
  // GROQ - Rápido e GRATUITO! 🚀
  // Obtenha sua chave em: https://console.groq.com
  llmClient = new OpenAI({
    apiKey: process.env.GROQ_API_KEY || '',
    baseURL: 'https://api.groq.com/openai/v1'
  });
  modelName = 'llama-3.3-70b-versatile'; // Modelo excelente e rápido
  
} else if (LLM_PROVIDER === 'openai') {
  // OpenAI - GPT-4 ou GPT-3.5
  llmClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || ''
  });
  modelName = process.env.OPENAI_MODEL || 'gpt-4o-mini'; // ou 'gpt-4'
  
} else if (LLM_PROVIDER === 'anthropic') {
  // Anthropic Claude via OpenAI SDK
  llmClient = new OpenAI({
    apiKey: process.env.ANTHROPIC_API_KEY || '',
    baseURL: 'https://api.anthropic.com/v1'
  });
  modelName = 'claude-3-5-sonnet-20241022';
}

/**
 * System prompt especializado em TikTok Shop
 */
const SYSTEM_PROMPT = `Você é um assistente especializado em TikTok Shop, e-commerce e marketing digital. 

Seu papel é ajudar criadores de conteúdo e vendedores a terem sucesso no TikTok Shop, fornecendo:
- Estratégias de vendas práticas e comprovadas
- Dicas de criação de conteúdo viral
- Orientações sobre lives de vendas
- Análise de métricas e dados
- Programas de afiliados
- Melhores práticas de e-commerce

Características da sua comunicação:
- Seja direto, prático e acionável
- Use exemplos reais quando possível
- Forneça listas numeradas e estruturadas
- Use emojis para tornar a conversa mais amigável
- Faça perguntas para entender melhor o contexto do usuário
- Sempre termine com uma pergunta ou call-to-action para continuar a conversa

Lembre-se: você está aqui para ajudar pessoas a transformarem suas vidas através das vendas no TikTok Shop!`;

/**
 * Handler para processar mensagens do chat
 */
export async function handleChatMessage(req, res) {
  try {
    const { message, history = [] } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        success: false,
        error: 'Mensagem inválida'
      });
    }

    // Verifica se a API key está configurada
    const apiKey = process.env.GROQ_API_KEY || process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.warn('⚠️ API key não configurada. Configure GROQ_API_KEY, OPENAI_API_KEY ou ANTHROPIC_API_KEY no .env');
      
      // Retorna resposta simulada se não houver API key
      return res.json({
        success: true,
        message: getFallbackResponse(message),
        provider: 'fallback'
      });
    }

    console.log(`🤖 Processando mensagem com ${LLM_PROVIDER.toUpperCase()}...`);

    // Converte histórico para formato da API
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.slice(-10).map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: message }
    ];

    // Chama a API do LLM
    const completion = await llmClient.chat.completions.create({
      model: modelName,
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0
    });

    const assistantMessage = completion.choices[0].message.content;

    console.log('✅ Resposta gerada com sucesso!');

    res.json({
      success: true,
      message: assistantMessage,
      provider: LLM_PROVIDER,
      model: modelName
    });

  } catch (error) {
    console.error('❌ Erro ao processar mensagem:', error);
    
    // Se falhar, retorna resposta de fallback
    res.json({
      success: true,
      message: getFallbackResponse(req.body.message),
      provider: 'fallback',
      error: error.message
    });
  }
}

/**
 * Respostas de fallback caso a API não esteja configurada
 */
function getFallbackResponse(message) {
  const lowercaseMessage = message.toLowerCase();

  if (lowercaseMessage.includes('venda') || lowercaseMessage.includes('vender')) {
    return `Ótima pergunta sobre vendas! 🎯

Para aumentar suas vendas no TikTok Shop, recomendo:

1. **Conteúdo Autêntico**: Mostre você usando os produtos de forma genuína
2. **Lives Regulares**: Faça lives pelo menos 3x por semana
3. **Call to Action**: Sempre direcione para o link da loja
4. **Provas Sociais**: Mostre avaliações e depoimentos
5. **Ofertas Limitadas**: Crie senso de urgência

💡 **Dica Pro**: Configure uma API key (Groq é grátis!) para respostas ainda mais personalizadas!

Quer que eu detalhe alguma dessas estratégias?`;
  }

  return `Entendo sua dúvida! Para ter respostas mais inteligentes e personalizadas, configure uma chave de API:

🆓 **Groq (Recomendado - Grátis):**
1. Acesse https://console.groq.com
2. Crie uma conta e gere uma API key
3. Adicione no .env: \`GROQ_API_KEY=sua_chave\`

📚 **Outras opções:**
- OpenAI (GPT-4): https://platform.openai.com
- Anthropic (Claude): https://console.anthropic.com

Por enquanto, estou funcionando em modo básico. Como posso ajudar?`;
}

/**
 * Handler para streaming de respostas (implementação futura)
 */
export async function handleChatStream(req, res) {
  // TODO: Implementar streaming para respostas mais fluidas
  res.status(501).json({
    success: false,
    error: 'Streaming não implementado ainda'
  });
}

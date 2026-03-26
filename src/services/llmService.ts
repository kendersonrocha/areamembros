import { Message } from '@/components/features/chat/ChatInterface'

// URL da API do backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

/**
 * Envia mensagem para a LLM via backend
 */
export async function sendMessageToLLM(
  message: string, 
  history: Message[]
): Promise<string> {
  try {
    // Chama a API do backend
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history: history.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      })
    })

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`)
    }

    const data = await response.json()

    if (!data.success) {
      throw new Error(data.error || 'Erro ao processar mensagem')
    }

    return data.message

  } catch (error) {
    console.error('Erro ao enviar mensagem:', error)
    
    // Retorna mensagem de erro amigável
    return `Desculpe, tive um problema ao processar sua mensagem. 😔

Possíveis causas:
- Backend não está rodando (verifique http://localhost:3000/api/health)
- API key não configurada
- Erro de conexão

Tente novamente em alguns segundos!`
  }
}

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { sendMessageToLLM } from '@/services/llmService'

export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export function ChatInterface() {
  const { theme } = useTheme()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! 👋 Sou seu assistente de IA especializado em TikTok Shop. Como posso ajudá-lo hoje?',
      timestamp: new Date()
    }
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      // Envia para o serviço de LLM
      const response = await sendMessageToLLM(content, messages)
      
      // Adiciona resposta da IA
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      
      // Mensagem de erro amigável
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Desculpe, tive um problema ao processar sua mensagem. Por favor, tente novamente.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className={cn(
      "flex flex-col border-0 shadow-lg",
      theme === 'dark' ? "bg-neutral-900" : "bg-white"
    )}>
      {/* Área de mensagens */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-[500px] max-h-[600px]">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-4 max-w-[80%]">
              <div className="flex gap-2">
                <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input de mensagem */}
      <div className="border-t p-4">
        <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      </div>
    </Card>
  )
}

import { Message } from './ChatInterface'
import { Bot, User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'

  return (
    <div className={cn(
      "flex gap-3",
      isUser ? "justify-end" : "justify-start"
    )}>
      {/* Avatar - só mostra para assistente */}
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
        </div>
      )}

      {/* Mensagem */}
      <div className={cn(
        "rounded-lg p-4 max-w-[80%]",
        isUser 
          ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white" 
          : "bg-muted"
      )}>
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        <p className={cn(
          "text-xs mt-2",
          isUser ? "text-white/70" : "text-muted-foreground"
        )}>
          {message.timestamp.toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>

      {/* Avatar - só mostra para usuário */}
      {isUser && (
        <div className="flex-shrink-0">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
        </div>
      )}
    </div>
  )
}

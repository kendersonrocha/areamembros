import { Card } from '@/components/ui/card'
import { ChatInterface } from '@/components/features/chat/ChatInterface'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'
import { Bot, Zap } from 'lucide-react'

export function AIAssistant() {
  const { theme } = useTheme()

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className={cn(
              "text-3xl font-bold",
              theme === 'dark' ? "text-white" : "text-gray-900"
            )}>
              Assistente IA
            </h1>
            <p className={cn(
              "text-sm",
              theme === 'dark' ? "text-gray-400" : "text-gray-600"
            )}>
              Seu mentor inteligente de TikTok Shop
            </p>
          </div>
        </div>
      </div>

      {/* Sugestões rápidas */}
      <div className="grid gap-3 md:grid-cols-3">
        <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
          <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-medium mb-1">Estratégias de Vendas</h3>
              <p className="text-sm text-muted-foreground">
                Como aumentar minhas vendas no TikTok Shop?
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
          <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-medium mb-1">Conteúdo Viral</h3>
              <p className="text-sm text-muted-foreground">
                Dicas para criar vídeos que viralizam
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4 hover:bg-accent cursor-pointer transition-colors">
          <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 text-primary mt-1" />
            <div>
              <h3 className="font-medium mb-1">Live Commerce</h3>
              <p className="text-sm text-muted-foreground">
                Como fazer lives que convertem em vendas?
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Interface de Chat */}
      <ChatInterface />
    </div>
  )
}

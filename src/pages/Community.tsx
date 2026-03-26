import { ExternalLink, Users, MessageCircle, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useCommunityStats } from '@/hooks/useCommunity'

export function Community() {
  const communityUrl = 'https://vsd.circle.so/feed'
  const { stats, loading, error } = useCommunityStats()

  // Verificar se estamos usando dados simulados
  const isUsingMockData = stats.members_count > 0 && (error?.includes('simulados') || error?.includes('exemplo'))

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold">Comunidade VSD</h1>
        <p className="text-muted-foreground mt-1">
          Conecte-se com outros alunos e compartilhe experiências
        </p>
      </div>

      {/* Aviso de dados simulados */}
      {isUsingMockData && (
        <Card className="border-blue-500 bg-blue-50 dark:bg-blue-900/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 dark:text-blue-400 text-xl">ℹ️</span>
              <div>
                <p className="text-blue-800 dark:text-blue-200 text-sm font-semibold mb-1">
                  Estatísticas de Exemplo
                </p>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-2">
                  O Circle.so não fornece API pública para estatísticas. Os números exibidos são ilustrativos.
                </p>
                <p className="text-blue-600 dark:text-blue-400 text-xs">
                  💡 Clique em "Abrir Comunidade" para ver os dados reais em tempo real.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats da Comunidade - DADOS REAIS */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Membros Ativos
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-2xl font-bold">Carregando...</div>
            ) : (
              <>
                <div className="text-2xl font-bold">
                  {stats.members_count.toLocaleString('pt-BR')}
                </div>
                <p className="text-xs text-muted-foreground">
                  membros na comunidade
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Discussões
            </CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-2xl font-bold">Carregando...</div>
            ) : (
              <>
                <div className="text-2xl font-bold">
                  {stats.posts_count.toLocaleString('pt-BR')}
                </div>
                <p className="text-xs text-muted-foreground">
                  posts publicados
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Engajamento
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-2xl font-bold">Carregando...</div>
            ) : (
              <>
                <div className="text-2xl font-bold">
                  {stats.comments_count.toLocaleString('pt-BR')}
                </div>
                <p className="text-xs text-muted-foreground">
                  comentários
                </p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {error && !isUsingMockData && (
        <Card className="border-red-500">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <p className="text-red-500 font-semibold">⚠️ {error}</p>
              <p className="text-sm text-muted-foreground">
                Os dados serão carregados quando a conexão for estabelecida.
              </p>
              
              {/* Informações de debug */}
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">🔧 Informações de Debug:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Verifique se o arquivo .env está configurado corretamente</li>
                  <li>• Confirme se o token da API Circle está válido</li>
                  <li>• Verifique se o Community ID está correto</li>
                  <li>• Abra o console do navegador (F12) para mais detalhes</li>
                </ul>
              </div>
              
              {/* Botão para tentar novamente */}
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.reload()}
                className="mt-2"
              >
                🔄 Tentar Novamente
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Card principal da comunidade */}
      <Card>
        <CardHeader>
          <CardTitle>Acesse a Comunidade</CardTitle>
          <CardDescription>
            Junte-se a milhares de alunos compartilhando conhecimento
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* ... resto do código permanece igual ... */}
          <div className="relative w-full h-[600px] rounded-lg border overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Users className="h-16 w-16 mx-auto text-muted-foreground" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Comunidade VSD
                  </h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    Participe de discussões, tire dúvidas e compartilhe suas conquistas
                    com outros membros da comunidade.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => window.open(communityUrl, '_blank')}
                    className="gap-2"
                  >
                    Abrir Comunidade
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    Ver Guia de Uso
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ... resto do código ... */}
        </CardContent>
      </Card>
    </div>
  )
}
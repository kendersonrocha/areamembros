import { Award, Download, Share2, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { courses, userStats } from '@/data/mockData'
import { useAuth } from '@/hooks/useAuth'

export function Certificates() {
  const { user } = useAuth()

  // Certificados ganhos (cursos com 100% de progresso)
  const earnedCertificates = courses.filter(c => c.progress === 100)

  // Certificados disponíveis (cursos em andamento)
  const availableCertificates = courses.filter(c => c.progress > 0 && c.progress < 100)

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold">Certificados</h1>
        <p className="text-muted-foreground mt-1">
          Seus certificados de conclusão de cursos
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Certificados Ganhos
            </CardTitle>
            <Award className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userStats.certificatesEarned}</div>
            <p className="text-xs text-muted-foreground">
              de {courses.length} cursos disponíveis
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Em Progresso
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{availableCertificates.length}</div>
            <p className="text-xs text-muted-foreground">
              Continue para desbloquear
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Taxa de Conclusão
            </CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((userStats.certificatesEarned / courses.length) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Média da plataforma: 34%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Certificados Ganhos */}
      <Card>
        <CardHeader>
          <CardTitle>Meus Certificados</CardTitle>
          <CardDescription>
            Certificados que você já conquistou
          </CardDescription>
        </CardHeader>
        <CardContent>
          {earnedCertificates.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {earnedCertificates.map((course) => (
                <div
                  key={course.id}
                  className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6"
                >
                  {/* Selo de certificado */}
                  <div className="absolute top-4 right-4">
                    <Award className="h-8 w-8 text-yellow-500" />
                  </div>

                  {/* Conteúdo */}
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-2">Certificado de Conclusão</Badge>
                      <h3 className="font-bold text-lg">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Instrutor: {course.instructor}
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-xs text-muted-foreground mb-1">Concedido a:</p>
                      <p className="font-semibold">{user?.name}</p>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      <p>Data de conclusão: {new Date().toLocaleDateString('pt-BR')}</p>
                      <p>ID: CERT-{course.id}-{new Date().getFullYear()}</p>
                    </div>

                    {/* Ações */}
                    <div className="flex gap-2 pt-4">
                      <Button size="sm" className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Baixar
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Share2 className="mr-2 h-4 w-4" />
                        Compartilhar
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Award className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold mb-2">Nenhum certificado ainda</h3>
              <p className="text-sm text-muted-foreground">
                Complete seus primeiros cursos para ganhar certificados
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Certificados Disponíveis */}
      {availableCertificates.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Próximos Certificados</CardTitle>
            <CardDescription>
              Continue estudando para desbloquear estes certificados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {availableCertificates.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center gap-4 p-4 rounded-lg border"
                >
                  {/* Thumbnail */}
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-24 h-16 object-cover rounded"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="font-semibold">{course.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {course.instructor}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium w-12">
                        {course.progress}%
                      </span>
                    </div>
                  </div>

                  {/* Badge */}
                  <Badge variant="outline" className="whitespace-nowrap">
                    {100 - course.progress}% restante
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Info sobre certificados */}
      <Card>
        <CardHeader>
          <CardTitle>Sobre os Certificados</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm dark:prose-invert max-w-none">
          <p className="text-muted-foreground">
            Nossos certificados são emitidos automaticamente ao concluir 100% de um curso.
            Eles incluem informações sobre o curso, instrutor, carga horária e podem ser
            compartilhados no LinkedIn e outras redes sociais.
          </p>
          
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold mb-2 text-foreground">Requisitos para Certificação:</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Assistir 100% das aulas do curso</li>
              <li>Marcar todas as lições como concluídas</li>
              <li>Conta ativa e em dia</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


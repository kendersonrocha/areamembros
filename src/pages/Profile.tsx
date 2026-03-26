import { Mail, Calendar, Award, BookOpen, Clock, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { courses, userStats } from '@/data/mockData'

export function Profile() {
  const { user } = useAuth()

  // Conquistas mockadas
  const achievements = [
    { id: 1, title: 'Primeira Venda', description: 'Fez sua primeira venda no TikTok Shop', icon: '🎉', earned: true },
    { id: 2, title: 'Estudante Dedicado', description: 'Completou 5 cursos', icon: '📚', earned: true },
    { id: 3, title: 'Sequência de 7 dias', description: 'Assistiu aulas por 7 dias seguidos', icon: '🔥', earned: true },
    { id: 4, title: 'Mestre do Live', description: 'Completou o curso de Lives', icon: '🎥', earned: false },
    { id: 5, title: 'Top 10', description: 'Entre os 10 melhores da comunidade', icon: '🏆', earned: false },
    { id: 6, title: 'Afiliado Pro', description: 'Ganhou mais de R$1000 com afiliados', icon: '💰', earned: false }
  ]

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold">Meu Perfil</h1>
        <p className="text-muted-foreground mt-1">
          Gerencie suas informações e acompanhe seu progresso
        </p>
      </div>

      {/* Grid principal */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Coluna esquerda - Info do usuário */}
        <div className="lg:col-span-1 space-y-6">
          {/* Card do perfil */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="text-2xl">
                    {user?.name?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>

                {/* Nome e email */}
                <h2 className="text-2xl font-bold mb-1">{user?.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {user?.email}
                </p>

                {/* Badge de membro */}
                <Badge className="mb-4">Membro Premium</Badge>

                {/* Botão editar */}
                <Button variant="outline" className="w-full">
                  Editar Perfil
                </Button>
              </div>

              {/* Info adicional */}
              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{user?.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Membro desde {new Date(user?.memberSince || '').toLocaleDateString('pt-BR')}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Cursos Completos</span>
                </div>
                <span className="font-bold">{userStats.completedCourses}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Horas Assistidas</span>
                </div>
                <span className="font-bold">{userStats.totalHoursWatched}h</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Certificados</span>
                </div>
                <span className="font-bold">{userStats.certificatesEarned}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Ranking</span>
                </div>
                <span className="font-bold">#{userStats.communityRank}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coluna direita - Conquistas e cursos */}
        <div className="lg:col-span-2 space-y-6">
          {/* Conquistas */}
          <Card>
            <CardHeader>
              <CardTitle>Conquistas</CardTitle>
              <CardDescription>
                Seus marcos de aprendizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex gap-3 p-4 rounded-lg border ${
                      achievement.earned
                        ? 'bg-card'
                        : 'opacity-50 bg-muted'
                    }`}
                  >
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.earned && (
                      <Award className="h-5 w-5 text-yellow-500" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cursos em andamento */}
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Cursos</CardTitle>
              <CardDescription>
                Cursos que você está fazendo ou completou
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courses.slice(0, 5).map((course) => (
                  <div key={course.id} className="flex gap-4 pb-4 border-b last:border-0">
                    {/* Thumbnail pequena */}
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-20 h-14 object-cover rounded"
                    />

                    {/* Info */}
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">
                        {course.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {course.instructor}
                      </p>

                      {/* Progress */}
                      <div className="flex items-center gap-2">
                        <Progress value={course.progress} className="flex-1 h-2" />
                        <span className="text-xs font-medium w-10">
                          {course.progress}%
                        </span>
                      </div>
                    </div>

                    {/* Badge de status */}
                    {course.progress === 100 ? (
                      <Badge className="bg-green-500">Concluído</Badge>
                    ) : course.progress > 0 ? (
                      <Badge variant="secondary">Em andamento</Badge>
                    ) : (
                      <Badge variant="outline">Não iniciado</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Configurações de notificação */}
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Notificação</CardTitle>
              <CardDescription>
                Gerencie como você quer receber atualizações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Novas aulas</p>
                  <p className="text-xs text-muted-foreground">
                    Receber notificação quando novas aulas forem lançadas
                  </p>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Lives ao vivo</p>
                  <p className="text-xs text-muted-foreground">
                    Lembrete quando uma live estiver prestes a começar
                  </p>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Discussões da comunidade</p>
                  <p className="text-xs text-muted-foreground">
                    Notificações de respostas e menções
                  </p>
                </div>
                <input type="checkbox" className="rounded" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Newsletter semanal</p>
                  <p className="text-xs text-muted-foreground">
                    Resumo semanal por email
                  </p>
                </div>
                <input type="checkbox" defaultChecked className="rounded" />
              </div>

              <Button className="w-full mt-4">
                Salvar Preferências
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


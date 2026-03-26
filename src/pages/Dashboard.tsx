import { Link } from 'react-router-dom'
import { Clock, BookOpen, Award, TrendingUp, Play, CheckCircle, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ProgressCard } from '@/components/features/ProgressCard'
import { BorderGlowCard } from '@/components/ui/border-glow-card'
import { courses, userStats, recentActivities, upcomingLives } from '@/data/mockData'
import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export function Dashboard() {
  const { user } = useAuth()
  const { theme } = useTheme()
  
  // Cursos em andamento (com progresso > 0 e < 100)
  const coursesInProgress = courses.filter(
    course => course.progress > 0 && course.progress < 100
  ).slice(0, 3)

  return (
    <div className="space-y-6">
      {/* Cabeçalho de boas-vindas */}
      <div>
        <h1 className={cn(
          "text-3xl font-bold",
          theme === 'dark' ? "text-white" : "text-gray-900"
        )}>
          Olá, {user?.name?.split(' ')[0]}! 👋
        </h1>
        <p className={cn(
          "mt-1",
          theme === 'dark' ? "text-gray-400" : "text-gray-600"
        )}>
          Bem-vindo de volta à sua jornada de aprendizado
        </p>
      </div>

      {/* Grid de Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Progresso Geral */}
        <BorderGlowCard>
          <Card className={cn(
            "border-0 h-full",
            theme === 'dark' ? "bg-neutral-900" : ""
          )}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Progresso Geral
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47%</div>
              <p className="text-xs text-muted-foreground">
                +12% desde o mês passado
              </p>
              <Progress value={47} className="mt-2" />
            </CardContent>
          </Card>
        </BorderGlowCard>

        {/* Horas Assistidas */}
        <BorderGlowCard>
          <Card className={cn(
            "border-0 h-full",
            theme === 'dark' ? "bg-neutral-900" : ""
          )}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Horas Assistidas
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.totalHoursWatched}h</div>
              <p className="text-xs text-muted-foreground">
                Sequência de {userStats.weeklyStreak} dias
              </p>
            </CardContent>
          </Card>
        </BorderGlowCard>

        {/* Módulos Concluídos */}
        <BorderGlowCard>
          <Card className={cn(
            "border-0 h-full",
            theme === 'dark' ? "bg-neutral-900" : ""
          )}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Módulos Completos
              </CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.completedModules}</div>
              <p className="text-xs text-muted-foreground">
                de {courses.reduce((acc, c) => acc + c.totalModules, 0)} módulos totais
              </p>
            </CardContent>
          </Card>
        </BorderGlowCard>

        {/* Certificados */}
        <BorderGlowCard>
          <Card className={cn(
            "border-0 h-full",
            theme === 'dark' ? "bg-neutral-900" : ""
          )}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Certificados
              </CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.certificatesEarned}</div>
              <p className="text-xs text-muted-foreground">
                Ranking #{userStats.communityRank} na comunidade
              </p>
            </CardContent>
          </Card>
        </BorderGlowCard>
      </div>

      {/* Seção principal com 2 colunas */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Coluna esquerda - Continuar assistindo e atividades */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continuar Assistindo */}
          <BorderGlowCard>
            <Card className={cn(
              "border-0 h-full",
              theme === 'dark' ? "bg-neutral-900" : ""
            )}>
              <CardHeader>
                <CardTitle>Continuar Assistindo</CardTitle>
                <CardDescription>
                  Retome seus cursos de onde parou
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {coursesInProgress.map((course) => (
                    <Link
                      key={course.id}
                      to={`/courses/${course.id}`}
                      className="flex gap-4 p-3 rounded-lg border hover:bg-accent transition-colors"
                    >
                      {/* Thumbnail */}
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-32 h-20 object-cover rounded"
                      />
                      
                      {/* Info */}
                      <div className="flex-1">
                        <h4 className="font-medium mb-1">{course.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Por {course.instructor}
                        </p>
                        
                        {/* Progress */}
                        <div className="flex items-center gap-2">
                          <Progress value={course.progress} className="flex-1" />
                          <span className="text-xs font-medium">
                            {course.progress}%
                          </span>
                        </div>
                      </div>

                      {/* Ícone de play */}
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Play className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Ver todos os cursos */}
                <Link
                  to="/courses"
                  className="block text-center text-sm text-primary hover:underline mt-4"
                >
                  Ver todos os cursos
                </Link>
              </CardContent>
            </Card>
          </BorderGlowCard>

          {/* Atividades Recentes */}
          <BorderGlowCard>
            <Card className={cn(
              "border-0 h-full",
              theme === 'dark' ? "bg-neutral-900" : ""
            )}>
              <CardHeader>
                <CardTitle>Atividades Recentes</CardTitle>
                <CardDescription>
                  Acompanhe seu progresso
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex gap-3">
                      {/* Ícone */}
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          {activity.type === 'completed' && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                          {activity.type === 'started' && (
                            <Play className="h-5 w-5 text-blue-500" />
                          )}
                          {activity.type === 'certificate' && (
                            <Award className="h-5 w-5 text-yellow-500" />
                          )}
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {activity.course}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {activity.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </BorderGlowCard>
        </div>

        {/* Coluna direita - Progresso e Lives */}
        <div className="space-y-6">
          {/* Progresso Circular */}
          <ProgressCard value={47} size={140} />

          {/* Próximas Lives */}
          <BorderGlowCard>
            <Card className={cn(
              "border-0 h-full",
              theme === 'dark' ? "bg-neutral-900" : ""
            )}>
              <CardHeader>
                <CardTitle>Próximas Lives</CardTitle>
                <CardDescription>
                  Não perca as aulas ao vivo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingLives.map((live) => (
                    <div key={live.id} className="space-y-2">
                      {/* Thumbnail */}
                      <img
                        src={live.thumbnail}
                        alt={live.title}
                        className="w-full h-24 object-cover rounded"
                      />
                      
                      {/* Info */}
                      <h4 className="font-medium text-sm">{live.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        Com {live.instructor}
                      </p>
                      
                      {/* Data e hora */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(live.date).toLocaleDateString('pt-BR')} às {live.time}
                        </span>
                      </div>

                      {/* Badge */}
                      <Badge variant="outline" className="w-full justify-center">
                        Adicionar ao Calendário
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </BorderGlowCard>
        </div>
      </div>
    </div>
  )
}


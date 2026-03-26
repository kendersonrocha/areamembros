import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  ChevronLeft, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  Lock, 
  Play,
  Download,
  MessageCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { VideoPlayer } from '@/components/features/VideoPlayer'
import { courses } from '@/data/mockData'

export function CourseDetails() {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('modules')
  
  // Buscar o curso pelos dados mockados
  const course = courses.find(c => c.id === id)

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <h2 className="text-2xl font-bold mb-2">Curso não encontrado</h2>
        <p className="text-muted-foreground mb-4">
          O curso que você está procurando não existe.
        </p>
        <Link
          to="/courses"
          className="text-primary hover:underline"
        >
          Voltar para cursos
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Link
        to="/courses"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar para cursos
      </Link>

      {/* Hero Section com Video Player */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Video Player - 2 colunas */}
        <div className="lg:col-span-2">
          <VideoPlayer
            thumbnail={course.thumbnail}
            title={course.title}
          />
        </div>

        {/* Info Card - 1 coluna */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{course.category}</Badge>
              {course.isNew && <Badge className="bg-green-500">Novo</Badge>}
            </div>
            <CardTitle className="text-xl">{course.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-2">
              Por {course.instructor}
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Seu Progresso</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold">{course.totalModules}</div>
                <div className="text-xs text-muted-foreground">Módulos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{course.totalLessons}</div>
                <div className="text-xs text-muted-foreground">Aulas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{course.duration}</div>
                <div className="text-xs text-muted-foreground">Duração</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {course.modules.filter(m => !m.isLocked).length}
                </div>
                <div className="text-xs text-muted-foreground">Disponíveis</div>
              </div>
            </div>

            {/* Descrição curta */}
            <p className="text-sm text-muted-foreground pt-4 border-t">
              {course.description}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs de Conteúdo */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="modules">Módulos</TabsTrigger>
          <TabsTrigger value="about">Sobre</TabsTrigger>
          <TabsTrigger value="materials">Materiais</TabsTrigger>
          <TabsTrigger value="discussions">Discussões</TabsTrigger>
        </TabsList>

        {/* Módulos */}
        <TabsContent value="modules" className="space-y-4">
          {course.modules.map((module, moduleIndex) => (
            <Card key={module.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary font-bold">
                      {moduleIndex + 1}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {module.lessons.length} aulas
                      </p>
                    </div>
                  </div>
                  {module.isLocked && (
                    <Lock className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border ${
                        lesson.isLocked
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:bg-accent cursor-pointer'
                      }`}
                    >
                      {/* Status Icon */}
                      <div>
                        {lesson.isCompleted ? (
                          <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                        ) : lesson.isLocked ? (
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                          </div>
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Play className="h-4 w-4 text-primary" />
                          </div>
                        )}
                      </div>

                      {/* Lesson Info */}
                      <div className="flex-1">
                        <p className="font-medium text-sm">{lesson.title}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <Clock className="h-3 w-3" />
                          {lesson.duration}
                        </div>
                      </div>

                      {/* Badge */}
                      {lesson.isCompleted && (
                        <Badge variant="outline" className="text-green-500 border-green-500">
                          Concluído
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Sobre */}
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>Sobre o Curso</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
              <h3>Descrição</h3>
              <p>{course.description}</p>
              
              <h3>O que você vai aprender</h3>
              <ul>
                <li>Como configurar sua conta no TikTok Shop</li>
                <li>Estratégias de precificação e posicionamento</li>
                <li>Técnicas avançadas de vendas</li>
                <li>Como criar conteúdo que converte</li>
                <li>Análise de métricas e otimização</li>
              </ul>

              <h3>Requisitos</h3>
              <ul>
                <li>Ter uma conta no TikTok</li>
                <li>Vontade de aprender e aplicar</li>
                <li>Computador ou smartphone com acesso à internet</li>
              </ul>

              <h3>Instrutor</h3>
              <p>
                <strong>{course.instructor}</strong> é especialista em e-commerce 
                e marketing digital, com mais de 5 anos de experiência em vendas online.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Materiais */}
        <TabsContent value="materials">
          <Card>
            <CardHeader>
              <CardTitle>Material de Apoio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'Checklist de Configuração.pdf', size: '2.3 MB' },
                  { name: 'Template de Descrição de Produtos.docx', size: '1.1 MB' },
                  { name: 'Planilha de Precificação.xlsx', size: '856 KB' },
                  { name: 'Guia de Hashtags.pdf', size: '1.8 MB' }
                ].map((file, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{file.size}</p>
                      </div>
                    </div>
                    <Download className="h-5 w-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Discussões */}
        <TabsContent value="discussions">
          <Card>
            <CardHeader>
              <CardTitle>Discussões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-semibold mb-2">Nenhuma discussão ainda</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Seja o primeiro a iniciar uma discussão sobre este curso
                </p>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                  Iniciar Discussão
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


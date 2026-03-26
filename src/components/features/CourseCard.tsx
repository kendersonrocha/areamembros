import { Link } from 'react-router-dom'
import { Clock, BookOpen, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import type { Course } from '@/data/mockData'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-110"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {course.isNew && (
              <Badge className="bg-green-500">Novo</Badge>
            )}
            {course.isTrending && (
              <Badge className="bg-orange-500">
                <TrendingUp className="mr-1 h-3 w-3" />
                Em Alta
              </Badge>
            )}
          </div>

          {/* Categoria */}
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary">{course.category}</Badge>
          </div>
        </div>

        <CardContent className="p-4">
          {/* Título e Descrição */}
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {course.description}
          </p>

          {/* Instrutor */}
          <p className="text-xs text-muted-foreground mb-3">
            Por {course.instructor}
          </p>

          {/* Progress Bar */}
          {course.progress > 0 && (
            <div className="mb-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-muted-foreground">Progresso</span>
                <span className="font-medium">{course.progress}%</span>
              </div>
              <Progress value={course.progress} />
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {course.duration}
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              {course.totalLessons} aulas
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          {course.progress > 0 ? (
            <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2 text-sm font-medium transition-colors">
              Continuar Assistindo
            </button>
          ) : (
            <button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md py-2 text-sm font-medium transition-colors">
              Começar Curso
            </button>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}


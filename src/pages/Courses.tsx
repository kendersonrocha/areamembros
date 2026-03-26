import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { CourseCard } from '@/components/features/CourseCard'
import { Skeleton } from '@/components/ui/skeleton'
import { courses } from '@/data/mockData'

type FilterType = 'all' | 'in-progress' | 'not-started' | 'completed'

export function Courses() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [isLoading] = useState(false)

  const filters: { label: string; value: FilterType }[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Em Andamento', value: 'in-progress' },
    { label: 'Não Iniciados', value: 'not-started' },
    { label: 'Concluídos', value: 'completed' }
  ]

  // Filtrar cursos
  const filteredCourses = courses.filter(course => {
    // Filtro de busca
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase())

    if (!matchesSearch) return false

    // Filtro de status
    switch (activeFilter) {
      case 'in-progress':
        return course.progress > 0 && course.progress < 100
      case 'not-started':
        return course.progress === 0
      case 'completed':
        return course.progress === 100
      default:
        return true
    }
  })

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold">Meus Cursos</h1>
        <p className="text-muted-foreground mt-1">
          Explore e continue seus cursos sobre TikTok Shop
        </p>
      </div>

      {/* Busca e Filtros */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Busca */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar cursos..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filtros */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((filter) => (
            <Badge
              key={filter.value}
              variant={activeFilter === filter.value ? 'default' : 'outline'}
              className="cursor-pointer"
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </Badge>
          ))}
        </div>
      </div>

      {/* Grid de Cursos */}
      {isLoading ? (
        // Skeleton loading
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : filteredCourses.length > 0 ? (
        // Grid de cursos
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        // Empty state
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="rounded-full bg-muted p-6 mb-4">
            <Search className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            Nenhum curso encontrado
          </h3>
          <p className="text-muted-foreground max-w-md">
            Não encontramos cursos com os filtros selecionados. 
            Tente ajustar sua busca ou filtros.
          </p>
        </div>
      )}

      {/* Stats */}
      {filteredCourses.length > 0 && (
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-6 border-t">
          <span>{filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado{filteredCourses.length !== 1 ? 's' : ''}</span>
          <span>•</span>
          <span>{courses.reduce((acc, c) => acc + c.totalLessons, 0)} aulas totais</span>
          <span>•</span>
          <span>{courses.reduce((acc, c) => acc + parseInt(c.duration), 0)}h+ de conteúdo</span>
        </div>
      )}
    </div>
  )
}


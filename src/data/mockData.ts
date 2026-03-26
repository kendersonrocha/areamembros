// Dados mockados para a plataforma

export interface Course {
  id: string
  title: string
  description: string
  thumbnail: string
  instructor: string
  duration: string
  totalModules: number
  totalLessons: number
  progress: number
  category: string
  isNew: boolean
  isTrending: boolean
  modules: Module[]
}

export interface Module {
  id: string
  title: string
  lessons: Lesson[]
  isLocked: boolean
}

export interface Lesson {
  id: string
  title: string
  duration: string
  isCompleted: boolean
  isLocked: boolean
  videoUrl: string
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'TikTok Shop: Do Zero ao Primeiro Pedido',
    description: 'Aprenda a criar sua loja no TikTok Shop e fazer suas primeiras vendas',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    instructor: 'Maria Santos',
    duration: '12h 30min',
    totalModules: 3,
    totalLessons: 15,
    progress: 65,
    category: 'Iniciante',
    isNew: true,
    isTrending: true,
    modules: [
      {
        id: '1-1',
        title: 'Introdução ao TikTok Shop',
        isLocked: false,
        lessons: [
          { id: '1-1-1', title: 'Boas-vindas ao curso', duration: '5:30', isCompleted: true, isLocked: false, videoUrl: '' },
          { id: '1-1-2', title: 'O que é TikTok Shop', duration: '10:15', isCompleted: true, isLocked: false, videoUrl: '' },
          { id: '1-1-3', title: 'Requisitos para começar', duration: '8:45', isCompleted: true, isLocked: false, videoUrl: '' },
          { id: '1-1-4', title: 'Criando sua conta seller', duration: '12:20', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '1-2',
        title: 'Configurando sua Loja',
        isLocked: false,
        lessons: [
          { id: '1-2-1', title: 'Cadastrando produtos', duration: '15:30', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '1-2-2', title: 'Precificação estratégica', duration: '18:45', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '1-2-3', title: 'Fotos e descrições que vendem', duration: '20:10', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '1-2-4', title: 'Configurando frete', duration: '10:30', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '1-2-5', title: 'Políticas de troca e devolução', duration: '8:15', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '1-3',
        title: 'Fazendo suas Primeiras Vendas',
        isLocked: false,
        lessons: [
          { id: '1-3-1', title: 'Criando vídeos de produtos', duration: '25:40', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '1-3-2', title: 'Estratégias de lives', duration: '22:30', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '1-3-3', title: 'Anúncios no TikTok', duration: '16:45', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '1-3-4', title: 'Atendimento ao cliente', duration: '12:20', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '1-3-5', title: 'Analisando resultados', duration: '14:15', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Lives que Vendem: Dominando o TikTok Live',
    description: 'Aprenda técnicas avançadas para fazer lives de vendas de alta conversão',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    instructor: 'Pedro Costa',
    duration: '8h 45min',
    totalModules: 3,
    totalLessons: 12,
    progress: 30,
    category: 'Intermediário',
    isNew: false,
    isTrending: true,
    modules: [
      {
        id: '2-1',
        title: 'Preparação para Lives',
        isLocked: false,
        lessons: [
          { id: '2-1-1', title: 'Equipamentos necessários', duration: '10:30', isCompleted: true, isLocked: false, videoUrl: '' },
          { id: '2-1-2', title: 'Iluminação profissional', duration: '8:20', isCompleted: true, isLocked: false, videoUrl: '' },
          { id: '2-1-3', title: 'Áudio de qualidade', duration: '7:15', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '2-1-4', title: 'Cenário ideal', duration: '12:40', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '2-2',
        title: 'Técnicas de Vendas ao Vivo',
        isLocked: false,
        lessons: [
          { id: '2-2-1', title: 'Engajamento com público', duration: '20:30', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '2-2-2', title: 'Gatilhos mentais em lives', duration: '18:45', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '2-2-3', title: 'Demonstrações eficazes', duration: '15:20', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '2-2-4', title: 'Lidando com objeções', duration: '14:30', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '2-3',
        title: 'Escalando suas Lives',
        isLocked: true,
        lessons: [
          { id: '2-3-1', title: 'Agendamento estratégico', duration: '12:15', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '2-3-2', title: 'Divulgação de lives', duration: '10:30', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '2-3-3', title: 'Parcerias com creators', duration: '16:45', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '2-3-4', title: 'Métricas e otimização', duration: '14:20', isCompleted: false, isLocked: true, videoUrl: '' },
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Dropshipping no TikTok Shop',
    description: 'Monte seu negócio de dropshipping e venda sem estoque',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    instructor: 'Ana Paula',
    duration: '15h 20min',
    totalModules: 3,
    totalLessons: 14,
    progress: 0,
    category: 'Avançado',
    isNew: true,
    isTrending: false,
    modules: [
      {
        id: '3-1',
        title: 'Fundamentos do Dropshipping',
        isLocked: false,
        lessons: [
          { id: '3-1-1', title: 'O que é dropshipping', duration: '8:30', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '3-1-2', title: 'Vantagens e desafios', duration: '10:15', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '3-1-3', title: 'Modelo de negócio', duration: '12:45', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '3-1-4', title: 'Legalização', duration: '15:20', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '3-2',
        title: 'Encontrando Fornecedores',
        isLocked: true,
        lessons: [
          { id: '3-2-1', title: 'Plataformas de fornecedores', duration: '18:30', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '3-2-2', title: 'Analisando fornecedores', duration: '14:45', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '3-2-3', title: 'Negociação e contratos', duration: '20:10', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '3-2-4', title: 'Testando produtos', duration: '16:30', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '3-2-5', title: 'Logística internacional', duration: '22:15', isCompleted: false, isLocked: true, videoUrl: '' },
        ]
      },
      {
        id: '3-3',
        title: 'Operação e Escala',
        isLocked: true,
        lessons: [
          { id: '3-3-1', title: 'Automatizando pedidos', duration: '17:40', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '3-3-2', title: 'Gestão de estoque virtual', duration: '15:30', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '3-3-3', title: 'SAC para dropshipping', duration: '13:45', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '3-3-4', title: 'Escalando vendas', duration: '19:20', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '3-3-5', title: 'Indicadores de performance', duration: '16:15', isCompleted: false, isLocked: true, videoUrl: '' },
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Marketing de Afiliados no TikTok',
    description: 'Lucre promovendo produtos de terceiros com o programa de afiliados',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    instructor: 'Carlos Mendes',
    duration: '10h 15min',
    totalModules: 3,
    totalLessons: 13,
    progress: 45,
    category: 'Intermediário',
    isNew: false,
    isTrending: true,
    modules: [
      {
        id: '4-1',
        title: 'Programa de Afiliados',
        isLocked: false,
        lessons: [
          { id: '4-1-1', title: 'Como funciona', duration: '9:30', isCompleted: true, isLocked: false, videoUrl: '' },
          { id: '4-1-2', title: 'Cadastro e aprovação', duration: '7:15', isCompleted: true, isLocked: false, videoUrl: '' },
          { id: '4-1-3', title: 'Escolhendo nichos lucrativos', duration: '15:45', isCompleted: true, isLocked: false, videoUrl: '' },
          { id: '4-1-4', title: 'Comissões e pagamentos', duration: '11:20', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '4-2',
        title: 'Criando Conteúdo Afiliado',
        isLocked: false,
        lessons: [
          { id: '4-2-1', title: 'Vídeos de review', duration: '18:30', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '4-2-2', title: 'Unboxing que converte', duration: '16:45', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '4-2-3', title: 'Comparativos de produtos', duration: '14:20', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '4-2-4', title: 'Tutoriais de uso', duration: '17:30', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '4-2-5', title: 'CTA efetivos', duration: '12:15', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '4-3',
        title: 'Otimização e Crescimento',
        isLocked: true,
        lessons: [
          { id: '4-3-1', title: 'SEO no TikTok', duration: '19:40', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '4-3-2', title: 'Análise de métricas', duration: '15:30', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '4-3-3', title: 'Parcerias estratégicas', duration: '13:45', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '4-3-4', title: 'Multiplicando receita', duration: '16:20', isCompleted: false, isLocked: true, videoUrl: '' },
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Criação de Conteúdo Viral',
    description: 'Aprenda a criar vídeos que viralizam e atraem milhares de clientes',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80',
    instructor: 'Juliana Reis',
    duration: '7h 30min',
    totalModules: 3,
    totalLessons: 12,
    progress: 15,
    category: 'Iniciante',
    isNew: false,
    isTrending: false,
    modules: [
      {
        id: '5-1',
        title: 'Fundamentos de Conteúdo',
        isLocked: false,
        lessons: [
          { id: '5-1-1', title: 'Algoritmo do TikTok', duration: '12:30', isCompleted: true, isLocked: false, videoUrl: '' },
          { id: '5-1-2', title: 'Tipos de conteúdo', duration: '10:15', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '5-1-3', title: 'Storytelling', duration: '15:45', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '5-1-4', title: 'Hook perfeito', duration: '11:20', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '5-2',
        title: 'Produção de Vídeos',
        isLocked: false,
        lessons: [
          { id: '5-2-1', title: 'Equipamentos básicos', duration: '8:30', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '5-2-2', title: 'Edição no celular', duration: '16:45', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '5-2-3', title: 'Efeitos e transições', duration: '14:20', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '5-2-4', title: 'Músicas e áudios', duration: '12:30', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '5-3',
        title: 'Estratégia de Posting',
        isLocked: true,
        lessons: [
          { id: '5-3-1', title: 'Melhores horários', duration: '10:40', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '5-3-2', title: 'Frequência ideal', duration: '9:30', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '5-3-3', title: 'Hashtags estratégicas', duration: '11:45', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '5-3-4', title: 'Engajamento com público', duration: '13:20', isCompleted: false, isLocked: true, videoUrl: '' },
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Análise de Dados e Métricas',
    description: 'Domine os números e otimize suas vendas com análise de dados',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    instructor: 'Roberto Lima',
    duration: '9h 45min',
    totalModules: 3,
    totalLessons: 11,
    progress: 0,
    category: 'Avançado',
    isNew: true,
    isTrending: false,
    modules: [
      {
        id: '6-1',
        title: 'Métricas Essenciais',
        isLocked: false,
        lessons: [
          { id: '6-1-1', title: 'KPIs do TikTok Shop', duration: '14:30', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '6-1-2', title: 'Taxa de conversão', duration: '12:15', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '6-1-3', title: 'Ticket médio', duration: '10:45', isCompleted: false, isLocked: false, videoUrl: '' },
          { id: '6-1-4', title: 'CAC e LTV', duration: '16:20', isCompleted: false, isLocked: false, videoUrl: '' },
        ]
      },
      {
        id: '6-2',
        title: 'Ferramentas de Análise',
        isLocked: true,
        lessons: [
          { id: '6-2-1', title: 'TikTok Analytics', duration: '18:30', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '6-2-2', title: 'Google Analytics', duration: '16:45', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '6-2-3', title: 'Dashboards personalizados', duration: '20:20', isCompleted: false, isLocked: true, videoUrl: '' },
        ]
      },
      {
        id: '6-3',
        title: 'Otimização Baseada em Dados',
        isLocked: true,
        lessons: [
          { id: '6-3-1', title: 'Testes A/B', duration: '17:40', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '6-3-2', title: 'Análise de funil', duration: '15:30', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '6-3-3', title: 'Tomada de decisão', duration: '19:45', isCompleted: false, isLocked: true, videoUrl: '' },
          { id: '6-3-4', title: 'Escalando o que funciona', duration: '21:20', isCompleted: false, isLocked: true, videoUrl: '' },
        ]
      }
    ]
  }
]

// Estatísticas do usuário
export const userStats = {
  totalCourses: courses.length,
  completedCourses: 2,
  inProgressCourses: 3,
  totalHoursWatched: 47,
  completedModules: 12,
  certificatesEarned: 2,
  communityRank: 23,
  weeklyStreak: 5
}

// Atividades recentes
export const recentActivities = [
  {
    id: '1',
    type: 'completed' as const,
    title: 'Concluiu a aula "Gatilhos mentais em lives"',
    course: 'Lives que Vendem',
    timestamp: '2 horas atrás',
    icon: 'CheckCircle'
  },
  {
    id: '2',
    type: 'started' as const,
    title: 'Iniciou o curso "Dropshipping no TikTok Shop"',
    course: 'Dropshipping no TikTok Shop',
    timestamp: '1 dia atrás',
    icon: 'Play'
  },
  {
    id: '3',
    type: 'certificate' as const,
    title: 'Ganhou certificado de conclusão',
    course: 'TikTok Shop: Do Zero ao Primeiro Pedido',
    timestamp: '3 dias atrás',
    icon: 'Award'
  },
  {
    id: '4',
    type: 'comment' as const,
    title: 'Comentou na comunidade',
    course: 'Marketing de Afiliados',
    timestamp: '5 dias atrás',
    icon: 'MessageCircle'
  }
]

// Próximas lives
export const upcomingLives = [
  {
    id: '1',
    title: 'Live Q&A: Tirando Dúvidas sobre TikTok Shop',
    instructor: 'Maria Santos',
    date: '2025-10-12',
    time: '19:00',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80'
  },
  {
    id: '2',
    title: 'Workshop: Criando Vídeos Virais',
    instructor: 'Juliana Reis',
    date: '2025-10-15',
    time: '20:00',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80'
  }
]


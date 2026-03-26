# 📁 Estrutura Completa do Projeto

## 🌳 Árvore de Arquivos

```
areamembros/
│
├── 📄 index.html                    # HTML principal
├── 📄 package.json                  # Dependências do projeto
├── 📄 README.md                     # Documentação principal
├── 📄 INSTALACAO.md                 # Guia de instalação
├── 📄 ESTRUTURA.md                  # Este arquivo
│
├── ⚙️ Arquivos de Configuração
│   ├── vite.config.ts              # Configuração do Vite
│   ├── tsconfig.json               # Configuração do TypeScript
│   ├── tsconfig.node.json          # TypeScript para Node
│   ├── tailwind.config.js          # Configuração do Tailwind
│   ├── postcss.config.js           # Configuração do PostCSS
│   └── .gitignore                  # Arquivos ignorados pelo Git
│
├── 📁 public/
│   └── vite.svg                    # Ícone do Vite
│
└── 📁 src/
    ├── 📄 main.tsx                 # Entry point da aplicação
    ├── 📄 App.tsx                  # Componente principal + Router
    ├── 📄 index.css                # Estilos globais + Tailwind
    ├── 📄 vite-env.d.ts           # Tipos do Vite
    │
    ├── 📁 components/              # Componentes React
    │   │
    │   ├── 📁 ui/                  # Componentes shadcn/ui
    │   │   ├── avatar.tsx          # Avatar do usuário
    │   │   ├── badge.tsx           # Badges/tags
    │   │   ├── button.tsx          # Botões
    │   │   ├── card.tsx            # Cards
    │   │   ├── dropdown-menu.tsx   # Menu dropdown
    │   │   ├── input.tsx           # Campos de input
    │   │   ├── progress.tsx        # Barra de progresso
    │   │   ├── skeleton.tsx        # Loading skeleton
    │   │   └── tabs.tsx            # Tabs/abas
    │   │
    │   ├── 📁 layout/              # Componentes de layout
    │   │   ├── Sidebar.tsx         # Menu lateral
    │   │   ├── Header.tsx          # Cabeçalho
    │   │   └── Layout.tsx          # Layout wrapper
    │   │
    │   └── 📁 features/            # Componentes de funcionalidades
    │       ├── CourseCard.tsx      # Card de curso
    │       ├── ProgressCard.tsx    # Card de progresso circular
    │       └── VideoPlayer.tsx     # Player de vídeo customizado
    │
    ├── 📁 pages/                   # Páginas da aplicação
    │   ├── Login.tsx               # Página de login
    │   ├── Dashboard.tsx           # Dashboard principal
    │   ├── Courses.tsx             # Lista de cursos
    │   ├── CourseDetails.tsx       # Detalhes do curso
    │   ├── Community.tsx           # Comunidade
    │   ├── Affiliates.tsx          # Programa de afiliados
    │   ├── Certificates.tsx        # Certificados
    │   ├── Profile.tsx             # Perfil do usuário
    │   └── Settings.tsx            # Configurações
    │
    ├── 📁 contexts/                # Context API
    │   ├── AuthContext.tsx         # Contexto de autenticação
    │   └── ThemeContext.tsx        # Contexto de tema
    │
    ├── 📁 hooks/                   # Custom hooks
    │   └── useAuth.tsx             # Hook de autenticação
    │
    ├── 📁 data/                    # Dados mockados
    │   └── mockData.ts             # 6 cursos + dados
    │
    └── 📁 lib/                     # Utilitários
        └── utils.ts                # Função cn() para classes
```

## 📊 Estatísticas do Projeto

### Componentes UI (9)
- Avatar, Badge, Button, Card, Dropdown Menu, Input, Progress, Skeleton, Tabs

### Componentes de Layout (3)
- Sidebar, Header, Layout

### Componentes de Features (3)
- CourseCard, ProgressCard, VideoPlayer

### Páginas (9)
- Login, Dashboard, Courses, CourseDetails, Community, Affiliates, Certificates, Profile, Settings

### Contexts (2)
- AuthContext, ThemeContext

### Total de Arquivos TypeScript/TSX
**33 arquivos** criados do zero

## 🎯 Fluxo de Dados

```
App.tsx (Router)
    │
    ├── ThemeProvider
    │   └── Gerencia tema claro/escuro
    │
    └── AuthProvider
        │
        ├── Login.tsx (pública)
        │
        └── ProtectedRoute
            │
            └── Layout.tsx
                │
                ├── Sidebar.tsx
                │   └── Menu de navegação
                │
                ├── Header.tsx
                │   ├── Busca
                │   ├── Notificações
                │   ├── Toggle de tema
                │   └── Dropdown do usuário
                │
                └── Outlet (páginas)
                    ├── Dashboard
                    ├── Courses
                    ├── CourseDetails
                    ├── Community
                    ├── Affiliates
                    ├── Certificates
                    ├── Profile
                    └── Settings
```

## 🔄 Fluxo de Autenticação

```
1. Usuário acessa /login
2. Login.tsx verifica se já está autenticado
   ├── SIM → Redireciona para /dashboard
   └── NÃO → Mostra formulário
3. Usuário submete email/senha
4. AuthContext.login() salva no localStorage
5. Estado atualizado → isAuthenticated = true
6. ProtectedRoute permite acesso
7. Usuário vê Layout + páginas protegidas
```

## 🎨 Sistema de Temas

```
ThemeContext
    │
    ├── theme: 'light' | 'dark'
    ├── toggleTheme()
    │
    ├── Verifica localStorage
    ├── Verifica preferência do sistema
    └── Aplica classe no <html>
        │
        └── CSS Variables (index.css)
            ├── --background
            ├── --foreground
            ├── --primary
            ├── --secondary
            └── etc...
```

## 📦 Dependências Principais

### Produção
- `react` (^18.3.1) - Biblioteca core
- `react-dom` (^18.3.1) - Manipulação do DOM
- `react-router-dom` (^6.22.3) - Roteamento
- `lucide-react` (^0.363.0) - Ícones
- `clsx` (^2.1.0) - Merge de classes
- `tailwind-merge` (^2.2.2) - Merge de classes Tailwind
- `class-variance-authority` (^0.7.0) - Variantes de componentes

### Desenvolvimento
- `typescript` (^5.2.2) - Type checking
- `vite` (^5.2.0) - Build tool
- `@vitejs/plugin-react` (^4.2.1) - Plugin React para Vite
- `tailwindcss` (^3.4.1) - Framework CSS
- `postcss` (^8.4.38) - Transformação CSS
- `autoprefixer` (^10.4.19) - Prefixos CSS automáticos

## 🗺️ Rotas da Aplicação

### Públicas
- `/login` - Página de login

### Protegidas (requer autenticação)
- `/` → redireciona para `/dashboard`
- `/dashboard` - Dashboard principal
- `/courses` - Lista de cursos
- `/courses/:id` - Detalhes de um curso específico
- `/community` - Comunidade
- `/affiliates` - Programa de afiliados
- `/certificates` - Certificados conquistados
- `/profile` - Perfil do usuário
- `/settings` - Configurações da conta

### Catch-all
- `*` → redireciona para `/dashboard`

## 💾 Dados Mockados

### 6 Cursos Completos
Cada curso contém:
- ✅ ID único
- ✅ Título e descrição
- ✅ Thumbnail (Unsplash)
- ✅ Instrutor
- ✅ Duração total
- ✅ 3 módulos
- ✅ 12-15 aulas por curso
- ✅ Progresso (0-100%)
- ✅ Categoria (Iniciante/Intermediário/Avançado)
- ✅ Badges (Novo/Em Alta)

### Estatísticas do Usuário
- Total de cursos: 6
- Cursos completos: 2
- Cursos em andamento: 3
- Horas assistidas: 47
- Módulos completos: 12
- Certificados: 2
- Ranking: #23
- Sequência: 5 dias

### Atividades Recentes (4)
- Aula concluída
- Curso iniciado
- Certificado ganho
- Comentário na comunidade

### Próximas Lives (2)
- Q&A sobre TikTok Shop
- Workshop de Vídeos Virais

## 🎨 Design System

### Cores Principais
```css
/* Light Mode */
--primary: 262.1 83.3% 57.8%        /* Indigo/Purple */
--secondary: 210 40% 96.1%          /* Light Gray */
--background: 0 0% 100%             /* White */

/* Dark Mode */
--primary: 263.4 70% 50.4%          /* Purple */
--secondary: 217.2 32.6% 17.5%      /* Dark Gray */
--background: 222.2 84% 4.9%        /* Almost Black */
```

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Tipografia
- Font: System font stack
- Tamanhos: xs, sm, base, lg, xl, 2xl, 3xl

## 🔐 Segurança

### Implementado
- ✅ Protected Routes
- ✅ Context API para estado global
- ✅ TypeScript para type safety
- ✅ Validação de autenticação em cada rota

### Para Produção (TODO)
- ⏳ JWT tokens
- ⏳ Refresh tokens
- ⏳ HTTPS only
- ⏳ Rate limiting
- ⏳ CORS configurado
- ⏳ Sanitização de inputs
- ⏳ XSS protection

## 📱 Responsividade

### Mobile (< 768px)
- Sidebar: Drawer (hamburguer)
- Grid: 1 coluna
- Cards: Stack vertical
- Header: Compacto

### Tablet (768px - 1024px)
- Sidebar: Ícones apenas
- Grid: 2 colunas
- Cards: 2 por linha

### Desktop (> 1024px)
- Sidebar: Expandida
- Grid: 3-4 colunas
- Cards: 3 por linha
- Layout: Multi-coluna

## 🚀 Performance

### Otimizações Implementadas
- ✅ Code splitting (React Router)
- ✅ Lazy loading de rotas
- ✅ Imagens otimizadas (Unsplash)
- ✅ CSS minimizado (Tailwind purge)
- ✅ Tree shaking (Vite)

### Métricas Esperadas
- First Load: < 2s
- Interactive: < 3s
- Lighthouse Score: > 90

## 📚 Bibliotecas Utilizadas

### UI Components
- shadcn/ui - Componentes base
- Lucide React - 1000+ ícones
- Tailwind CSS - Utility-first CSS

### Utilities
- clsx - Classe condicional
- tailwind-merge - Merge de classes
- class-variance-authority - Variantes

### Routing & State
- React Router DOM - Roteamento
- Context API - Estado global
- LocalStorage - Persistência

## 🎓 Padrões de Código

### Naming Conventions
- Componentes: PascalCase (Dashboard.tsx)
- Funções: camelCase (toggleTheme)
- Constantes: UPPER_CASE (API_URL)
- Arquivos: PascalCase para componentes, camelCase para utils

### Estrutura de Componentes
```tsx
// Imports
import { ... }

// Types/Interfaces
interface Props { ... }

// Component
export function Component({ props }: Props) {
  // Hooks
  const [state, setState] = useState()
  
  // Handlers
  const handleClick = () => { ... }
  
  // Render
  return ( ... )
}
```

### Organização de Imports
1. React/bibliotecas externas
2. Componentes internos
3. Hooks/contexts
4. Utils/lib
5. Types
6. Styles

---

**Esta estrutura está completa e pronta para uso! 🎉**


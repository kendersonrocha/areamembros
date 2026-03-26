# 🎓 Área de Membros - TikTok Shop Academy

Uma plataforma completa de área de membros para cursos sobre TikTok Shop, desenvolvida com React, TypeScript, Tailwind CSS e shadcn/ui.

## ✨ Funcionalidades

- 🔐 **Sistema de Autenticação** - Login mockado com proteção de rotas
- 🎨 **Tema Claro/Escuro** - Toggle entre temas com persistência
- 📚 **Dashboard Completo** - Visão geral do progresso e atividades
- 🎥 **Gerenciamento de Cursos** - Lista, detalhes e player de vídeo
- 👥 **Comunidade** - Área para interação entre alunos
- 💰 **Programa de Afiliados** - Sistema de indicação com comissões
- 🏆 **Certificados** - Certificados de conclusão de cursos
- 👤 **Perfil de Usuário** - Gerenciamento de dados e configurações
- 📱 **Design Responsivo** - Mobile-first, funciona em todos os dispositivos

## 🚀 Como Executar

### Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

### Instalação

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o navegador em `http://localhost:5173`

### Build para Produção

```bash
npm run build
npm run preview
```

## 🎯 Como Usar

### Login

Para fazer login, use **qualquer email e senha**. O sistema está configurado para aceitar qualquer combinação para fins de demonstração.

Exemplo:
- Email: `teste@email.com`
- Senha: `123456`

### Logout

Existem **3 formas** de fazer logout:
1. **Header** - Clique no avatar → "Sair"
2. **Sidebar** - Clique no botão "Sair" no final do menu
3. **Página de Login** - Acesse `/login` estando logado → Botão vermelho no topo

**📖 Veja o guia completo:** [LOGOUT.md](./LOGOUT.md)

### Navegação

Após o login, você terá acesso a:

- **Dashboard** - Página inicial com resumo do progresso
- **Cursos** - Lista de todos os cursos disponíveis
- **Comunidade** - Área de interação com outros alunos
- **Afiliados** - Programa de indicação e comissões
- **Certificados** - Seus certificados conquistados
- **Perfil** - Suas informações e estatísticas
- **Configurações** - Preferências da conta

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool moderna e rápida
- **React Router DOM** - Roteamento
- **Tailwind CSS** - Framework de estilização
- **shadcn/ui** - Componentes UI de alta qualidade
- **Lucide React** - Biblioteca de ícones

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   ├── layout/          # Layout (Sidebar, Header)
│   └── features/        # Componentes de funcionalidades
├── pages/               # Páginas da aplicação
├── contexts/            # Context API (Auth, Theme)
├── hooks/               # Custom hooks
├── data/                # Dados mockados
├── lib/                 # Utilitários
└── App.tsx              # Componente principal
```

## 🎨 Características de Design

### Tema Personalizado

- Cores primárias: Gradient Indigo/Purple
- Suporte a modo escuro completo
- Animações suaves
- Hover states em todos elementos interativos
- Sombras e backdrop-blur para profundidade

### Responsividade

- **Mobile** (< 768px): Sidebar colapsada em drawer
- **Tablet** (768px - 1024px): Sidebar com ícones
- **Desktop** (> 1024px): Sidebar expandida completa

## 📊 Dados Mockados

O projeto inclui 6 cursos completos sobre TikTok Shop:

1. TikTok Shop: Do Zero ao Primeiro Pedido
2. Lives que Vendem: Dominando o TikTok Live
3. Dropshipping no TikTok Shop
4. Marketing de Afiliados no TikTok
5. Criação de Conteúdo Viral
6. Análise de Dados e Métricas

Cada curso possui:
- 3 módulos
- 12-15 aulas
- Diferentes níveis de progresso
- Materiais de apoio
- Discussões

## 🔒 Segurança

- Protected Routes - Rotas protegidas por autenticação
- Context API para gerenciamento de estado
- LocalStorage para persistência de sessão
- TypeScript para type safety

## 🎓 Próximos Passos

Para transformar em um projeto real:

1. **Backend Integration**
   - Implementar API real de autenticação
   - Conectar com banco de dados
   - Sistema de pagamentos

2. **Video Player**
   - Integrar com serviços de vídeo (Vimeo, YouTube)
   - Implementar controle de DRM
   - Tracking de progresso real

3. **Comunidade**
   - Integração com Circle, Discord ou similar
   - Sistema de comentários
   - Notificações em tempo real

4. **Analytics**
   - Google Analytics
   - Tracking de progresso
   - Relatórios de desempenho

## 📄 Documentação Adicional

- **[INSTALACAO.md](./INSTALACAO.md)** - Guia completo de instalação
- **[LOGOUT.md](./LOGOUT.md)** - Como fazer logout e acessar a página de login
- **[COMANDOS.md](./COMANDOS.md)** - Comandos úteis do projeto
- **[ESTRUTURA.md](./ESTRUTURA.md)** - Estrutura detalhada do projeto

## 📝 Licença

Este é um projeto de demonstração desenvolvido para fins educacionais.

## 👨‍💻 Autor

Desenvolvido com ❤️ para demonstrar as capacidades de uma área de membros moderna e completa.

---

**Dica**: Para melhor experiência, explore todas as páginas e funcionalidades. Todos os dados são mockados, então sinta-se livre para testar tudo! 🚀


# 🚀 Guia de Instalação - Área de Membros TikTok Shop

## Passo a Passo para Executar o Projeto

### 1️⃣ Instalar as Dependências

Abra o terminal no diretório do projeto e execute:

```bash
npm install
```

Este comando irá instalar todas as dependências necessárias:
- React 18
- React Router DOM
- TypeScript
- Tailwind CSS
- Lucide React (ícones)
- shadcn/ui componentes
- E todas as outras dependências

### 2️⃣ Iniciar o Servidor de Desenvolvimento

Após a instalação, execute:

```bash
npm run dev
```

O servidor será iniciado em: **http://localhost:5173**

### 3️⃣ Fazer Login

Acesse `http://localhost:5173/login` e use **qualquer email e senha** para entrar.

Exemplo:
- **Email:** `teste@email.com`
- **Senha:** `123456`

## ✅ Verificação

Se tudo estiver correto, você verá:

1. Tela de login com fundo gradient roxo/rosa
2. Após login, será redirecionado para o Dashboard
3. Sidebar à esquerda com menu de navegação
4. Header no topo com busca, notificações e avatar
5. Toggle de tema claro/escuro funcionando

## 🎨 Recursos Implementados

### Páginas Funcionais
- ✅ Login
- ✅ Dashboard (página inicial)
- ✅ Cursos (lista de cursos)
- ✅ Detalhes do Curso (com video player)
- ✅ Comunidade
- ✅ Afiliados
- ✅ Certificados
- ✅ Perfil
- ✅ Configurações

### Funcionalidades
- ✅ Autenticação mockada com Context API
- ✅ Tema claro/escuro com persistência
- ✅ Rotas protegidas
- ✅ Layout responsivo (mobile, tablet, desktop)
- ✅ Sidebar colapsável
- ✅ 6 cursos completos com dados mockados
- ✅ Progress tracking
- ✅ Video player customizado
- ✅ Sistema de módulos e aulas
- ✅ Certificados de conclusão
- ✅ Programa de afiliados
- ✅ Estatísticas e métricas

## 📱 Testando Responsividade

### Desktop (> 1024px)
- Sidebar expandida fixa
- Layout completo com 2-3 colunas

### Tablet (768px - 1024px)
- Sidebar com apenas ícones
- Layout adaptado

### Mobile (< 768px)
- Sidebar vira drawer (menu hamburguer)
- Layout em coluna única
- Header compacto

Para testar, use as ferramentas de desenvolvedor do navegador (F12) e simule diferentes dispositivos.

## 🎯 Navegação Rápida

Após fazer login, explore:

1. **Dashboard** - Veja seu progresso geral, cursos em andamento e próximas lives
2. **Cursos** - Filtre por status (todos, em andamento, não iniciados, concluídos)
3. **Detalhes do Curso** - Clique em qualquer curso para ver módulos e aulas
4. **Comunidade** - Veja stats da comunidade
5. **Afiliados** - Veja suas comissões e link de indicação
6. **Certificados** - Veja certificados conquistados
7. **Perfil** - Suas estatísticas e conquistas
8. **Configurações** - Altere preferências

## 🔄 Toggle de Tema

O botão de tema está no canto superior direito do header:
- ☀️ Clica para modo claro
- 🌙 Clica para modo escuro

O tema é salvo no localStorage e persiste entre sessões.

## 🐛 Solução de Problemas

### Erro ao instalar dependências

Se houver erro ao executar `npm install`, tente:

```bash
# Limpar cache
npm cache clean --force

# Deletar node_modules e package-lock.json
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

### Porta 5173 já está em uso

Se a porta estiver ocupada, o Vite tentará usar outra porta automaticamente.
Ou você pode especificar uma porta diferente:

```bash
npm run dev -- --port 3000
```

### Tipos do TypeScript não são reconhecidos

Certifique-se de que seu editor (VS Code) está usando a versão correta do TypeScript:
- Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
- Digite "TypeScript: Select TypeScript Version"
- Escolha "Use Workspace Version"

## 📦 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

Para testar a build localmente:

```bash
npm run preview
```

## 🎓 Dados Mockados

O projeto inclui dados completos de 6 cursos sobre TikTok Shop:

1. **TikTok Shop: Do Zero ao Primeiro Pedido** (65% completo)
2. **Lives que Vendem** (30% completo)
3. **Dropshipping no TikTok Shop** (0% completo)
4. **Marketing de Afiliados** (45% completo)
5. **Criação de Conteúdo Viral** (15% completo)
6. **Análise de Dados e Métricas** (0% completo)

Cada curso possui:
- 3 módulos
- 12-15 aulas
- Duração total
- Instrutor
- Thumbnail
- Materiais de apoio

## 💡 Dicas

1. **Explore todos os cursos** - Cada um tem progresso diferente
2. **Teste o video player** - Tem controles customizados
3. **Veja os detalhes dos módulos** - Sistema de accordion com aulas
4. **Teste em mobile** - A sidebar vira drawer
5. **Mude o tema** - Veja como fica em dark mode
6. **Veja os certificados** - Apenas cursos 100% completos têm certificados

## 🚀 Próximos Passos

Para transformar em um projeto real, você precisaria:

1. **Backend/API**
   - Sistema de autenticação real
   - Banco de dados
   - Upload de vídeos

2. **Integrações**
   - Serviço de vídeo (Vimeo, YouTube)
   - Gateway de pagamento
   - Plataforma de comunidade

3. **Features Adicionais**
   - Sistema de comentários
   - Notificações em tempo real
   - Chat ao vivo
   - Gamificação

## 📞 Suporte

Se encontrar problemas:
1. Verifique o console do navegador (F12)
2. Verifique o terminal onde o dev server está rodando
3. Certifique-se de que todas as dependências foram instaladas

---

**Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS**

Aproveite explorando a área de membros! 🎉


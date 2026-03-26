# 🚪 Guia de Logout e Acesso à Página de Login

## 🔓 Como Fazer Logout

Existem **3 formas** de fazer logout da aplicação:

### 1️⃣ Pelo Header (Dropdown do Avatar)
1. Clique no **avatar** no canto superior direito
2. No menu dropdown, clique em **"Sair"**
3. Você será redirecionado automaticamente para a página de login

### 2️⃣ Pela Sidebar
1. Role até o final da **Sidebar** (menu lateral)
2. Clique no botão **"Sair"** (ícone vermelho)
3. Você será redirecionado para a página de login

### 3️⃣ Na Página de Login (se já estiver logado)
1. Acesse `http://localhost:5173/login`
2. Você verá um **botão vermelho "Fazer Logout"** no canto superior direito
3. E também um **aviso amarelo** com opções
4. Clique no botão para fazer logout

## 🔑 Acessando a Página de Login

### Quando NÃO Está Logado
- Basta acessar: `http://localhost:5173/login`
- Ou simplesmente: `http://localhost:5173`

### Quando JÁ Está Logado
- Você pode acessar `http://localhost:5173/login` diretamente
- A página mostrará:
  - ⚠️ Um aviso que você já está logado
  - 🔴 Um botão de logout no canto superior direito
  - 🔵 Um link para voltar ao Dashboard

## 🧹 Limpar Dados Manualmente (Caso Necessário)

Se por algum motivo precisar limpar os dados manualmente:

### Método 1: Console do Navegador
1. Abra as **DevTools** (F12)
2. Vá na aba **Console**
3. Digite: `localStorage.clear()`
4. Pressione Enter
5. Recarregue a página (F5)

### Método 2: Application Tab
1. Abra as **DevTools** (F12)
2. Vá na aba **Application** (ou Storage no Firefox)
3. No menu lateral, clique em **Local Storage**
4. Selecione `http://localhost:5173`
5. Clique com botão direito → **Clear**
6. Recarregue a página (F5)

### Método 3: Limpar Site Data
1. No Chrome: Settings → Privacy → Site Settings
2. Procure por `localhost:5173`
3. Clique em **Clear data**

## 📝 O Que é Salvo no LocalStorage?

A aplicação salva apenas:
- `user` - Informações do usuário logado
- `theme` - Tema escolhido (light/dark)

## 🔄 Fluxo de Autenticação

```
┌─────────────┐
│   /login    │ → Login Form
└──────┬──────┘
       │ (login)
       ↓
┌─────────────┐
│   /dashboard│ ← Área protegida
└──────┬──────┘
       │ (logout)
       ↓
┌─────────────┐
│   /login    │ → Volta para login
└─────────────┘
```

## 🛡️ Rotas Protegidas

As seguintes rotas **requerem autenticação**:
- `/dashboard`
- `/courses`
- `/courses/:id`
- `/community`
- `/affiliates`
- `/certificates`
- `/profile`
- `/settings`

Se você tentar acessar qualquer uma dessas rotas sem estar logado, será **redirecionado automaticamente** para `/login`.

## 💡 Dicas

### Para Testar Login
1. Faça logout usando qualquer método acima
2. Acesse `/login`
3. Use **qualquer email e senha** (para demonstração)
4. Exemplo: `teste@email.com` / `123456`

### Para Voltar Rapidamente ao Dashboard
- Se estiver logado em `/login`, clique no link "volte para o Dashboard"
- Ou acesse diretamente `http://localhost:5173/dashboard`

### Atalhos de Teclado (DevTools)
- **F12** - Abrir DevTools
- **Ctrl + Shift + C** (ou Cmd + Shift + C no Mac) - Inspect Element
- **F5** - Recarregar página
- **Ctrl + Shift + R** (ou Cmd + Shift + R no Mac) - Hard Reload (limpa cache)

## ❓ Problemas Comuns

### "Estou preso logado e não consigo acessar o login"
**Solução:** 
1. Acesse `http://localhost:5173/login` diretamente
2. Clique no botão vermelho "Fazer Logout"

### "O logout não está funcionando"
**Solução:**
1. Abra o Console (F12)
2. Digite: `localStorage.clear()`
3. Recarregue a página

### "Quero começar do zero"
**Solução:**
1. Faça logout
2. Limpe o localStorage
3. Recarregue a página
4. Faça login novamente

## 🎯 Resumo Rápido

| Ação | Como Fazer |
|------|------------|
| **Fazer Logout** | Avatar → Sair OU Sidebar → Sair OU Botão na tela de login |
| **Acessar Login** | `http://localhost:5173/login` |
| **Limpar Dados** | Console: `localStorage.clear()` |
| **Testar Login** | Qualquer email + senha |
| **Ir para Dashboard** | `http://localhost:5173/dashboard` |

---

**Nota:** Esta é uma aplicação de demonstração. Em produção, o sistema de autenticação seria integrado com um backend real e usaria tokens JWT ou similar.


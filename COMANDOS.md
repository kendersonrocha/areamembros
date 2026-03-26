# ⚡ Comandos Úteis

## 🚀 Comandos Principais

### Instalação
```bash
# Instalar todas as dependências
npm install
```

### Desenvolvimento
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Servidor inicia em: http://localhost:5173
```

### Build
```bash
# Criar build de produção
npm run build

# Preview da build
npm run preview
```

## 🔧 Comandos Úteis

### Limpeza
```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpar cache do npm
npm cache clean --force
```

### Desenvolvimento
```bash
# Rodar em porta específica
npm run dev -- --port 3000

# Abrir automaticamente no navegador
npm run dev -- --open
```

## 📝 Scripts do package.json

```json
{
  "scripts": {
    "dev": "vite",                    // Desenvolvimento
    "build": "tsc && vite build",     // Build produção
    "preview": "vite preview"          // Preview build
  }
}
```

## 🎯 Atalhos do Projeto

### Login
- URL: `http://localhost:5173/login`
- Email: qualquer
- Senha: qualquer

### Páginas Principais
- Dashboard: `http://localhost:5173/dashboard`
- Cursos: `http://localhost:5173/courses`
- Curso específico: `http://localhost:5173/courses/1`
- Comunidade: `http://localhost:5173/community`
- Afiliados: `http://localhost:5173/affiliates`
- Certificados: `http://localhost:5173/certificates`
- Perfil: `http://localhost:5173/profile`
- Configurações: `http://localhost:5173/settings`

## 🔍 Debug

### Console do Navegador
```javascript
// Abrir console: F12

// Ver usuário logado
localStorage.getItem('user')

// Ver tema atual
localStorage.getItem('theme')

// Limpar dados
localStorage.clear()
```

### Verificar Versões
```bash
# Node version (mínimo 16)
node -v

# npm version
npm -v

# Listar dependências instaladas
npm list --depth=0
```

## 🐛 Solução de Problemas

### Erro: "Cannot find module"
```bash
# Reinstalar dependências
npm install
```

### Erro: "Port already in use"
```bash
# Usar outra porta
npm run dev -- --port 3001
```

### Erro: TypeScript
```bash
# Verificar configuração
npx tsc --noEmit
```

### Problema com Tailwind
```bash
# Verificar se o PostCSS está configurado
# Verificar tailwind.config.js
# Verificar imports no index.css
```

## 📦 Adicionar Dependências

### Produção
```bash
npm install nome-do-pacote
```

### Desenvolvimento
```bash
npm install -D nome-do-pacote
```

## 🎨 Tailwind

### Adicionar Classes Personalizadas
Edite `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'minha-cor': '#123456'
    }
  }
}
```

### Purge CSS
O Tailwind já está configurado para purge automático em produção.

## 🔄 Git

### Inicializar Repositório
```bash
git init
git add .
git commit -m "Initial commit: Área de Membros TikTok Shop"
```

### Adicionar Remote
```bash
git remote add origin seu-repositorio-git
git push -u origin main
```

## 📊 Análise

### Tamanho do Bundle
```bash
# Após build, ver tamanho dos arquivos
npm run build
# Arquivos estarão em dist/
```

### Análise de Dependências
```bash
# Instalar analyzer
npm install -D rollup-plugin-visualizer

# Usar no build
```

## 🚀 Deploy

### Vercel
```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Instalar CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Build Manual
```bash
# 1. Build
npm run build

# 2. Upload pasta dist/ para seu servidor
```

## 🧪 Testes

### Adicionar Jest (opcional)
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
```

### Adicionar Playwright (opcional)
```bash
npm install -D @playwright/test
npx playwright install
```

## 📱 PWA (opcional)

### Adicionar Vite PWA
```bash
npm install -D vite-plugin-pwa
```

## 🔐 Variáveis de Ambiente

### Criar arquivo .env
```bash
# .env (não commitar)
VITE_API_URL=http://localhost:3000
```

### Usar no código
```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📸 Screenshots

### Capturar Screenshots
```bash
# Chrome DevTools
# F12 > Ctrl+Shift+P > "Screenshot"
```

## 🎯 Checklist Antes de Deploy

- [ ] `npm run build` sem erros
- [ ] Testar em mobile
- [ ] Testar em diferentes navegadores
- [ ] Verificar console sem erros
- [ ] Otimizar imagens
- [ ] Configurar meta tags
- [ ] Adicionar favicon
- [ ] Configurar SEO
- [ ] Testar performance (Lighthouse)
- [ ] Configurar Analytics

## 📚 Recursos

### Documentação
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

### Componentes UI
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Mantenha este arquivo como referência rápida! 📌**


# 🚀 Deploy na Vercel - Guia Completo

Este guia te ajudará a fazer o deploy completo do projeto (frontend + backend) na Vercel.

## 📋 O Que Foi Preparado

✅ **Serverless Functions** criadas na pasta `/api`  
✅ **Configuração Vercel** (`vercel.json`)  
✅ **Frontend otimizado** para produção  
✅ **CORS configurado** para funcionar em produção  

## 🎯 Passo a Passo para Deploy

### **1. Criar Conta na Vercel**

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub/GitLab/Bitbucket
3. Autorize a Vercel a acessar seus repositórios

### **2. Preparar o Repositório Git**

Se ainda não tem um repositório Git:

```bash
git init
git add .
git commit -m "Projeto pronto para deploy"
```

Fazer push para GitHub/GitLab/Bitbucket:

```bash
# Criar repositório no GitHub e depois:
git remote add origin https://github.com/seu-usuario/seu-repo.git
git branch -M main
git push -u origin main
```

### **3. Importar Projeto na Vercel**

1. No dashboard da Vercel, clique em **"New Project"**
2. Selecione seu repositório
3. Configure as opções:

#### **Build & Development Settings:**
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

#### **Environment Variables:**
Adicione estas variáveis:

```
VITE_CIRCLE_API_TOKEN=5EhemnLUpjSTfrZL8wppFMiKrg2nYdTw
VITE_CIRCLE_COMMUNITY_ID=411929
VITE_BACKEND_URL=https://seu-projeto.vercel.app
VITE_USE_BACKEND=true
```

⚠️ **IMPORTANTE:** Substitua `seu-projeto.vercel.app` pela URL real que a Vercel vai gerar.

4. Clique em **"Deploy"**

### **4. Configurar URL do Backend**

Após o primeiro deploy:

1. Anote a URL gerada (ex: `https://areamembros.vercel.app`)
2. Vá em **Settings** → **Environment Variables**
3. Edite `VITE_BACKEND_URL` para: `https://areamembros.vercel.app`
4. Clique em **"Redeploy"** para aplicar as mudanças

### **5. Verificar se Está Funcionando**

Teste os endpoints:

```bash
# Health check
https://seu-projeto.vercel.app/api/health

# Testar Circle API
https://seu-projeto.vercel.app/api/circle/test

# Estatísticas (o principal!)
https://seu-projeto.vercel.app/api/circle/stats
```

Acesse seu site e vá na página **Comunidade** - deve mostrar dados reais!

## 📁 Estrutura para Vercel

```
seu-projeto/
├── api/                    # Serverless Functions
│   ├── health.js          # GET /api/health
│   └── circle/
│       ├── test.js        # GET /api/circle/test
│       └── stats.js       # GET /api/circle/stats
├── dist/                  # Build do frontend (gerado)
├── src/                   # Código fonte React
├── vercel.json           # Configuração Vercel
└── package.json          # Dependências
```

## 🔧 Rotas da API em Produção

| Endpoint | URL em Produção |
|----------|-----------------|
| Frontend | `https://seu-projeto.vercel.app` |
| Health | `https://seu-projeto.vercel.app/api/health` |
| Test | `https://seu-projeto.vercel.app/api/circle/test` |
| Stats | `https://seu-projeto.vercel.app/api/circle/stats` |

## 🔍 Troubleshooting

### Problema: "Failed to fetch" em produção

**Solução:**
1. Verifique se `VITE_BACKEND_URL` está correto nas variáveis de ambiente
2. Certifique-se de ter feito **Redeploy** após adicionar as variáveis
3. Verifique os logs na Vercel: **Deployments** → Seu deploy → **Function Logs**

### Problema: CORS error

**Solução:**
As Serverless Functions já estão configuradas com CORS (`Access-Control-Allow-Origin: *`). Se ainda houver erro:
1. Limpe o cache do navegador
2. Force um novo deploy na Vercel

### Problema: "Token não configurado"

**Solução:**
1. Vá em **Settings** → **Environment Variables**
2. Verifique se `VITE_CIRCLE_API_TOKEN` e `VITE_CIRCLE_COMMUNITY_ID` estão corretos
3. Faça **Redeploy**

### Ver Logs em Tempo Real

1. No dashboard da Vercel, vá em **Deployments**
2. Clique no deployment ativo
3. Vá na aba **Functions**
4. Clique em qualquer função para ver os logs

## 🚀 Deploy Automático

Após configurado, a Vercel fará deploy automático:
- ✅ **A cada push** na branch main
- ✅ **A cada merge** de Pull Request
- ✅ **Preview deployments** para PRs

## 📊 Vantagens do Deploy na Vercel

- ✅ **Serverless Functions** escaláveis automaticamente
- ✅ **CDN global** para frontend super rápido
- ✅ **SSL/HTTPS** automático
- ✅ **Deploy automático** via Git
- ✅ **Preview deployments** para testar antes
- ✅ **Logs em tempo real** para debugging
- ✅ **Grátis** para projetos pessoais

## 🔐 Segurança

As variáveis de ambiente são:
- ✅ Criptografadas na Vercel
- ✅ Não expostas no frontend
- ✅ Acessíveis apenas nas Serverless Functions
- ✅ Não commitadas no Git (graças ao `.gitignore`)

## 📝 Comandos Úteis da Vercel CLI (Opcional)

Instalar Vercel CLI:
```bash
npm install -g vercel
```

Deploy via CLI:
```bash
vercel                    # Deploy de preview
vercel --prod            # Deploy de produção
vercel env ls            # Listar variáveis
vercel logs              # Ver logs
```

## 🎯 Checklist Final

Antes de fazer deploy, verifique:

- [ ] Código commitado e pushed para GitHub/GitLab
- [ ] Arquivo `.env` NÃO commitado (já está no `.gitignore`)
- [ ] Build local funciona: `npm run build`
- [ ] Variáveis de ambiente anotadas
- [ ] Conta na Vercel criada

Durante o deploy:

- [ ] Projeto importado na Vercel
- [ ] Variáveis de ambiente configuradas
- [ ] Build bem-sucedido
- [ ] URL do projeto anotada
- [ ] `VITE_BACKEND_URL` atualizado com a URL real
- [ ] Redeploy feito após atualizar variáveis

Após o deploy:

- [ ] Endpoints da API testados
- [ ] Frontend carrega corretamente
- [ ] Página Comunidade mostra dados reais
- [ ] Sem erros no console do navegador
- [ ] Logs da Vercel verificados

## 💡 Próximos Passos Após Deploy

1. **Domínio Customizado** (opcional):
   - Vá em **Settings** → **Domains**
   - Adicione seu domínio: `www.seusite.com`
   - Configure DNS conforme instruções

2. **Analytics** (opcional):
   - Ative Vercel Analytics para ver tráfego
   - Integre Google Analytics se desejar

3. **Monitoramento**:
   - Configure alertas de erro
   - Monitore uso de Serverless Functions

---

## ✅ Resultado Final

Após seguir este guia, você terá:
- ✅ Frontend React hospedado globalmente
- ✅ Backend Serverless Functions funcionando
- ✅ Dados reais da comunidade Circle
- ✅ Deploy automático a cada commit
- ✅ HTTPS/SSL configurado
- ✅ Projeto acessível mundialmente

**🎉 Seu projeto estará no ar e funcionando perfeitamente!**

---

## 📞 Precisa de Ajuda?

- [Documentação Vercel](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- Logs na Vercel: **Deployments** → **Function Logs**



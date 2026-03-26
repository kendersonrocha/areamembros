# 🔐 Variáveis de Ambiente - Copiar e Colar

## ✅ Deploy de Preview Funcionou!

**URL de Preview:** https://areamembros-58l8u6rwr-kendesonrochas-projects.vercel.app
**URL de Produção:** https://areamembros-eta.vercel.app

---

## 📋 Adicionar Variáveis via Dashboard (MAIS FÁCIL)

### **Passo 1: Acessar o Projeto**

1. Acesse: https://vercel.com/kendesonrochas-projects/areamembros
2. Clique em **"Settings"**
3. Clique em **"Environment Variables"** no menu lateral

### **Passo 2: Adicionar as 4 Variáveis**

Copie e cole cada uma:

---

**Variável 1:**
```
Name: VITE_CIRCLE_API_TOKEN
Value: 5EhemnLUpjSTfrZL8wppFMiKrg2nYdTw
Environments: ✅ Production ✅ Preview ✅ Development
```

---

**Variável 2:**
```
Name: VITE_CIRCLE_COMMUNITY_ID
Value: 411929
Environments: ✅ Production ✅ Preview ✅ Development
```

---

**Variável 3:**
```
Name: VITE_BACKEND_URL
Value: https://areamembros-eta.vercel.app
Environments: ✅ Production ✅ Preview ✅ Development
```

---

**Variável 4:**
```
Name: VITE_USE_BACKEND
Value: true
Environments: ✅ Production ✅ Preview ✅ Development
```

---

### **Passo 3: Fazer Deploy de Produção**

Depois de adicionar todas as variáveis, volte ao terminal e execute:

```bash
vercel --prod
```

---

## 🎯 Resultado Final

Após o deploy de produção, seu site estará em:

**🌐 https://areamembros-eta.vercel.app**

---

## ✅ Testar se Funcionou

Acesse: https://areamembros-eta.vercel.app/api/health

Deve retornar:
```json
{
  "status": "ok",
  "message": "Backend está funcionando!",
  "timestamp": "..."
}
```

Acesse: https://areamembros-eta.vercel.app/api/circle/stats

Deve retornar os dados reais da comunidade!

---

## 🚀 Links Úteis

- **Dashboard:** https://vercel.com/kendesonrochas-projects/areamembros
- **Settings:** https://vercel.com/kendesonrochas-projects/areamembros/settings
- **Environment Variables:** https://vercel.com/kendesonrochas-projects/areamembros/settings/environment-variables

---

**Após adicionar as variáveis, execute: `vercel --prod`** 🚀


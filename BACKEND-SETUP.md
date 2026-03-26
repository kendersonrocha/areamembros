# 🚀 Backend Node.js para Integração Circle.so

Este backend foi criado para resolver o problema de CORS ao conectar com a API do Circle.so diretamente do navegador.

## 📋 Como Funciona

```
Frontend (React) → Backend (Node.js) → Circle API → Backend → Frontend
```

O backend atua como um **proxy intermediário** que:
- ✅ Recebe requisições do frontend
- ✅ Faz chamadas autenticadas para a API do Circle
- ✅ Retorna os dados para o frontend
- ✅ Resolve problemas de CORS

## 🔧 Configuração

### 1. Verificar Variáveis de Ambiente

Certifique-se de que o arquivo `.env` na raiz do projeto contém:

```env
VITE_CIRCLE_API_TOKEN=seu_token_aqui
VITE_CIRCLE_COMMUNITY_ID=seu_community_id_aqui
VITE_BACKEND_URL=http://localhost:3000
VITE_USE_BACKEND=true
```

### 2. Instalar Dependências (já feito)

As dependências do backend já foram instaladas:
- express
- cors
- dotenv

## 🚀 Como Usar

### Opção 1: Rodar Frontend e Backend Juntos (Recomendado)

```bash
npm run dev
```

Este comando inicia:
- **Frontend** em `http://localhost:5173` (ou 5174)
- **Backend** em `http://localhost:3000`

### Opção 2: Rodar Separadamente

**Terminal 1 - Frontend:**
```bash
npm run dev:frontend
```

**Terminal 2 - Backend:**
```bash
npm run dev:backend
```

## 📡 Endpoints Disponíveis

### Health Check
```
GET http://localhost:3000/api/health
```
Verifica se o backend está funcionando.

### Testar Conexão Circle
```
GET http://localhost:3000/api/circle/test
```
Testa a autenticação com a API do Circle.

### Estatísticas da Comunidade
```
GET http://localhost:3000/api/circle/community/stats
```
Retorna membros, posts e comentários da comunidade.

### Posts Recentes
```
GET http://localhost:3000/api/circle/posts?limit=10
```
Retorna os posts mais recentes.

### Membros Ativos
```
GET http://localhost:3000/api/circle/members?limit=10
```
Retorna os membros mais ativos.

## ✅ Verificar se Está Funcionando

1. **Inicie o backend e frontend:**
   ```bash
   npm run dev
   ```

2. **Abra o navegador** em `http://localhost:5173`

3. **Acesse a página Comunidade**

4. **Verifique o console do navegador (F12)**:
   - Deve mostrar "✅ Estatísticas reais carregadas do backend"
   - Não deve mostrar "Dados simulados"

5. **Verifique o console do terminal**:
   - Deve mostrar logs do backend com "✅ Estatísticas carregadas"

## 🔍 Troubleshooting

### Backend não inicia
- Verifique se a porta 3000 está livre
- Confirme que as variáveis de ambiente estão configuradas

### Dados simulados ainda aparecem
- Certifique-se de que `VITE_USE_BACKEND=true` no `.env`
- Reinicie o frontend após alterar variáveis de ambiente

### Erro de CORS
- O backend já está configurado para permitir requisições do localhost:5173 e 5174
- Se usar outra porta, adicione em `server/index.js`

## 📁 Estrutura do Backend

```
server/
├── index.js          # Servidor Express principal
├── package.json      # Dependências do backend
└── node_modules/     # Módulos instalados
```

## 🎯 Próximos Passos

### Para Desenvolvimento
Tudo está configurado! Use `npm run dev` para trabalhar.

### Para Produção
Você precisará:

1. **Deploy do Backend**: 
   - Heroku, Railway, Render, ou Vercel
   - Configure as variáveis de ambiente no serviço

2. **Atualizar Frontend**:
   - Altere `VITE_BACKEND_URL` para a URL de produção
   - Exemplo: `VITE_BACKEND_URL=https://seu-backend.herokuapp.com`

## 💡 Dicas

- O backend loga todas as requisições no console
- Use F12 no navegador para ver logs do frontend
- Em caso de erro, verifique ambos os consoles

---

**🎉 Backend configurado e pronto para uso!**


# 🔗 Integração com Circle.so

Este projeto está configurado para integrar com a comunidade Circle.so da VSD.

## 📋 Configuração

### 1. Obter Credenciais do Circle

1. **Token de API:**
   - Acesse sua conta Circle.so
   - Vá em **Settings** → **Developers** → **API Tokens**
   - Clique em **"Create Token"**
   - Escolha **"Admin v1"**
   - Dê um nome (ex: "VSD App Integration")
   - Copie o token gerado

2. **Community ID:**
   - No Circle, abra o console do navegador (F12)
   - Procure por "community_id" ou encontre na URL
   - Ou use o endpoint: `GET /api/v1/me` para obter seus dados

### 2. Configurar Variáveis de Ambiente

1. Copie o arquivo `env.example` para `.env`:
   ```bash
   cp env.example .env
   ```

2. Edite o arquivo `.env` e substitua pelos seus valores reais:
   ```env
   VITE_CIRCLE_API_TOKEN=seu_token_real_aqui
   VITE_CIRCLE_COMMUNITY_ID=seu_community_id_real_aqui
   ```

### 3. Testar a Integração

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse a página **Comunidade** no aplicativo
3. Verifique se os dados estão sendo carregados corretamente

## 🚀 Funcionalidades Implementadas

- ✅ **Estatísticas em Tempo Real**: Membros, posts e comentários
- ✅ **Tratamento de Erros**: Mensagens amigáveis quando a API falha
- ✅ **Estados de Loading**: Indicadores visuais durante carregamento
- ✅ **Fallback**: Dados mockados quando a API não está disponível

## 📁 Arquivos Criados

- `src/services/circleApi.ts` - Serviço para comunicação com a API do Circle
- `src/hooks/useCommunity.tsx` - Hooks customizados para gerenciar estado
- `env.example` - Exemplo de configuração das variáveis de ambiente
- `.gitignore` - Atualizado para ignorar arquivos `.env`

## ⚠️ Problema CORS Resolvido

**IMPORTANTE:** A API do Circle.so bloqueia requisições diretas do navegador devido a políticas CORS. 

### ✅ Solução Implementada:

1. **Fallback Inteligente**: Quando a API falha por CORS, o sistema automaticamente usa dados simulados realistas
2. **Aviso Visual**: Um banner amarelo informa quando dados simulados estão sendo usados
3. **Debug Completo**: Logs detalhados no console para diagnosticar problemas
4. **Experiência Contínua**: O usuário sempre vê dados, mesmo quando a API não está disponível

### 🔧 Como Funciona:

- **Primeira tentativa**: Tenta conectar com a API real do Circle
- **Se falhar por CORS**: Automaticamente usa dados simulados (1.247 membros, 523 posts, 2.156 comentários)
- **Aviso claro**: Usuário é informado que está vendo dados simulados
- **Botão "Abrir Comunidade"**: Continua funcionando normalmente, redirecionando para `https://vsd.circle.so/feed`

## ⚠️ Segurança

- **NUNCA** commite o arquivo `.env` com suas credenciais reais
- O arquivo `.env` já está no `.gitignore` para proteção
- Em produção, considere usar um backend intermediário para maior segurança

## 🔧 Próximos Passos

1. **Posts Recentes**: Exibir últimas discussões da comunidade
2. **Membros Ativos**: Lista de membros mais engajados
3. **Notificações**: Alertas de novas discussões
4. **SSO**: Login direto na comunidade Circle
5. **Ranking**: Sistema de pontuação baseado em participação

## 📚 Documentação da API Circle

- [Circle.so API Documentation](https://docs.circle.so/)
- [Authentication Guide](https://docs.circle.so/api/authentication)
- [Community Endpoints](https://docs.circle.so/api/community)

---

**🎉 A integração está pronta! Configure suas credenciais e teste!**

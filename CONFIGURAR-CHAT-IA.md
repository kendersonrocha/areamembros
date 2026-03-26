# 🤖 Como Configurar o Chat com IA

O Assistente IA está integrado ao projeto e suporta múltiplos providers de LLM!

## 🆓 Opção 1: Groq (Recomendado - Gratuito e Rápido)

**Groq é 100% gratuito e extremamente rápido!** ⚡

### Passo a Passo:

1. **Acesse**: https://console.groq.com
2. **Crie uma conta** (gratuita)
3. **Vá em "API Keys"** no menu lateral
4. **Clique em "Create API Key"**
5. **Copie a chave gerada**

6. **Configure no projeto**:
   - Copie o arquivo `env.example` para `.env`
   - Abra o arquivo `.env`
   - Cole sua chave na linha `GROQ_API_KEY=sua_chave_aqui`

**Exemplo:**
```env
LLM_PROVIDER=groq
GROQ_API_KEY=gsk_abcd1234efgh5678ijkl9012mnop3456qrst7890uvwx
```

7. **Reinicie o servidor** (se estiver rodando)

**Pronto!** 🎉 O chat agora está funcionando com IA real!

---

## 💰 Opção 2: OpenAI (Pago)

Se você preferir usar GPT-4 ou GPT-3.5:

1. **Acesse**: https://platform.openai.com
2. **Crie uma conta** e adicione créditos
3. **Vá em API Keys** e crie uma nova
4. **Configure no `.env`**:

```env
LLM_PROVIDER=openai
OPENAI_API_KEY=sk-proj-abcd1234...
OPENAI_MODEL=gpt-4o-mini
```

**Modelos disponíveis:**
- `gpt-4o` - Mais inteligente, mais caro
- `gpt-4o-mini` - Bom custo-benefício (recomendado)
- `gpt-3.5-turbo` - Mais barato

---

## 🧠 Opção 3: Anthropic Claude (Pago)

Para usar o Claude da Anthropic:

1. **Acesse**: https://console.anthropic.com
2. **Crie uma conta** e configure billing
3. **Gere uma API Key**
4. **Configure no `.env`**:

```env
LLM_PROVIDER=anthropic
ANTHROPIC_API_KEY=sk-ant-abcd1234...
```

---

## ✅ Testando a Configuração

1. **Inicie o servidor** (se não estiver rodando):
```bash
npm run dev
```

2. **Acesse a aplicação**: http://localhost:5173

3. **Faça login** (qualquer email/senha)

4. **Clique em "Assistente IA"** no menu lateral

5. **Faça uma pergunta**, exemplo:
   - "Como aumentar minhas vendas no TikTok Shop?"
   - "Dicas para criar vídeos virais"
   - "Como fazer lives que convertem?"

6. **Se funcionar**, você verá respostas personalizadas e inteligentes! 🎯

---

## 🔧 Troubleshooting

### ❌ "Backend não está rodando"
- Certifique-se de que executou `npm run dev` na raiz do projeto
- Verifique se a porta 3000 está livre

### ❌ "API key não configurada"
- Verifique se criou o arquivo `.env` (copie do `env.example`)
- Confirme se a variável `GROQ_API_KEY` está preenchida
- Reinicie o servidor após adicionar a chave

### ❌ "Erro ao processar mensagem"
- Verifique sua conexão com a internet
- Confirme se a API key está válida
- Veja os logs no terminal do servidor

### 📝 Verificar logs do servidor
No terminal onde o servidor está rodando, você verá:
- `🤖 Processando mensagem com GROQ...` - Quando enviar mensagem
- `✅ Resposta gerada com sucesso!` - Quando receber resposta
- `❌ Erro...` - Se houver problemas

---

## 💡 Dicas

### Para Groq (Gratuito):
- ✅ Até 30 requisições por minuto (mais que suficiente!)
- ✅ Modelo `llama-3.3-70b-versatile` é extremamente rápido
- ✅ Qualidade de resposta excelente
- ✅ Sem custos!

### Para OpenAI:
- 💰 `gpt-4o-mini` custa ~$0.15 por 1M tokens (muito barato)
- 💰 `gpt-4o` custa ~$2.50 por 1M tokens
- Use `gpt-4o-mini` para desenvolvimento

### Personalização:
O prompt do sistema está em `server/routes/chat.js` na variável `SYSTEM_PROMPT`.
Você pode editá-lo para ajustar o comportamento do assistente!

---

## 🚀 Próximos Passos

Com o chat funcionando, você pode:
- [ ] Testar diferentes tipos de perguntas
- [ ] Personalizar o system prompt
- [ ] Adicionar mais contexto (cursos, progresso do aluno)
- [ ] Implementar streaming de respostas
- [ ] Integrar com banco de dados para histórico

**Aproveite seu Assistente IA!** 🎉

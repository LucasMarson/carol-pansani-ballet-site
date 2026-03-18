# 📸 Guia de Integração - Instagram Feed (Elfsight)

## Visão Geral

O site agora possui uma seção "Instagram" que exibe automaticamente as últimas postagens da sua conta usando o **Elfsight Instagram Feed Widget**.

## ✅ Vantagens do Elfsight

- ✅ Sem necessidade de API Key complexa
- ✅ Funciona com contas pessoais e business
- ✅ Atualiza automaticamente
- ✅ Responsivo e elegante
- ✅ Suporta imagens, vídeos e carrossel
- ✅ Fácil de configurar

## 🔧 Como Configurar

### Passo 1: Criar Conta no Elfsight

1. Acesse [Elfsight.com](https://elfsight.com)
2. Clique em "Sign Up" (canto superior direito)
3. Crie uma conta com seu email
4. Confirme seu email

### Passo 2: Criar Widget Instagram Feed

1. No dashboard do Elfsight, clique em "Create New"
2. Procure por "Instagram Feed"
3. Clique em "Create"

### Passo 3: Conectar sua Conta Instagram

1. Clique em "Connect Instagram Account"
2. Selecione sua conta (@carolpansaniballet)
3. Autorize o Elfsight a acessar suas postagens
4. Clique em "Approve"

### Passo 4: Personalizar o Widget

Na seção de configurações, você pode:

- **Número de Posts**: Quantos posts exibir (recomendado: 6-12)
- **Colunas**: Layout em grid (recomendado: 3 colunas)
- **Tamanho**: Altura dos posts
- **Cor de Fundo**: Deixar branco para combinar com o site
- **Mostrar Legenda**: Ativar para exibir descrições
- **Mostrar Likes**: Opcional

### Passo 5: Copiar o ID do Widget

1. Após personalizar, clique em "Publish"
2. Copie o **App ID** (formato: `f3b4c2a0-1234-5678-9abc-def012345678`)
3. Este ID será usado no código

### Passo 6: Atualizar o Código

Abra o arquivo `client/src/components/InstagramFeed.tsx` e substitua:

```tsx
data-elfsight-app-id="f3b4c2a0-1234-5678-9abc-def012345678"
```

Pelo seu App ID do Elfsight.

### Passo 7: Salvar e Testar

1. Salve o arquivo
2. O servidor vai recarregar automaticamente
3. Navegue até a seção "Instagram" no site
4. Você deve ver suas postagens do Instagram!

## 🎨 Personalização Avançada

### Mudar Número de Posts

No Elfsight Dashboard:
1. Vá para "Settings"
2. Ajuste "Number of Posts"
3. Clique "Save"

### Mudar Layout

1. Em "Settings", escolha "Columns"
2. Opções: 1, 2, 3, 4 ou 5 colunas
3. Recomendado: 3 colunas para desktop

### Adicionar Botão "Ver Mais"

1. Em "Settings", ative "Show Load More Button"
2. Clique em "Save"

## 🔄 Atualização Automática

O feed se atualiza automaticamente quando você:
1. Faz um novo post no Instagram
2. Recarrega a página do site
3. Aguarda a sincronização do Elfsight (até 1 hora)

## 🛡️ Segurança

- ✅ Nenhuma API Key é armazenada no código
- ✅ Elfsight gerencia a autenticação com segurança
- ✅ Seus dados do Instagram não são expostos
- ✅ Conexão criptografada (HTTPS)

## 🐛 Troubleshooting

### "Widget não está carregando"

**Solução:**
1. Verifique se o App ID está correto
2. Certifique-se de que o widget está "Published" no Elfsight
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Recarregue a página

### "Erro ao conectar Instagram"

**Solução:**
1. Verifique se sua conta Instagram é pública
2. Tente desconectar e reconectar no Elfsight
3. Certifique-se de que você tem permissão para gerenciar a conta

### "Postagens antigas não aparecem"

**Solução:**
1. Aumente o "Number of Posts" no Elfsight
2. Aguarde até 1 hora para sincronização
3. Clique em "Refresh" no dashboard do Elfsight

## 📱 Responsividade

O widget se adapta automaticamente para:
- ✅ Desktop (3 colunas)
- ✅ Tablet (2 colunas)
- ✅ Mobile (1 coluna)

## 🔗 Links Úteis

- [Elfsight Instagram Feed](https://elfsight.com/instagram-feed/)
- [Elfsight Dashboard](https://apps.elfsight.com/)
- [Documentação Elfsight](https://elfsight.com/help/)

## 💡 Dicas

1. **Poste regularmente** - Quanto mais posts, melhor o feed
2. **Use hashtags** - #carolpansaniballet, #ballet, #dança
3. **Engaje com seguidores** - Responda comentários
4. **Qualidade de fotos** - Imagens profissionais se destacam mais
5. **Horário de postagem** - Poste nos horários de pico (manhã/noite)

## ❓ Próximas Melhorias

1. **Integrar TikTok** - Quando TikTok liberar API pública
2. **Filtros de Hashtag** - Mostrar apenas posts com #ballet
3. **Integrar YouTube** - Mostrar últimos vídeos
4. **Integrar Pinterest** - Para inspirações de design

## 📞 Suporte

Se tiver dúvidas:
- Acesse [Elfsight Help](https://elfsight.com/help/)
- Envie email para support@elfsight.com
- Consulte a comunidade do Elfsight

---

**Pronto!** Seu feed do Instagram está configurado e funcionando! 🎉

# 📱 Guia de Integração - Feeds Sociais (Instagram e TikTok)

## Visão Geral

O site agora possui uma seção "Redes Sociais" que exibe:
- ✅ Feed do Instagram (automático com API Graph)
- 📱 Link para TikTok (com chamada para ação)

## 🔧 Configuração do Instagram Graph API

### Pré-requisitos

1. **Conta do Instagram Business** - Converter sua conta pessoal em Business Account
2. **Página do Facebook** - Vinculada à sua conta do Instagram
3. **App do Facebook** - Para obter credenciais de API

### Passo a Passo

#### 1. Criar App no Facebook Developer

1. Acesse [Facebook Developers](https://developers.facebook.com/)
2. Clique em "Meus Apps" → "Criar App"
3. Escolha "Negócios" como tipo de app
4. Preencha os detalhes:
   - Nome do App: "Carol Pansani Ballet"
   - Email de Contato: seu email
   - Finalidade: "Outro"

#### 2. Configurar Instagram Graph API

1. No dashboard do app, clique em "Adicionar Produto"
2. Procure por "Instagram Graph API"
3. Clique em "Configurar"
4. Selecione "Gerenciar Token de Acesso"

#### 3. Obter Access Token

1. Vá para "Ferramentas" → "Explorador do Graph"
2. Selecione seu app no dropdown
3. Clique em "Obter Token de Acesso"
4. Selecione as permissões:
   - `instagram_business_basic`
   - `instagram_business_content_publish`
   - `pages_read_engagement`
   - `pages_read_user_content`
5. Clique em "Gerar Token de Acesso"
6. Copie o token gerado

#### 4. Obter Business Account ID

1. No Explorador do Graph, execute esta query:
```
GET /me/instagram_business_accounts
```
2. Você verá um resultado como:
```json
{
  "data": [
    {
      "username": "carolpansaniballet",
      "name": "Carol Pansani Ballet",
      "id": "17841400000000000"
    }
  ]
}
```
3. Copie o `id` (este é seu Business Account ID)

### 5. Configurar Variáveis de Ambiente

Adicione as seguintes variáveis ao seu arquivo `.env` ou no painel de configuração do Manus:

```env
VITE_INSTAGRAM_ACCESS_TOKEN=seu_access_token_aqui
VITE_INSTAGRAM_BUSINESS_ACCOUNT_ID=seu_business_account_id_aqui
```

**Importante:** Nunca compartilhe seu Access Token publicamente!

### 6. Testar a Integração

1. Salve as variáveis de ambiente
2. Reinicie o servidor de desenvolvimento
3. Navegue até a seção "Redes Sociais" no site
4. Você deve ver as 6 últimas postagens do Instagram

## 📸 Estrutura do Feed Instagram

O feed exibe:
- **Imagens**: Fotos em alta qualidade
- **Vídeos**: Vídeos do Instagram (se houver)
- **Carrossel**: Múltiplas imagens em um post
- **Hover Effect**: Ícone do Instagram aparece ao passar o mouse
- **Link Direto**: Clique para ir ao post no Instagram

## 🎵 TikTok Integration

### Status Atual

O TikTok não oferece uma API pública simples para embeds automáticos. Atualmente, o site exibe:
- ✅ Botão com link direto para o TikTok
- ✅ Chamada para ação para seguir

### Alternativas para Integração Completa

#### Opção 1: Usar Serviço de Terceiros
- **TikTok Embed Widget** - Embed manual de vídeos específicos
- **Linktr.ee** - Agregador de links sociais
- **Beacons** - Plataforma de bio link com feeds

#### Opção 2: Solução de Backend
Se você quiser exibir o feed do TikTok automaticamente, você precisará:
1. Implementar um backend (Node.js, Python, etc.)
2. Usar uma API não-oficial de TikTok (com risco de bloqueio)
3. Armazenar em cache os dados dos vídeos

#### Opção 3: Embed Manual
Você pode adicionar vídeos específicos do TikTok manualmente usando o embed code:

```html
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@carolpansaniballet/video/VIDEOID" data-unique-id="VIDEOID" data-embed-type="video">
  <section>
    <a target="_blank" title="@carolpansaniballet" href="https://www.tiktok.com/@carolpansaniballet">@carolpansaniballet</a>
  </section>
</blockquote>
<script async src="https://www.tiktok.com/embed.js"></script>
```

## 🔄 Atualização Automática

O feed do Instagram se atualiza automaticamente quando você:
1. Faz um novo post no Instagram
2. Recarrega a página do site
3. O cache expira (configurável no código)

## 🛡️ Segurança

### Boas Práticas

1. **Nunca compartilhe seu Access Token**
   - Mantenha em variáveis de ambiente
   - Não comita no GitHub
   - Use tokens com expiração

2. **Regenere tokens regularmente**
   - A cada 60 dias é recomendado
   - Ou quando suspeitar de comprometimento

3. **Monitore a atividade**
   - Verifique logs de acesso no Facebook Developer
   - Revise as permissões concedidas

## 🐛 Troubleshooting

### "Feed não está carregando"

**Solução:**
1. Verifique se as variáveis de ambiente estão corretas
2. Confirme que o Access Token não expirou
3. Verifique o console do navegador (F12) para erros
4. Certifique-se de que a conta é Business Account

### "Erro 400 - Invalid Request"

**Solução:**
1. Verifique o Business Account ID
2. Confirme que o Access Token tem as permissões corretas
3. Tente regenerar um novo Access Token

### "Erro 403 - Acesso Negado"

**Solução:**
1. Verifique as permissões do app
2. Confirme que a conta do Instagram está vinculada ao app
3. Verifique se a conta é Business Account (não pessoal)

## 📊 Dados Exibidos

Para cada post do Instagram, o site exibe:
- **Imagem/Vídeo**: Mídia do post
- **Legenda**: Texto do post (primeiras 100 caracteres)
- **Data**: Quando foi postado
- **Link**: Para o post original no Instagram

## 🔗 Links Úteis

- [Instagram Graph API Docs](https://developers.facebook.com/docs/instagram-graph-api)
- [Facebook Developer Console](https://developers.facebook.com/)
- [Instagram Business Help](https://help.instagram.com/business)

## 📝 Próximas Melhorias

1. **Filtros de Categoria** - Filtrar posts por hashtag
2. **Paginação** - Carregar mais posts ao rolar
3. **Cache Customizado** - Atualizar em intervalos específicos
4. **TikTok Automático** - Quando TikTok liberar API pública
5. **Stories** - Exibir Stories do Instagram

## ❓ Dúvidas?

Para mais informações sobre a integração, consulte:
- Documentação do Instagram Graph API
- Suporte do Facebook Developer
- Comunidade de desenvolvedores do Facebook

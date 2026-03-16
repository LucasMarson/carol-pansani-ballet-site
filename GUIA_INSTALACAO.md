# Guia de Instalação e Uso - Carol Pansani Ballet Site

## Bem-vindo! 🎉

Este é um site one page completo para a escola de dança Carol Pansani Ballet, desenvolvido em **TypeScript**, **React 19**, **TailwindCSS 4** e **shadcn/ui**. Este guia irá ajudá-lo a configurar o projeto em sua máquina local e começar a trabalhar com ele no VS Code.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

| Ferramenta | Versão Mínima | Link |
|-----------|---------------|------|
| Node.js | 18.0.0 | https://nodejs.org/ |
| npm ou pnpm | 9.0.0 | https://pnpm.io/ |
| Git | Qualquer versão | https://git-scm.com/ |
| VS Code | Qualquer versão | https://code.visualstudio.com/ |

Para verificar se você tem essas ferramentas instaladas, abra seu terminal e execute:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Passo 1: Clonar ou Extrair o Projeto

### Opção A: Se você recebeu como arquivo ZIP

1. Extraia o arquivo `carol-pansani-ballet-site.zip` em uma pasta de sua escolha
2. Abra o terminal e navegue até a pasta:

```bash
cd caminho/para/carol-pansani-ballet-site
```

### Opção B: Se você tem um repositório Git

```bash
git clone https://seu-repositorio-aqui
cd carol-pansani-ballet-site
```

---

## 📦 Passo 2: Instalar Dependências

Com o terminal aberto na pasta do projeto, execute:

```bash
pnpm install
```

Ou, se você preferir usar npm:

```bash
npm install
```

Este comando irá baixar e instalar todas as dependências necessárias. Isso pode levar alguns minutos na primeira vez.

---

## 🎨 Passo 3: Abrir o Projeto no VS Code

1. Abra o VS Code
2. Vá para **File > Open Folder** (ou pressione `Ctrl+K Ctrl+O`)
3. Navegue até a pasta `carol-pansani-ballet-site` e clique em **Abrir**

Seu projeto está pronto no VS Code!

---

## 🏃 Passo 4: Iniciar o Servidor de Desenvolvimento

Com o terminal do VS Code aberto (ou um terminal externo na pasta do projeto), execute:

```bash
pnpm dev
```

Ou com npm:

```bash
npm run dev
```

Você verá uma mensagem como:

```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

Abra seu navegador e acesse `http://localhost:5173/` para ver o site em tempo real!

---

## 📁 Estrutura do Projeto

```
carol-pansani-ballet-site/
├── client/
│   ├── public/              ← Arquivos estáticos (favicon, robots.txt)
│   ├── src/
│   │   ├── components/      ← Componentes React reutilizáveis
│   │   │   ├── Header.tsx
│   │   │   ├── HeroBanner.tsx
│   │   │   ├── Diferenciais.tsx
│   │   │   ├── Servicos.tsx
│   │   │   ├── Carousel.tsx
│   │   │   ├── Modalidades.tsx
│   │   │   ├── SobreCarol.tsx
│   │   │   ├── Depoimentos.tsx
│   │   │   ├── Contato.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           ← Páginas principais
│   │   │   └── Home.tsx
│   │   ├── App.tsx          ← Componente raiz
│   │   ├── main.tsx         ← Ponto de entrada
│   │   └── index.css        ← Estilos globais e temas
│   └── index.html
├── package.json             ← Dependências do projeto
├── tsconfig.json            ← Configuração TypeScript
├── vite.config.ts           ← Configuração Vite
└── tailwind.config.ts       ← Configuração TailwindCSS
```

---

## 🎯 Seções do Site

O site é composto pelas seguintes seções, todas em uma única página:

### 1. **Header** (`Header.tsx`)
- Logo e nome da escola
- Menu de navegação com links para cada seção
- Botão "Agende Agora" que leva ao WhatsApp
- Menu responsivo para dispositivos móveis

### 2. **Hero Banner** (`HeroBanner.tsx`)
- Título principal "Carol Pansani Ballet"
- Frase de impacto sobre a escola
- Informação sobre as duas unidades
- CTA (Call-to-Action) para agendar visita

### 3. **Diferenciais** (`Diferenciais.tsx`)
- Descrição dos diferenciais da escola
- Mosaico de fotos (placeholder)
- Pontos-chave com ícones
- CTA para conhecer a escola

### 4. **Serviços** (`Servicos.tsx`)
- 5 cards com os serviços oferecidos:
  - Aulas
  - Espetáculos
  - Fitting
  - Lojinha
  - Coreografias
- CTA para consultar valores

### 5. **Carrossel de Fotos** (`Carousel.tsx`)
- Galeria interativa com navegação
- Auto-play a cada 5 segundos
- Indicadores de página (dots)

### 6. **Modalidades** (`Modalidades.tsx`)
- Accordion com 4 modalidades:
  - Ballet Clássico
  - Jazz
  - Dança Contemporânea
  - Yoga
- Detalhes, níveis e locais de cada modalidade

### 7. **Sobre Carol** (`SobreCarol.tsx`)
- Biografia completa da Carol Pansani
- Foto (placeholder)
- Citação inspiradora

### 8. **Depoimentos** (`Depoimentos.tsx`)
- 3 depoimentos de alunos e pais
- Avaliação em estrelas
- Fotos dos depoentes (emojis)

### 9. **Contato** (`Contato.tsx`)
- Seção Instagram
- Cards com WhatsApp, Instagram e TikTok
- Mapas e endereços das duas unidades

### 10. **Footer** (`Footer.tsx`)
- Links rápidos
- Informações de contato
- Redes sociais

---

## ✏️ Como Editar o Conteúdo

### Editar Textos

Todos os textos estão nos componentes `.tsx`. Para editar, simplesmente abra o arquivo do componente e modifique o texto:

**Exemplo:** Para editar o título do hero banner, abra `client/src/components/HeroBanner.tsx` e procure por:

```tsx
<h1 className="heading-display mb-4">
  Carol Pansani Ballet
</h1>
```

### Adicionar Imagens

Para adicionar imagens reais no lugar dos placeholders:

1. Coloque suas imagens em uma pasta (ex: `client/public/images/`)
2. Importe e use nos componentes:

```tsx
<img src="/images/minha-foto.jpg" alt="Descrição" />
```

### Editar Cores

As cores principais estão definidas em `client/src/index.css`. As cores usadas são:

- **Primária (Rosa):** `#E8D4D0` → Usada em botões e destaques
- **Secundária (Azul Profundo):** `#2C3E50` → Usada em títulos
- **Acentos (Ouro Suave):** `#D4AF37` → Usada em destaques

Para mudar uma cor, edite o arquivo CSS:

```css
:root {
  --primary: oklch(0.6 0.12 25);  /* Mude este valor */
  /* ... */
}
```

### Editar Links do WhatsApp

Procure por `https://wa.me/5519982640644` nos componentes e substitua pelo número desejado.

---

## 🔧 Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o servidor de desenvolvimento |
| `pnpm build` | Compila o projeto para produção |
| `pnpm preview` | Visualiza a build de produção localmente |
| `pnpm check` | Verifica erros de TypeScript |
| `pnpm format` | Formata o código com Prettier |

---

## 📱 Responsividade

O site é totalmente responsivo e funciona em:

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (até 767px)

Para testar a responsividade no VS Code:
1. Abra o DevTools (F12)
2. Clique no ícone de dispositivo (Ctrl+Shift+M)
3. Selecione diferentes tamanhos de tela

---

## 🎨 Personalizando o Design

### Tipografia

O site usa duas fontes do Google Fonts:

- **Playfair Display** (Serif) → Títulos elegantes
- **Inter** (Sans-serif) → Corpo do texto

Para mudar as fontes, edite `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;700&display=swap" rel="stylesheet" />
```

E depois atualize o CSS em `client/src/index.css`:

```css
body {
  font-family: 'SuaFonte', sans-serif;
}
```

### Espaçamento e Bordas

O TailwindCSS oferece classes utilitárias para espaçamento:

- `p-4` = padding de 1rem
- `m-4` = margin de 1rem
- `rounded-lg` = bordas arredondadas

Consulte a [documentação do TailwindCSS](https://tailwindcss.com/docs) para mais opções.

---

## 🚀 Publicar o Site

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
pnpm build
```

Isso criará uma pasta `dist/` com todos os arquivos prontos para publicação.

### Opções de Hospedagem

Você pode hospedar este site em:

- **Vercel** (Recomendado) → https://vercel.com
- **Netlify** → https://netlify.com
- **GitHub Pages** → https://pages.github.com
- **Seu próprio servidor** → Copie os arquivos de `dist/`

---

## 🐛 Solução de Problemas

### Problema: "pnpm: command not found"

**Solução:** Instale o pnpm globalmente:

```bash
npm install -g pnpm
```

### Problema: Porta 5173 já está em uso

**Solução:** Use uma porta diferente:

```bash
pnpm dev -- --port 3000
```

### Problema: Mudanças não aparecem no navegador

**Solução:** O Vite tem hot reload automático. Se não funcionar:

1. Pressione `Ctrl+C` para parar o servidor
2. Execute `pnpm dev` novamente
3. Atualize a página no navegador (F5)

### Problema: Erros de TypeScript

**Solução:** Verifique se todos os imports estão corretos e execute:

```bash
pnpm check
```

---

## 📚 Recursos Úteis

- **React 19 Docs:** https://react.dev
- **TailwindCSS:** https://tailwindcss.com
- **shadcn/ui:** https://ui.shadcn.com
- **TypeScript:** https://www.typescriptlang.org
- **Vite:** https://vitejs.dev

---

## 💡 Dicas Importantes

1. **Sempre use `pnpm`** em vez de `npm` para instalar novos pacotes, para manter a consistência
2. **Commit suas mudanças** regularmente com Git
3. **Teste em dispositivos móveis** antes de publicar
4. **Otimize as imagens** antes de adicionar ao site
5. **Mantenha o código organizado** em componentes pequenos e reutilizáveis

---

## 📞 Suporte

Se você tiver dúvidas sobre o projeto ou precisar de ajuda:

1. Consulte a documentação dos frameworks usados (links acima)
2. Verifique se há erros no console do navegador (F12)
3. Procure por mensagens de erro no terminal

---

## 📄 Licença

Este projeto é de uso exclusivo da Carol Pansani Ballet. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Carol Pansani Ballet**

Versão: 1.0.0 | Data: Março de 2026

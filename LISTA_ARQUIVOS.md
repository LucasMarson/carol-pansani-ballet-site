# Lista Completa de Arquivos - Carol Pansani Ballet Site

## 📂 Estrutura Completa do Projeto

```
carol-pansani-ballet-site/
│
├── 📄 README.md                          # Documentação principal do projeto
├── 📄 GUIA_INSTALACAO.md                 # Guia de instalação e uso (LEIA PRIMEIRO!)
├── 📄 LISTA_ARQUIVOS.md                  # Este arquivo
├── 📄 ideas.md                           # Filosofia de design do site
├── 📄 package.json                       # Dependências e scripts do projeto
├── 📄 tsconfig.json                      # Configuração do TypeScript
├── 📄 vite.config.ts                     # Configuração do Vite
├── 📄 tailwind.config.ts                 # Configuração do TailwindCSS
├── 📄 postcss.config.js                  # Configuração do PostCSS
│
├── 📁 client/                            # Código-fonte do frontend
│   ├── 📁 public/                        # Arquivos estáticos
│   │   ├── favicon.ico                   # Ícone do site
│   │   ├── robots.txt                    # Instruções para bots
│   │   └── manifest.json                 # Metadados da aplicação
│   │
│   ├── 📁 src/                           # Código-fonte TypeScript/React
│   │   ├── 📁 components/                # Componentes React reutilizáveis
│   │   │   ├── Header.tsx                # Cabeçalho com navegação
│   │   │   ├── HeroBanner.tsx            # Seção hero principal
│   │   │   ├── Diferenciais.tsx          # Seção de diferenciais
│   │   │   ├── Servicos.tsx              # Seção de serviços
│   │   │   ├── Carousel.tsx              # Carrossel de fotos
│   │   │   ├── Modalidades.tsx           # Seção de modalidades (accordion)
│   │   │   ├── SobreCarol.tsx            # Biografia da Carol
│   │   │   ├── Depoimentos.tsx           # Seção de depoimentos
│   │   │   ├── Contato.tsx               # Seção de contato
│   │   │   ├── Footer.tsx                # Rodapé
│   │   │   ├── ErrorBoundary.tsx         # Tratamento de erros
│   │   │   └── ui/                       # Componentes shadcn/ui
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── dialog.tsx
│   │   │       ├── sonner.tsx
│   │   │       ├── tooltip.tsx
│   │   │       └── ... (outros componentes)
│   │   │
│   │   ├── 📁 pages/                     # Páginas principais
│   │   │   ├── Home.tsx                  # Página principal (one-page)
│   │   │   └── NotFound.tsx              # Página 404
│   │   │
│   │   ├── 📁 contexts/                  # Contextos React
│   │   │   └── ThemeContext.tsx          # Contexto de tema (light/dark)
│   │   │
│   │   ├── 📁 hooks/                     # Custom React hooks
│   │   │   └── useTheme.ts               # Hook para gerenciar tema
│   │   │
│   │   ├── 📁 lib/                       # Funções utilitárias
│   │   │   ├── utils.ts                  # Funções auxiliares
│   │   │   └── cn.ts                     # Utilitário para classes CSS
│   │   │
│   │   ├── App.tsx                       # Componente raiz da aplicação
│   │   ├── main.tsx                      # Ponto de entrada do React
│   │   └── index.css                     # Estilos globais e temas
│   │
│   └── index.html                        # Arquivo HTML principal
│
├── 📁 server/                            # Código do servidor (placeholder)
│   └── index.ts                          # Servidor Express (não usado em web-static)
│
├── 📁 shared/                            # Código compartilhado (placeholder)
│   └── const.ts                          # Constantes compartilhadas
│
├── 📁 node_modules/                      # Dependências instaladas (gerado automaticamente)
│
└── 📁 dist/                              # Build de produção (gerado com `pnpm build`)
    ├── index.html
    ├── assets/
    │   ├── index-XXXXX.js
    │   └── index-XXXXX.css
    └── ... (outros arquivos compilados)
```

---

## 📋 Descrição dos Arquivos Principais

### Arquivos de Configuração

| Arquivo | Descrição |
|---------|-----------|
| `package.json` | Define dependências, scripts e metadados do projeto |
| `tsconfig.json` | Configurações do compilador TypeScript |
| `vite.config.ts` | Configurações do bundler Vite |
| `tailwind.config.ts` | Configurações do framework CSS TailwindCSS |
| `postcss.config.js` | Configurações do processador CSS PostCSS |

### Componentes Principais (client/src/components/)

| Componente | Responsabilidade |
|-----------|------------------|
| `Header.tsx` | Navegação fixa, logo, menu responsivo |
| `HeroBanner.tsx` | Seção hero com título e CTA |
| `Diferenciais.tsx` | Apresentação dos diferenciais da escola |
| `Servicos.tsx` | Cards com 5 serviços oferecidos |
| `Carousel.tsx` | Galeria de fotos com navegação |
| `Modalidades.tsx` | Accordion com 4 modalidades de dança |
| `SobreCarol.tsx` | Biografia da fundadora |
| `Depoimentos.tsx` | 3 depoimentos de alunos e pais |
| `Contato.tsx` | Informações de contato e localização |
| `Footer.tsx` | Rodapé com links e informações |

### Páginas (client/src/pages/)

| Página | Descrição |
|--------|-----------|
| `Home.tsx` | Página principal (one-page com todas as seções) |
| `NotFound.tsx` | Página 404 para rotas não encontradas |

### Estilos (client/src/)

| Arquivo | Descrição |
|---------|-----------|
| `index.css` | Estilos globais, temas, classes customizadas |

---

## 🔧 Arquivos para Editar

Quando você quiser fazer alterações, edite estes arquivos:

### Para Mudar Conteúdo de Texto
- `client/src/components/HeroBanner.tsx` - Título e frase principal
- `client/src/components/Diferenciais.tsx` - Texto sobre a escola
- `client/src/components/Servicos.tsx` - Descrição dos serviços
- `client/src/components/Modalidades.tsx` - Detalhes das modalidades
- `client/src/components/SobreCarol.tsx` - Biografia
- `client/src/components/Depoimentos.tsx` - Depoimentos
- `client/src/components/Contato.tsx` - Informações de contato

### Para Mudar Cores e Estilos
- `client/src/index.css` - Cores primárias, tipografia, espaçamento

### Para Mudar Navegação e Links
- `client/src/components/Header.tsx` - Menu de navegação
- `client/src/components/Footer.tsx` - Links do footer
- Qualquer componente com `href="https://wa.me/..."` para links do WhatsApp

### Para Adicionar Imagens
- Coloque as imagens em `client/public/images/` (crie a pasta se não existir)
- Importe nos componentes: `<img src="/images/nome.jpg" />`

---

## 📦 Dependências Principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| `react` | 19.2.1 | Framework frontend |
| `react-dom` | 19.2.1 | Renderização React no DOM |
| `typescript` | 5.6.3 | Tipagem estática |
| `tailwindcss` | 4.1.14 | Framework CSS utilitário |
| `vite` | 7.1.7 | Bundler e dev server |
| `lucide-react` | 0.453.0 | Ícones SVG |
| `framer-motion` | 12.23.22 | Animações |
| `wouter` | 3.3.5 | Roteamento cliente |
| `shadcn/ui` | - | Componentes UI pré-feitos |

---

## 🚀 Scripts Disponíveis

No arquivo `package.json`, você tem os seguintes scripts:

```bash
pnpm dev        # Inicia servidor de desenvolvimento (porta 5173)
pnpm build      # Compila para produção
pnpm preview    # Visualiza a build de produção
pnpm check      # Verifica erros de TypeScript
pnpm format     # Formata código com Prettier
```

---

## 📝 Convenções de Nomenclatura

### Componentes
- Nomes em **PascalCase**: `Header.tsx`, `HeroBanner.tsx`
- Um componente por arquivo
- Exportação padrão

### Funções e Variáveis
- Nomes em **camelCase**: `handleNavClick`, `isMenuOpen`
- Funções com prefixo `handle` para event handlers

### Arquivos CSS
- Nomes em **lowercase**: `index.css`
- Classes em **kebab-case**: `heading-display`, `cta-button`

### Tipos TypeScript
- Nomes em **PascalCase**: `HeaderProps`, `ModalidadeItem`
- Interfaces para props de componentes

---

## 🔐 Variáveis de Ambiente

Este projeto não requer variáveis de ambiente para funcionar localmente. Se você precisar adicionar no futuro:

1. Crie um arquivo `.env.local` na raiz do projeto
2. Adicione variáveis no formato: `VITE_VARIAVEL=valor`
3. Acesse no código com: `import.meta.env.VITE_VARIAVEL`

---

## 📱 Breakpoints Responsivos

O TailwindCSS usa estes breakpoints:

| Prefixo | Largura | Uso |
|---------|---------|-----|
| (nenhum) | 0px+ | Mobile |
| `sm:` | 640px+ | Tablets pequenos |
| `md:` | 768px+ | Tablets |
| `lg:` | 1024px+ | Desktops |
| `xl:` | 1280px+ | Desktops grandes |

Exemplo: `hidden md:block` = oculto em mobile, visível em tablet+

---

## 🎨 Paleta de Cores

As cores principais estão definidas em `client/src/index.css`:

```css
--primary: oklch(0.6 0.12 25);        /* Rosa Pâle - Botões e destaques */
--accent: oklch(0.65 0.12 25);        /* Ouro Suave - Acentos */
--background: oklch(0.98 0.001 286);  /* Branco Puro - Fundo */
--foreground: oklch(0.25 0.02 260);   /* Azul Profundo - Texto */
```

---

## ✅ Checklist para Começar

- [ ] Instalou Node.js e pnpm
- [ ] Clonou/extraiu o projeto
- [ ] Executou `pnpm install`
- [ ] Executou `pnpm dev`
- [ ] Abriu http://localhost:5173 no navegador
- [ ] Abriu o projeto no VS Code
- [ ] Leu o `GUIA_INSTALACAO.md`

---

## 📞 Próximos Passos

1. **Leia o GUIA_INSTALACAO.md** para instruções detalhadas
2. **Explore os componentes** em `client/src/components/`
3. **Customize o conteúdo** conforme necessário
4. **Adicione suas imagens** em `client/public/images/`
5. **Teste em diferentes dispositivos** (mobile, tablet, desktop)
6. **Faça o build** com `pnpm build` quando pronto para publicar

---

**Desenvolvido com ❤️ para a Carol Pansani Ballet**

Versão: 1.0.0 | Data: Março de 2026

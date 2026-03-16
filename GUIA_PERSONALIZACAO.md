# Guia de Personalização - Carol Pansani Ballet Site

## 🎨 Personalizando Seu Site

Este guia mostra como fazer as principais customizações no site sem precisar de conhecimento avançado de programação.

---

## 1️⃣ Mudar Textos e Conteúdo

### Título Principal (Hero Banner)

**Arquivo:** `client/src/components/HeroBanner.tsx`

Procure por esta seção:

```tsx
<h1 className="heading-display mb-4">
  Carol Pansani Ballet
</h1>
```

Mude `Carol Pansani Ballet` para o texto desejado.

### Frase de Impacto

No mesmo arquivo, procure por:

```tsx
<p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
  Profissionalismo, sensibilidade e acolhimento em forma de arte.
</p>
```

Mude o texto entre as aspas.

### Descrição da Escola (Seção Diferenciais)

**Arquivo:** `client/src/components/Diferenciais.tsx`

Procure por:

```tsx
<p className="text-body">
  Com 09 anos de história e centenas de alunos...
</p>
```

Edite o texto conforme necessário.

### Depoimentos

**Arquivo:** `client/src/components/Depoimentos.tsx`

Procure pela array `depoimentos`:

```tsx
const depoimentos = [
  {
    id: 1,
    nome: 'João Silva',
    relacao: 'Pai do aluno Lucas',
    texto: 'A Carol Pansani Ballet transformou a vida do meu filho...',
    emoji: '👨‍👧',
  },
  // ... mais depoimentos
];
```

Mude os valores de `nome`, `relacao`, `texto` e `emoji` conforme necessário.

---

## 2️⃣ Mudar Cores

### Cores Principais

**Arquivo:** `client/src/index.css`

As cores estão definidas na seção `:root {}`. Procure por:

```css
:root {
  --primary: oklch(0.6 0.12 25);        /* Rosa - Botões */
  --accent: oklch(0.65 0.12 25);        /* Ouro - Acentos */
  /* ... */
}
```

#### Entendendo o Formato OKLCH

O formato OKLCH é: `oklch(luminosidade saturação hue)`

- **Luminosidade:** 0 (preto) a 1 (branco)
- **Saturação:** 0 (sem cor) a 0.4 (muito colorido)
- **Hue:** 0-360 (ângulo da cor no círculo cromático)

#### Exemplos de Cores

| Cor | OKLCH | Uso |
|-----|-------|-----|
| Rosa Pâle | `oklch(0.6 0.12 25)` | Primária (botões) |
| Azul Profundo | `oklch(0.25 0.02 260)` | Títulos |
| Verde | `oklch(0.6 0.15 142)` | Alternativa |
| Roxo | `oklch(0.6 0.15 290)` | Alternativa |
| Laranja | `oklch(0.6 0.15 45)` | Alternativa |

### Mudar Cor de Botões

Para mudar a cor dos botões CTA, edite a variável `--primary`:

```css
:root {
  --primary: oklch(0.6 0.15 142);  /* Mude para verde, por exemplo */
}
```

### Mudar Cor de Títulos

Os títulos usam a classe `.heading-section`. Para mudar sua cor, procure por:

```css
.heading-section {
  color: #2C3E50;  /* Mude este valor */
}
```

Você pode usar:
- Hex: `#FF5733`
- RGB: `rgb(255, 87, 51)`
- OKLCH: `oklch(0.6 0.12 25)`

---

## 3️⃣ Mudar Fontes (Tipografia)

### Adicionar Nova Fonte do Google Fonts

1. Abra `client/index.html`
2. Procure pela seção `<head>` e encontre:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

3. Vá para https://fonts.google.com
4. Selecione as fontes desejadas
5. Copie o link e substitua na linha acima

### Mudar Fonte de Títulos

1. Edite `client/src/index.css`
2. Procure por:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
}
```

3. Mude `'Playfair Display'` para a fonte desejada

### Mudar Fonte de Corpo

1. Procure por:

```css
body {
  font-family: 'Inter', sans-serif;
}
```

2. Mude `'Inter'` para a fonte desejada

---

## 4️⃣ Adicionar Imagens

### Adicionar Foto no Hero Banner

**Arquivo:** `client/src/components/HeroBanner.tsx`

Procure por:

```tsx
<div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden shadow-xl">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <div className="text-6xl mb-4">🩰</div>
      <p className="text-gray-600 font-semibold">Galeria de Fotos</p>
    </div>
  </div>
</div>
```

Substitua por:

```tsx
<div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl">
  <img 
    src="/images/hero-banner.jpg" 
    alt="Carol Pansani Ballet"
    className="w-full h-full object-cover"
  />
</div>
```

### Adicionar Foto na Seção Sobre Carol

**Arquivo:** `client/src/components/SobreCarol.tsx`

Procure pela seção de imagem e substitua de forma similar.

### Adicionar Foto no Carrossel

**Arquivo:** `client/src/components/Carousel.tsx`

Procure pela array `fotos` e mude os emojis para imagens reais:

```tsx
const fotos = [
  { id: 1, title: 'Aulas', emoji: '🎭' },  // Mude emoji para imagem
  // ...
];
```

---

## 5️⃣ Mudar Links e Contatos

### Mudar Número do WhatsApp

Procure por `https://wa.me/5519982640644` em todos os componentes e substitua pelo número desejado.

**Exemplo:** Para o número (11) 98765-4321, use:

```
https://wa.me/5511987654321
```

(Sem parênteses, espaços ou hífens)

### Mudar Redes Sociais

**Arquivo:** `client/src/components/Contato.tsx` e `client/src/components/Footer.tsx`

Procure por:

```tsx
href="https://instagram.com/carolpansaniballet"
```

E substitua pelo seu Instagram.

---

## 6️⃣ Mudar Endereços

**Arquivo:** `client/src/components/Contato.tsx`

Procure pela seção "Nossas Unidades" e mude os endereços:

```tsx
<p className="text-gray-700">
  <span className="font-semibold">Endereço:</span><br/>
  Rua XV de Novembro, nº 337<br/>
  Centro - Pedreira-SP<br/>
  CEP: 13920-009
</p>
```

---

## 7️⃣ Mudar Modalidades de Dança

**Arquivo:** `client/src/components/Modalidades.tsx`

Procure pela array `modalidades`:

```tsx
const modalidades = [
  {
    id: 'ballet',
    title: 'Ballet Clássico',
    emoji: '🩰',
    description: 'O ballet clássico é a base...',
    highlights: [
      'Aulas a partir dos 3 anos...',
      // ...
    ],
    niveis: 'Pré Ballet | Ballet Infantil...',
    locais: ['Pedreira', 'Jaguariúna'],
  },
  // ... mais modalidades
];
```

Edite os campos conforme necessário.

---

## 8️⃣ Mudar Serviços

**Arquivo:** `client/src/components/Servicos.tsx`

Procure pela array `servicos`:

```tsx
const servicos = [
  {
    icon: Music,
    title: 'Aulas',
    description: 'Turmas organizadas por faixa etária...',
  },
  // ... mais serviços
];
```

Para mudar o ícone, importe um diferente de `lucide-react`:

```tsx
import { Music, Sparkles, Footprints, ShoppingBag, Wand2, YourIcon } from 'lucide-react';
```

Veja todos os ícones disponíveis em: https://lucide.dev

---

## 9️⃣ Mudar Espaçamento

### Aumentar Espaço Entre Seções

**Arquivo:** `client/src/index.css`

Procure por `.container` e mude o padding:

```css
.container {
  padding-left: 2rem;   /* Mude este valor */
  padding-right: 2rem;  /* Mude este valor */
}
```

Valores comuns:
- `1rem` = 16px
- `1.5rem` = 24px
- `2rem` = 32px
- `3rem` = 48px

### Aumentar Espaço Dentro de Cards

Procure por `.card-hover` e mude o padding:

```tsx
className="p-6 rounded-xl"  /* Mude 6 para outro valor */
```

Valores: `p-2`, `p-4`, `p-6`, `p-8`, `p-10`, `p-12`

---

## 🔟 Mudar Tema (Light/Dark)

O site está configurado para tema claro por padrão. Para adicionar suporte a tema escuro:

**Arquivo:** `client/src/App.tsx`

Mude:

```tsx
<ThemeProvider
  defaultTheme="light"
>
```

Para:

```tsx
<ThemeProvider
  defaultTheme="light"
  switchable  // Adicione esta linha
>
```

Depois, você pode adicionar um botão para trocar de tema usando o hook `useTheme`.

---

## 1️⃣1️⃣ Adicionar Novas Seções

Para adicionar uma nova seção:

1. Crie um novo arquivo em `client/src/components/MinhaSecao.tsx`
2. Escreva o componente:

```tsx
export default function MinhaSecao() {
  return (
    <section id="minha-secao" className="py-20 bg-white">
      <div className="container">
        <h2 className="heading-section">Meu Título</h2>
        <p className="text-body">Meu conteúdo aqui...</p>
      </div>
    </section>
  );
}
```

3. Importe em `client/src/pages/Home.tsx`:

```tsx
import MinhaSecao from '@/components/MinhaSecao';
```

4. Adicione no JSX:

```tsx
<main className="flex-1">
  <HeroBanner />
  <Diferenciais />
  {/* ... outras seções ... */}
  <MinhaSecao />  {/* Sua nova seção */}
  <Footer />
</main>
```

---

## 1️⃣2️⃣ Dicas de Boas Práticas

✅ **Faça:**
- Use classes do TailwindCSS sempre que possível
- Mantenha componentes pequenos e focados
- Use variáveis CSS para cores
- Teste mudanças no navegador (F5 para atualizar)
- Faça commits no Git regularmente

❌ **Evite:**
- Adicionar CSS inline quando possível
- Copiar e colar código (refatore em componentes)
- Mudar muitas coisas de uma vez
- Deletar arquivos sem fazer backup

---

## 🆘 Problemas Comuns

### Mudanças não aparecem no navegador
- Pressione `Ctrl+Shift+R` para limpar cache
- Ou pressione `F12` → Clique direito no ícone de reload → "Esvaziar cache e fazer recarga forçada"

### Texto fica invisível
- Verifique se a cor do texto contrasta com o fundo
- Use `text-white` para texto claro ou `text-gray-900` para texto escuro

### Imagem não aparece
- Verifique se o caminho está correto
- Imagens devem estar em `client/public/images/`
- Use `/images/nome.jpg` (com barra inicial)

### Botão não funciona
- Verifique se o link está correto
- Teste no navegador (F12 → Console)

---

## 📚 Recursos Úteis

- **Cores OKLCH:** https://oklch.com
- **Ícones Lucide:** https://lucide.dev
- **Fontes Google:** https://fonts.google.com
- **TailwindCSS Classes:** https://tailwindcss.com/docs
- **Emojis:** https://emojipedia.org

---

**Desenvolvido com ❤️ para a Carol Pansani Ballet**

Versão: 1.0.0 | Data: Março de 2026

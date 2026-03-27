# 🎨 Guia de Fontes - Carol Pansani Ballet

## Fontes Disponíveis

O site utiliza as seguintes fontes personalizadas da marca:

### 1. **Black No.7** - Títulos Principais
- Usada em: Hero titles, títulos de seção
- Peso: Regular (padrão)
- Exemplo: "Carol Pansani Ballet", "Uma Escola Diferente de Tudo"

```html
<h1 style={{ fontFamily: "'Black No.7', serif" }}>
  Carol Pansani Ballet
</h1>
```

### 2. **Lexend Deca** - Corpo e Navegação
Fonte versátil com múltiplos pesos para criar hierarquia visual.

#### Pesos Disponíveis:

| Peso | Valor CSS | Classe CSS | Uso |
|------|-----------|-----------|-----|
| **Light** | 300 | `.font-light` | Textos secundários, legendas |
| **Normal** | 400 | `.font-normal` | Corpo de texto padrão |
| **Medium** | 500 | `.font-medium` | Ênfase moderada, labels |
| **Semi-bold** | 600 | `.font-semibold` | Destaques, subtítulos |
| **Bold** | 700 | `.font-bold` | Títulos secundários, CTAs |
| **Black** | 900 | `.font-black` | Títulos de impacto, destaques fortes |

## Exemplos de Uso

### Em React/TypeScript:

```tsx
// Usando classes CSS
<p className="font-light">Texto leve</p>
<p className="font-normal">Texto normal</p>
<p className="font-medium">Texto médio</p>
<p className="font-semibold">Texto semi-bold</p>
<p className="font-bold">Texto bold</p>
<p className="font-black">Texto black</p>

// Usando style inline
<p style={{ fontWeight: 300 }}>Texto leve</p>
<p style={{ fontWeight: 400 }}>Texto normal</p>
<p style={{ fontWeight: 500 }}>Texto médio</p>
<p style={{ fontWeight: 600 }}>Texto semi-bold</p>
<p style={{ fontWeight: 700 }}>Texto bold</p>
<p style={{ fontWeight: 900 }}>Texto black</p>

// Usando variáveis CSS
<p style={{ fontWeight: 'var(--font-light)' }}>Texto leve</p>
<p style={{ fontWeight: 'var(--font-normal)' }}>Texto normal</p>
<p style={{ fontWeight: 'var(--font-medium)' }}>Texto médio</p>
<p style={{ fontWeight: 'var(--font-semibold)' }}>Texto semi-bold</p>
<p style={{ fontWeight: 'var(--font-bold)' }}>Texto bold</p>
<p style={{ fontWeight: 'var(--font-black)' }}>Texto black</p>
```

### Em Tailwind CSS:

```html
<!-- Usando classes Tailwind padrão -->
<p class="font-light">Texto leve</p>
<p class="font-normal">Texto normal</p>
<p class="font-semibold">Texto semi-bold</p>
<p class="font-bold">Texto bold</p>
<p class="font-black">Texto black</p>
```

## Hierarquia Tipográfica Recomendada

```
Hero Title (Black No.7)
    ↓
Section Heading (Black No.7, 2.5rem, font-weight: 700)
    ↓
Subheading (Lexend Deca, font-bold/700)
    ↓
Body Text (Lexend Deca, font-normal/400)
    ↓
Caption (Lexend Deca, font-light/300)
```

## Paleta de Cores + Tipografia

Para manter coerência visual, combine as cores da marca com os pesos de fonte:

| Elemento | Cor | Fonte | Peso |
|----------|-----|-------|------|
| Hero Title | #1f545a (Teal) | Black No.7 | Regular |
| Section Heading | #1f545a (Teal) | Black No.7 | Regular |
| CTA Button | #1f545a (Teal) | Lexend Deca | Bold (700) |
| Body Text | #1f545a (Teal) | Lexend Deca | Normal (400) |
| Secondary Text | #08554c (Verde) | Lexend Deca | Medium (500) |
| Caption | #d7c0b6 (Taupe) | Lexend Deca | Light (300) |

## Dicas de Uso

1. **Não abuse do Black (900)** - Use apenas para títulos de grande impacto
2. **Light (300) é delicado** - Garanta contraste suficiente com o fundo
3. **Medium (500) é versátil** - Perfeito para labels e destaques moderados
4. **Mantenha consistência** - Use os mesmos pesos para elementos similares
5. **Teste em mobile** - Alguns pesos podem parecer diferentes em telas pequenas

## Carregamento de Fontes

As fontes são carregadas do Google Fonts no arquivo `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700&family=Lexend+Deca:wght@300;400;500;600;700;900&family=Black+No.7&display=swap" rel="stylesheet" />
```

Todos os pesos estão disponíveis e otimizados para carregamento rápido.

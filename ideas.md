# Ideias de Design - Carol Pansani Ballet

## Abordagem Selecionada: Elegância Clássica com Modernidade

### Design Movement
**Neoclassicismo Digital** - Inspirado na elegância do ballet clássico, combinado com design moderno limpo e sofisticado.

### Core Principles
1. **Graça e Leveza** - Espaçamento generoso, tipografia refinada, movimento suave
2. **Profissionalismo com Acolhimento** - Paleta sofisticada que transmite confiança e calor humano
3. **Hierarquia Clara** - Cada seção tem propósito definido, com navegação intuitiva
4. **Autenticidade** - Destaque para as pessoas (Carol, professores, alunos) através de fotografia

### Color Philosophy
- **Primária**: Rosa Pâle (#E8D4D0) - Elegância, feminilidade sofisticada, conexão com dança
- **Secundária**: Azul Profundo (#2C3E50) - Confiança, profissionalismo, estabilidade
- **Acentos**: Ouro Suave (#D4AF37) - Luxo contido, celebração, destaque
- **Neutros**: Branco Puro (#FFFFFF) e Cinza Quente (#F5F1EE) - Respiração visual, sofisticação

**Intenção Emocional**: Transmitir que ballet é arte sofisticada, mas acessível; profissional, mas acolhedora.

### Layout Paradigm
- **Hero**: Assimétrico com logo à esquerda e imagem grande à direita (movimento visual)
- **Seções**: Alternância entre full-width e layouts com imagens laterais
- **Ritmo Visual**: Seções com fundo claro intercaladas com seções com fundo rosa pâle
- **Diagonal Dividers**: Transições suaves entre seções com SVG dividers

### Signature Elements
1. **Linhas Decorativas Finas** - Separadores elegantes entre seções
2. **Tipografia Serif para Títulos** - Elegância clássica (Playfair Display)
3. **Ícones Minimalistas** - Representando cada serviço com simplicidade

### Interaction Philosophy
- **Hover Effects Suaves** - Transições de 300ms, sem saltos abruptos
- **Scroll Animations** - Elementos aparecem suavemente ao entrar na viewport
- **Botões Interativos** - CTA buttons com hover que revela ícone de WhatsApp
- **Accordion Suave** - Modalidades com expansão fluida

### Animation
- **Entrada de Seções**: fade-in + slight slide-up ao scroll (300ms)
- **Hover em Cards**: Elevação sutil (shadow increase) + cor de fundo leve
- **Carrossel**: Transição suave entre imagens (500ms)
- **Botões CTA**: Pulse suave no load, hover com cor de fundo

### Typography System
- **Display**: Playfair Display (serif) - Títulos principais, elegância
- **Heading**: Playfair Display (serif) - Subtítulos
- **Body**: Inter (sans-serif) - Corpo de texto, legibilidade
- **Hierarchy**: 
  - H1: 3.5rem, bold, rosa/azul
  - H2: 2.5rem, bold
  - H3: 1.5rem, semibold
  - Body: 1rem, regular

---

## Estrutura do Site (One Page)

1. **Header/Navigation** - Logo + Menu flutuante
2. **Hero Banner** - Título, frase, CTA
3. **Diferenciais** - Mosaico + texto
4. **Serviços** - 5 cards com ícones
5. **Carrossel** - Galeria de fotos
6. **Modalidades** - Accordion com Ballet, Jazz, Contemporâneo, Yoga
7. **Quem é Carol** - Biografia com foto
8. **Depoimentos** - 3 depoimentos com fotos
9. **Contato** - Mapas + redes sociais + CTA
10. **Footer** - Links e informações

---

## Decisões Técnicas

- **Framework**: React 19 + TypeScript
- **Styling**: TailwindCSS 4 + componentes shadcn/ui
- **Carrossel**: Embla Carousel
- **Ícones**: Lucide React
- **Animações**: Framer Motion para scroll animations
- **Tipografia**: Google Fonts (Playfair Display + Inter)
- **Responsividade**: Mobile-first, breakpoints em sm, md, lg, xl

---

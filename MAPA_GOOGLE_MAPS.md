# Guia de Integração - Google Maps Interativo

## 🗺️ Mapa Interativo Implementado

O site agora possui um **mapa interativo do Google Maps** que exibe as duas unidades da Carol Pansani Ballet (Pedreira e Jaguariúna) com funcionalidades completas.

---

## ✨ Funcionalidades

### Mapa Principal
- ✅ Visualização interativa com zoom e pan
- ✅ Marcadores para ambas as unidades
- ✅ Controles de mapa (zoom, fullscreen, street view)
- ✅ Zoom automático ao clicar em uma unidade

### Sidebar de Unidades
- ✅ Seleção de unidade com destaque visual
- ✅ Informações completas de endereço e telefone
- ✅ Links diretos para WhatsApp
- ✅ Atualização automática do mapa ao selecionar

### Informações Detalhadas
- ✅ Endereço completo de cada unidade
- ✅ CEP
- ✅ Telefone com link para WhatsApp
- ✅ Link direto para Google Maps

---

## 📁 Arquivos Relacionados

### Novo Componente
- **`client/src/components/MapaUnidades.tsx`** - Componente principal do mapa com Google Maps integrado

### Componentes Existentes Utilizados
- **`client/src/components/Map.tsx`** - Componente base do Google Maps (já existia no template)

### Atualizações
- **`client/src/pages/Home.tsx`** - Adicionado import e uso do MapaUnidades
- **`client/src/components/Header.tsx`** - Adicionado link "Mapas" na navegação
- **`client/src/components/Contato.tsx`** - Removida seção de mapas (agora em componente separado)

---

## 🎯 Como Funciona

### Coordenadas das Unidades

```typescript
const unidades: UnidadeInfo[] = [
  {
    id: 'pedreira',
    nome: 'Pedreira',
    lat: -22.7419,
    lng: -47.4087,
    // ... outros dados
  },
  {
    id: 'jaguariuna',
    nome: 'Jaguariúna',
    lat: -22.7066,
    lng: -47.1957,
    // ... outros dados
  },
];
```

### Interações Disponíveis

1. **Clique em um card de unidade** → Mapa centraliza naquela localização com zoom 16
2. **Clique em um marcador no mapa** → Sidebar atualiza para mostrar aquela unidade
3. **Zoom e Pan** → Use o mouse ou controles do mapa para explorar
4. **Street View** → Clique no ícone de street view para ver a rua em 360°

---

## 🔧 Personalização

### Mudar Coordenadas

Se os endereços mudarem, edite `client/src/components/MapaUnidades.tsx`:

```typescript
const unidades: UnidadeInfo[] = [
  {
    id: 'pedreira',
    nome: 'Pedreira',
    lat: -22.7419,  // ← Mude aqui
    lng: -47.4087,  // ← Mude aqui
    // ...
  },
];
```

Para encontrar as coordenadas corretas:
1. Abra https://www.google.com/maps
2. Procure pelo endereço
3. Clique com botão direito → Copie as coordenadas

### Mudar Zoom Inicial

```typescript
<MapView
  initialCenter={{ lat: selectedUnidade.lat, lng: selectedUnidade.lng }}
  initialZoom={14}  // ← Mude este valor (10-20 recomendado)
  onMapReady={handleMapReady}
/>
```

### Mudar Altura do Mapa

```typescript
<MapView
  // ...
  className="w-full h-[500px]"  // ← Mude h-[500px] para outro valor
/>
```

### Mudar Cores dos Cards

Os cards de unidade usam as classes Tailwind. Para personalizá-los, edite em `MapaUnidades.tsx`:

```tsx
className={`w-full p-6 rounded-xl transition-all text-left ${
  selectedUnidade.id === unidade.id
    ? 'bg-primary text-white shadow-lg'  // ← Selecionado
    : 'bg-white border-2 border-gray-200 hover:border-primary'  // ← Não selecionado
}`}
```

---

## 🔑 Autenticação do Google Maps

O mapa usa a **Manus Proxy** para autenticação automática do Google Maps. Não é necessário configurar chaves de API manualmente.

### Como Funciona
1. O projeto usa `VITE_FRONTEND_FORGE_API_KEY` (injetado automaticamente)
2. Requisições são proxiadas através de `VITE_FRONTEND_FORGE_API_URL`
3. Todas as features do Google Maps estão disponíveis

### Recursos Disponíveis
- ✅ Markers (Marcadores)
- ✅ Geocoding (Busca por endereço)
- ✅ Places API (Busca de locais)
- ✅ Directions (Rotas)
- ✅ Street View
- ✅ Geometry (Cálculos de distância)
- ✅ Layers (Tráfego, transporte, ciclismo)

---

## 📱 Responsividade

O mapa é totalmente responsivo:

- **Desktop (lg+):** Mapa em 2/3 da largura, sidebar em 1/3
- **Tablet (md):** Mapa em 100% da largura, sidebar abaixo
- **Mobile:** Mapa em 100% da largura, sidebar em cards empilhados

---

## 🚀 Adicionar Mais Unidades

Para adicionar uma terceira unidade:

1. Edite `client/src/components/MapaUnidades.tsx`
2. Adicione à array `unidades`:

```typescript
const unidades: UnidadeInfo[] = [
  // ... unidades existentes
  {
    id: 'nova-unidade',
    nome: 'Nova Unidade',
    endereco: 'Rua X, nº 123',
    rua: 'Rua X',
    numero: '123',
    bairro: 'Bairro',
    cidade: 'Cidade',
    cep: '12345-678',
    lat: -22.1234,
    lng: -47.5678,
    telefone: '(19) 98264-0644',
  },
];
```

O componente renderizará automaticamente o novo card e marcador!

---

## 🐛 Solução de Problemas

### Mapa não aparece
- Verifique se o servidor está rodando (`pnpm dev`)
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique o console (F12) para erros

### Marcadores não aparecem
- Verifique se as coordenadas estão corretas
- Certifique-se de que `lat` e `lng` são números
- Verifique se o mapa foi inicializado corretamente

### Mapa lento
- Reduza o número de marcadores
- Aumente o zoom inicial
- Verifique a conexão de internet

### Sidebar não atualiza
- Verifique se o `id` da unidade está correto
- Certifique-se de que o `handleMapReady` foi chamado
- Verifique se não há erros no console

---

## 📚 Recursos Úteis

- **Google Maps API Docs:** https://developers.google.com/maps/documentation
- **Encontrar Coordenadas:** https://www.google.com/maps
- **Teste de Coordenadas:** https://www.latlong.net

---

## 💡 Dicas

1. **Teste em diferentes dispositivos** para garantir responsividade
2. **Use coordenadas precisas** para melhor experiência do usuário
3. **Adicione instruções de acesso** (estacionamento, entrada, etc.) nos cards
4. **Mantenha os telefones atualizados** para contato direto
5. **Teste links do WhatsApp** para garantir que funcionam

---

**Desenvolvido com ❤️ para a Carol Pansani Ballet**

Versão: 1.1.0 | Data: Março de 2026

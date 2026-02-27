# 🔗 LinkSave

Aplicação de gerenciamento de links desenvolvida com **Vue 3** e **Vite**, construída como projeto próprio de estudo e prática dos conceitos fundamentais do Vue.

---

## 📋 Sobre o Projeto

O LinkSave permite ao usuário salvar, organizar e visualizar links em pastas personalizadas. É possível adicionar links com título, URL, tags e descrição, editá-los, excluí-los e navegá-los por pasta. Os dados são persistidos via **localStorage**, mantendo as informações mesmo após recarregar a página.

---

## 🚀 Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vue Router](https://router.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- JavaScript (ES6+)

---

## 🟢 Conceitos do Vue Estudados

### 🔹 Componentes e Props
A interface é dividida em componentes reutilizáveis (`NavBar`, `Folders`, `Forms`, `MenuElements`, `FramePags`). Os dados são passados entre eles via **props**, como a lista de pastas e de links que descem do componente pai até os filhos.

```vue
<MenuElements
  :dados="state.dados"
  :pastas="state.pastas"
/>
```

### 🔹 Emits — Comunicação Filho → Pai
Para enviar dados ou acionar ações no componente pai, foi utilizado o sistema de **emits**. Cada componente filho declara seus eventos e os dispara quando necessário.

```vue
// filho
const emit = defineEmits(['delete'])
emit('delete', props.id)

// pai
<Folders @delete="deletar" />
```

### 🔹 Comunicação em Cadeia (Pai → Filho → Neto)
Um dos maiores aprendizados foi lidar com a comunicação em múltiplos níveis: o `Home.vue` (avô) precisa receber eventos disparados pelo `MenuElements` (neto), passando pelo `FolderComponent` (pai). Isso exigiu encadear emits e handlers em cada nível da hierarquia.

### 🔹 reactive e ref
Foram utilizados tanto `reactive` (para objetos de estado agrupados) quanto `ref` (para valores individuais reativos), entendendo quando cada um é mais adequado.

```js
const state = reactive({ dados: [], pastas: [] })
const title = ref('')
```

### 🔹 v-model
Utilizado nos campos de formulário para criar **two-way binding** entre o input do usuário e as variáveis reativas, simplificando o controle dos valores digitados.

```vue
<input v-model="title" placeholder="Título" />
```

### 🔹 v-for e v-if
Renderização dinâmica de listas com `v-for` para exibir os cards de links e os itens de pasta, e `v-if` / `v-else` para exibição condicional — como mostrar uma mensagem quando a pasta está vazia.

```vue
<div v-for="dado in dados" :key="dado.id"> ... </div>
<p v-else>Nenhum dado encontrado para esta pasta.</p>
```

### 🔹 Computed
Uso de propriedades **computed** para filtrar os links de acordo com a pasta ativa na rota, evitando lógica desnecessária no template.

```js
const dadosFiltrados = computed(() =>
  dados.value.filter(dado => dado.pasta === pastaTitle.value)
)
```

### 🔹 onMounted e watch
O hook `onMounted` foi usado para carregar os dados do `localStorage` assim que a página é exibida. O `watch` foi utilizado para detectar mudanças de rota e recarregar os dados ao trocar de pasta.

```js
onMounted(() => carregarDados())
watch(() => route.params.title, () => carregarDados())
```

### 🔹 Vue Router
Configuração de rotas para navegar entre a tela principal (`/`) e a tela de cada pasta (`/:title`), utilizando `useRoute` para acessar os parâmetros da URL e `router-link` para a navegação.

```js
const pastaTitle = computed(() => route.params.title)
```

### 🔹 Teleport
O modal de edição de links foi implementado usando `<Teleport to="body">`, garantindo que o elemento seja renderizado fora da hierarquia do componente e sem problemas de z-index ou overflow.

---

## ⚠️ Desafios Enfrentados

- **Comunicação entre múltiplos níveis de componentes:** entender que eventos precisam ser re-emitidos em cada nível da cadeia foi o maior desafio inicial — um evento disparado num neto não chega automaticamente ao avô.
- **Diferença entre `ref` e `reactive`:** saber quando usar cada um e lembrar de acessar o valor via `.value` no `ref` dentro do `<script>`, mas não no `<template>`.
- **Reatividade com arrays:** perceber que reatribuir o array diretamente (`dados.value = dados.value.filter(...)`) funciona com `ref`, mas requer cuidado com `reactive` para não perder a reatividade.
- **`watch` com parâmetros de rota:** o `watch` no `route.params.pastaTitle` não disparava porque o nome do parâmetro na rota era `title` — um erro sutil que exigiu atenção ao nome exato definido no `router.js`.
- **Persistência com localStorage:** garantir que os dados fossem sempre serializados e desserializados corretamente com `JSON.stringify` / `JSON.parse`, e tratar possíveis erros com `try/catch`.

---

## ⚙️ Como Executar

```bash
# Clone o repositório
git clone https://github.com/RaquelNeres/Vite-projects.git

# Acesse a pasta do projeto
cd Vite-projects/LinkSave

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no navegador: `http://localhost:5173`

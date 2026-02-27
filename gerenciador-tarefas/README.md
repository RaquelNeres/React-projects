# ✅ Gerenciador de Tarefas

Aplicação de gerenciamento de tarefas desenvolvida com **React** e **Vite**, construída como projeto prático de estudo baseado no curso de React do [Felipe Rocha](https://www.youtube.com/watch?v=2RWsLmu8yVc&list=PL6YyfjqNRrpfucLuZemff08oDFbDHWqI-&index=59).

---

## 📋 Sobre o Projeto

O Gerenciador de Tarefas permite ao usuário criar tarefas com título e descrição, marcá-las como concluídas, visualizar seus detalhes em uma página separada e excluí-las. Os dados são persistidos via **localStorage**, mantendo as informações mesmo após recarregar a página. O projeto também foi colocado em produção usando a **Vercel**.

---

## 🚀 Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (ícones)
- JavaScript (ES6+)

---

## ⚛️ Conceitos do React Estudados

### 🔹 Componentes e JSX
A interface é dividida em componentes reutilizáveis como `AddTask`, `Tasks`, `Button`, `Input` e `Title`. Cada componente é uma função JavaScript que retorna JSX — uma sintaxe que mistura HTML com JavaScript, permitindo usar variáveis e expressões diretamente no retorno.

```jsx
function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  )
}
```

### 🔹 Props
Os componentes se comunicam através de **props**, passando dados e funções entre componente pai e filho — por exemplo, a lista de tarefas desce do `App` para o `Tasks`, e funções de ação sobem de volta via callbacks.

```jsx
<Tasks
  tasks={tasks}
  onTaskClick={onTaskClick}
  onDeleteTaskClick={onDeleteTaskClick}
/>
```

### 🔹 useState
O hook `useState` é utilizado para gerenciar o estado local da aplicação, como a lista de tarefas, o título e a descrição sendo digitados nos inputs.

```jsx
const [tasks, setTasks] = useState([])
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
```

### 🔹 useEffect
O hook `useEffect` foi utilizado em dois cenários: para salvar as tarefas no `localStorage` sempre que a lista muda, e para buscar dados de uma API externa quando o componente é montado pela primeira vez.

```jsx
// Salva no localStorage sempre que tasks muda
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])

// Executa apenas uma vez ao montar o componente
useEffect(() => {
  async function fetchTasks() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    const data = await response.json()
    setTasks(data)
  }
  fetchTasks()
}, [])
```

### 🔹 Eventos e Renderização Condicional
Manipulação de eventos como `onClick` e `onChange` para capturar interações do usuário. Renderização condicional com o operador `&&` para exibir elementos apenas quando uma condição for verdadeira — como o ícone de check ao lado de tarefas concluídas.

```jsx
{task.isCompleted && <CheckIcon />}
```

### 🔹 Renderização de Listas
Uso do método `.map()` para renderizar dinamicamente cada tarefa, com a prop `key` para identificação única de cada elemento.

### 🔹 Comunicação Filho → Pai (Lift State Up)
Quando um componente filho precisa alterar um estado que está no pai, a solução é criar uma função no pai que altera o estado e passá-la como prop para o filho. Esse padrão foi usado tanto para marcar tarefas como concluídas quanto para deletá-las.

```jsx
// No App (pai)
function onTaskClick(taskId) {
  const newTasks = tasks.map(task =>
    task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
  )
  setTasks(newTasks)
}

// Passado como prop para o filho
<Tasks onTaskClick={onTaskClick} />
```

### 🔹 Componentes Reutilizáveis
Para evitar repetição de código, foram criados componentes genéricos como `Button` e `Input`, que recebem suas propriedades via props e as repassam para os elementos HTML nativos usando spread de props.

```jsx
function Input({ className, ...props }) {
  return <input className="border rounded px-4 py-2 ..." {...props} />
}
```

### 🔹 Rotas com React Router DOM
Configuração de rotas para navegar entre a tela principal e a tela de detalhes de uma tarefa, usando `createBrowserRouter`. Os dados da tarefa são passados para a página de detalhes via **query params** na URL.

```jsx
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/task', element: <TaskPage /> },
])
```

### 🔹 useNavigate e useSearchParams
O hook `useNavigate` foi utilizado para navegar programaticamente entre rotas — inclusive para voltar à página anterior passando `-1`. O hook `useSearchParams` foi usado para ler os query params na página de detalhes.

```jsx
// Navegando para a página de detalhes
const queryParams = new URLSearchParams({ title: task.title, description: task.description })
navigate(`/task?${queryParams.toString()}`)

// Voltando para a página anterior
navigate(-1)

// Lendo os params na página de detalhes
const [searchParams] = useSearchParams()
const title = searchParams.get('title')
```

### 🔹 localStorage
Os dados foram persistidos com `localStorage.setItem` e recuperados com `JSON.parse(localStorage.getItem(...))` no valor inicial do `useState`, garantindo que as tarefas sejam mantidas ao recarregar a página.

---

## ⚠️ Desafios Enfrentados

- **Entender quando criar um state:** Definir que um state é necessário quando a interface precisa ser atualizada em resposta a uma mudança de valor foi um conceito que exigiu prática para internalizar.
- **Lift State Up:** Compreender que um componente filho não pode alterar diretamente o estado do pai — e que a solução é passar uma função como prop — foi um dos pontos que mais exigiu atenção.
- **useEffect com lista de dependências:** Entender a diferença entre passar uma lista com valores (executa quando mudam), uma lista vazia (executa uma vez) ou nada (executa em toda renderização) levou tempo para fixar.
- **Funções no onClick:** Entender que passar uma função diretamente no `onClick` é diferente de chamá-la — `onClick={fn}` vs `onClick={fn()}` — foi um erro sutil que gerou bugs até ser compreendido.
- **Query params e navegação programática:** Aprender a passar dados entre páginas via URL usando `URLSearchParams` e acessá-los com `useSearchParams` foi uma parte nova e importante no contexto de SPAs.
- **Funções assíncronas no useEffect:** Entender por que não é possível tornar diretamente o callback do `useEffect` assíncrono e que a solução é criar uma função async interna e chamá-la dentro do effect.

---

## ⚙️ Como Executar

```bash
# Clone o repositório
git clone https://github.com/RaquelNeres/Vite-projects.git

# Acesse a pasta do projeto
cd Vite-projects/gerenciador-tarefas

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no navegador: `http://localhost:5173`

---

## 🎓 Referência de Estudo

Projeto desenvolvido com base no curso:
[▶️ Curso completo de React — Felipe Rocha](https://www.youtube.com/watch?v=2RWsLmu8yVc&list=PL6YyfjqNRrpfucLuZemff08oDFbDHWqI-&index=59)
# ⚡ Vite Projects

Repositório com projetos desenvolvidos com **Vite**, utilizados como base prática para o estudo de frameworks JavaScript modernos — React e Vue.

Cada projeto foi construído com foco no aprendizado progressivo, explorando os conceitos fundamentais de cada tecnologia através de aplicações reais e funcionais.

---

## 📁 Projetos

### ✅ [Gerenciador de Tarefas](./gerenciador-tarefas)
> **React + Vite + React Router DOM + Tailwind CSS**

Aplicação para criar tarefas com título e descrição, marcá-las como concluídas, visualizar detalhes em uma página separada e excluí-las. Os dados são persistidos via `localStorage` e o projeto foi publicado na **Vercel**.

**Conceitos estudados:** Componentes, JSX, Props, `useState`, `useEffect`, eventos, renderização condicional, `.map()` com `key`, Lift State Up, componentes reutilizáveis com spread de props, React Router, `useNavigate`, `useSearchParams`, query params e `localStorage`.

🔗 [Ver projeto ao vivo](https://gerenciador-tarefas-wheat.vercel.app)

---

### 🔗 [LinkSave](./LinkSave)
> **Vue 3 + Vite + Vue Router + Tailwind CSS**

Aplicação para salvar e organizar links em pastas personalizadas, com suporte a tags, descrição, edição e visualização embutida. Os dados são persistidos via `localStorage`.

**Conceitos estudados:** Componentes, Props, Emits, comunicação em cadeia (pai → filho → neto), `reactive`/`ref`, `v-model`, `v-for`/`v-if`, Computed, `onMounted`/`watch`, Vue Router e Teleport.

🔗 [Ver projeto ao vivo](https://linksave-mauve.vercel.app/)

---

## 🛠️ Tecnologias

| Tecnologia | Projetos |
|---|---|
| [Vite](https://vitejs.dev/) | Todos |
| [React](https://react.dev/) | gerenciador-tarefas |
| [React Router DOM](https://reactrouter.com/) | gerenciador-tarefas |
| [Lucide React](https://lucide.dev/) | gerenciador-tarefas |
| [Vue 3](https://vuejs.org/) | LinkSave |
| [Vue Router](https://router.vuejs.org/) | LinkSave |
| [Tailwind CSS](https://tailwindcss.com/) | Todos |
| JavaScript (ES6+) | Todos |

---

## ⚙️ Como Executar

Cada projeto possui suas próprias dependências. Para rodar qualquer um deles:

```bash
# Clone o repositório
git clone https://github.com/RaquelNeres/Vite-projects.git

# Acesse a pasta do projeto desejado
cd Vite-projects/gerenciador-tarefas
# ou
cd Vite-projects/LinkSave

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no navegador: `http://localhost:5173`

---

## 🎓 Objetivo

Este repositório é um registro de aprendizado prático. Os projetos foram desenvolvidos com o objetivo de fixar conceitos estudados, enfrentar desafios reais de desenvolvimento e evoluir progressivamente de React para Vue.
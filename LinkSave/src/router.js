import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import FolderComponents from './components/FolderComponents.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/:title', component: FolderComponents }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

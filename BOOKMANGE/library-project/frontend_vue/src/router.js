import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // outras rotas podem ser adicionadas aqui
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

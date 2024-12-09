import { createRouter, createWebHistory } from 'vue-router';
import Index from './views/pages/index.vue';
import Cadastro from './views/pages/cadastro.vue';
import EsqueceuSenha from './views/pages/esqueceuasenha.vue';
import Explorar from './views/pages/explorar.vue';
import Lancamentos from './views/pages/lancamentos.vue';
import Login from './views/pages/login.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/esqueceuasenha',
    name: 'EsqueceuSenha',
    component: EsqueceuSenha
  },
  {
    path: '/explorar',
    name: 'Explorar',
    component: Explorar
  },
  {
    path: '/lancamentos',
    name: 'Lancamentos',
    component: Lancamentos
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

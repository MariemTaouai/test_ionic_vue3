import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import TemperaturePage from '../views/TemperaturePage.vue';
import GraphPage from '../views/GraphPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/temperature',
    name: 'Temperature',
    component: TemperaturePage,
  },
  
  {
    path: '/graph',
    name: 'graph',
    component: GraphPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

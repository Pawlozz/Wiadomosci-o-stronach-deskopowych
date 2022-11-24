import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import xaml from '../views/xaml.vue';
import firstCode from '../views/firstCode.vue';
import CsharpBasics from '../views/CsharpBasics.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/codes',
    name: 'firstCode',
    component: firstCode,
  },
  {
    path: '/xaml',
    name: 'xaml',
    component: xaml,
  },
  {
    path: '/csharp',
    name: 'CsharpBasics',
    component: CsharpBasics,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

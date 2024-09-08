import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "MainPage" */ '@/pages/MainPage.vue')
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import(/* webpackChunkName: "RulesPage" */ '@/pages/RulesPage.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "RulesPage" */ '@/pages/FAQPage.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import(/* webpackChunkName: "RulesPage" */ '@/pages/PrivacyPage.vue')
  },
  {
    path: '/security',
    name: 'security',
    component: () => import(/* webpackChunkName: "RulesPage" */ '@/pages/SecurityPage.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import(/* webpackChunkName: "RulesPage" */ '@/pages/FeedbackPage.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "RulesPage" */ '@/pages/ContactsPage.vue')
  },
];

const router = new VueRouter({
  routes
});

export default router;

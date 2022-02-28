import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './Home.vue'
import About from './About.vue'
import Contact from './Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router;
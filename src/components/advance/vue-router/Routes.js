import { createRouter, createWebHashHistory } from 'vue-router';

import Dashboard from './layout/Dashboard.vue'
import Login from './layout/Login.vue'

import Home from './pages/Home.vue'
import Posts from './pages/Posts.vue'
import Post from './pages/Post.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Pinia from '../../pinia/PagePinia.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/post',
        name: 'Posts',
        component: Posts,
        beforeEnter: (to, from) => {
          console.log('Masuk ke post page', to, from)
        }
      },
      {
        path: '/post/:id',
        name: 'Post',
        component: Post
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
      {
        path: '/pinia',
        name: 'Pinia',
        component: Pinia
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

// guard routing
router.beforeEach((to, from, next) => {
  const isAuth = JSON.parse(localStorage.getItem('auth'))

  if (to.name !== 'Login' && !isAuth) next({ name: 'Login' })
  if (to.name == 'Login' && isAuth) next({ name: 'Login' })

  else next()
  console.log('from route : ', from)
})

export default router;
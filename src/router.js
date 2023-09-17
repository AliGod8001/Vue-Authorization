import { createRouter, createWebHistory } from 'vue-router'
import TheHome from './components/TheHome.vue'
import TheLogin from './components/login/TheLogin.vue'
import TheRegister from './components/register/TheRegister.vue'

const routes = [
  { path: '/', name : 'home' , component: TheHome},
  { path: '/login' , name: 'login' , component: TheLogin},
  { path: '/register' , name: 'register' , component: TheRegister}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
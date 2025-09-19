import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/views/HomeView.vue'
import Parking from './components/views/ParkingView.vue'
import About from './components/views/AboutView.vue'
import Contact from './components/views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/parking', name: 'Parking', component: Parking },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

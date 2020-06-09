import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '@/views/SignIn.vue'
import Setting from '@/views/Setting.vue'
import Timer from '@/views/Timer.vue'
import Search from '@/views/Search.vue'
import Ranking from '@/views/Ranking.vue'
import Profile from '@/views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Sign In',
    component: SignIn
  },
  { path: '/setting', name: 'Setting', component: Setting },
  { path: '/timer', name: 'Timer', component: Timer },
  { path: '/search', name: 'Search', component: Search },
  { path: '/ranking', name: 'Ranking', component: Ranking },
  { path: '/:id', name: 'Profile', component: Profile }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

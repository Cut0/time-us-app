import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '@/views/SignIn.vue'
import Setting from '@/views/Setting.vue'
import Config from '@/views/Config.vue'
import Timer from '@/views/Timer.vue'
import Search from '@/views/Search.vue'
import Ranking from '@/views/Ranking.vue'
import Profile from '@/views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'タイマー', component: Timer },
  {
    path: '/sign_in',
    name: 'サインイン',
    component: SignIn
  },
  { path: '/setting', name: 'プロフィール設定', component: Setting },
  { path: '/config', name: 'アカウント設定', component: Config },
  { path: '/search', name: '検索', component: Search },
  { path: '/ranking', name: 'ランキング', component: Ranking },
  { path: '/:id', name: 'プロフィール', component: Profile }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

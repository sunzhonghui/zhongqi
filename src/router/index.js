import Vue from 'vue'
import VueRouter from 'vue-router'
import xiangmu from '../views/xiangmu/index.vue'
import wode from '../views/wode/index.vue'
import zhishi from '../views/zhishi/index.vue'
import shouye from '../views/shouye/index.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/work',
    name: 'work',
    component: xiangmu
  },
  {
    path: '/me',
    name: 'me',
    component: wode
  },
  {
    path: '/article',
    name: 'article',
    component: zhishi
  },
  {
    path: '/',
    name: 'home',
    component: shouye
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

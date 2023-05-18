import Vue from 'vue'
import VueRouter from 'vue-router'
import xiangmu from '../views/xiangmu/index.vue'
import wode from '../views/wode/index.vue'
import zhishi from '../views/zhishi/index.vue'
import shouye from '../views/shouye/index.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    redirect: "/shouye"
  },
  {
    path: '/xiangmu',
    name: 'xiangmu',
    component: xiangmu
  },
  {
    path: '/wode',
    name: 'wode',
    component: wode
  },
  {
    path: '/zhishi',
    name: 'zhishi',
    component: zhishi
  },
  {
    path: '/shouye',
    name: 'shouye',
    component: shouye
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

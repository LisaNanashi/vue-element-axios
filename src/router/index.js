import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/pages/index')
const Detail = () => import('@/pages/detail')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})

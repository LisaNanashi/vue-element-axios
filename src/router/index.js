import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    // {
		// 	path: '/index',
		// 	name: 'index',
		// 	component: resolve => (require(['@/pages/index'], resolve))
		// },
    {
      path: '/',
      name: 'index',
      component: resolve => (require(['@/pages/index'], resolve))
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => (require(['@/pages/detail'], resolve))
    }
  ]
})

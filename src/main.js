// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui';
import App from './App'
import router from './router'
import  { request }  from './_http/api';
// import * as ee from 'dingtalk-jsapi';
Vue.use(Element, { size: 'small', zIndex: 3000 });
// Vue.prototype.$dd = ee;
Vue.prototype.$http = request;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import request from "./api";
import *as echarts from "echarts"
Vue.prototype.axios = request.request
Vue.prototype.$local = request.request2

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

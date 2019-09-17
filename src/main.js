// 引入vue
import Vue from 'vue'
// 引入lib-flexible
import 'lib-flexible/flexible'
// 引入App组件
import App from './App.vue'
// 引入路由器
import router from './router'

new Vue({
  el: "#app",
  components: {
    // 注册App组件
    App
  },
  template: '<App/>',
  // 注册路由器
  router
})
// 引入vue
import Vue from 'vue'
// 引入lib-flexible
import 'lib-flexible/flexible'
// 引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// 声明使用
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
// 引入App组件
import App from './App.vue'
// 引入路由器
import router from './router'
// 引入mock
import './mock/mock.server'

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
import Vue from 'vue'
// 引入路由器
import VueRouter from 'vue-router'
// 引入路由
import routes from './routes'
// 声明使用
Vue.use(VueRouter)
// 暴露
export default new VueRouter({
  mode:'history',// 模式
  routes
})
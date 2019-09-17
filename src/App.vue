<template>
  <div id="app">
    <!-- 使用FooterNav组件 -->
    <FooterNav></FooterNav>
    <router-view></router-view>
  </div>
</template>

<script>
// 引入底部导航栏组件
import FooterNav from './components/FooterNav/FooterNav'
export default {
  // 注册组件
  components:{
    FooterNav
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  background-color #ccc
</style>

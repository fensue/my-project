<template>
  <div class="homepage_container">
    <header>
      <router-link class="logo" to="/homepage"></router-link>
      <div class="header_search">
        <i></i>
        <span>搜索商品,共22673款商品</span>
      </div>
      <div class="login_btn">登录</div>
    </header>
    <div class="tabbar">
      <div class="list">
        <span class="item">推荐</span>
        <span class="item">居家生活</span>
        <span class="item">服饰鞋包</span>
        <span class="item">美食酒水</span>
        <span class="item">个护清洁</span>
        <span class="item">母婴亲子</span>
        <span class="item">运动旅行</span>
        <span class="item">数码家电</span>
        <span class="item">全球特色</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.homepage_container
  header 
    width 100%
    height 56px
    display flex
    align-items center
    background-color #fff
    padding 16px 30px 
    .logo
      width 138px
      height 40px
      background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
      background-repeat no-repeat
      padding-right 20px
    .header_search
      width 442px
      height 56px
      background-color #ededed
      border-radius 10px
      display flex
      align-items center
      margin 0 aotu 
      span 
        font-size 30px
        color #666
        display flex
        margin 0 auto
    .login_btn
      margin-left 16px
      padding 8px 16px
      border 1px solid red
      font-size 20px
      color red
      border-radius 10px
  .tabbar
    background-color #fff
    width 100%
    .list
      display flex
      .item
        width 120px
        height 60px
        font-size 28px
        flex-wrap nowrap
</style>

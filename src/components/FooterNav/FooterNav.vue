<template>
  <div class="footerNavContainer">
    <router-link class="nav_item" to="/homepage">
      <i class="iconfont item_icon icon-shouye-xianxing"></i>
      <span class="item_txt">首页</span>
    </router-link>
    <router-link class="nav_item" to="/category">
      <i class="iconfont item_icon icon-icon_workmore"></i>
      <span class="item_txt">分类</span>
    </router-link>
    <router-link class="nav_item" to="/general">
      <i class="iconfont item_icon icon-changyongtubiao-xianxingdaochu-zhuanqu-"></i>
      <span class="item_txt">识物</span>
    </router-link>
    <router-link class="nav_item" to="/shoppingcart">
      <i class="iconfont item_icon icon-caigou-xianxing"></i>
      <span class="item_txt">购物车</span>
    </router-link>
    <router-link class="nav_item" to="/personal">
      <i class="iconfont item_icon icon-yonghu-xianxing"></i>
      <span class="item_txt">个人</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footerNavContainer
  width 100%
  height 100px
  position fixed
  left 0
  right 0
  bottom 0
  display flex
  background-color #fff
  border-top 1px solid #ccc
  .nav_item
    display flex
    flex 1
    justify-content center
    flex-direction column
    align-items center
    &.router-link-active
      color #b4282d
    .item_icon
      font-size 40px
</style>

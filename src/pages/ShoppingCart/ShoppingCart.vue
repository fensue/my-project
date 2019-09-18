<template>
  <div class="shopcontainer">
    <header>
      <span>购物车</span>
      <span class="lingquan">领券</span>
    </header>
    <ul class="tips">
      <li>30天无忧退货</li>
      <li>48小时极速退款</li>
      <li>满88元免邮费</li>
    </ul>
    <div class="content">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="">
      <div class="login_btn">
        登录
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopcontainer
  width 100%
  height 100%
  background #f4f4f4
  header
    width 100%
    height 88px
    background #fff
    padding 0 30px
    span 
      font-size 36px
      line-height 88px
      &.lingquan
        color red
        position absolute
        top 0
        right 0.4rem
  .tips
    width 100%
    hight 70px
    background #eee
    font-size 0.32rem
    display flex
    li
      display flex
      color #666
      flex 1
      justify-content center
  .content
    position relative
    img 
      position absolute
      left 5rem
      top 500px
      transform translate(-50%,-50%)
    .login_btn
      width 480px
      height 92px
      margin 0 135px
      background #b4282d
      text-align center
      font-size 30px
      color white
      line-height 92px
      position absolute
      top 700px
      
</style>

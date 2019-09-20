<template>
  <div class="homepage_container">
    <div class="homepage_header">
      <header class="header-top">
        <router-link class="logo" to="/homepage"></router-link>
        <div class="header_search">
          <i class="iconfont icon-RectangleCopy"></i>
          <span>搜索商品,共22673款商品</span>
        </div>
        <div class="login_btn">登录</div>
      </header>
      <div class="tabbar">
        <div class="list wrapper" ref="wrapper">
          <ul class="content">
            <li class="item active">推荐</li>
            <li class="item">居家生活</li>
            <li class="item">服饰鞋包</li>
            <li class="item">美食酒水</li>
            <li class="item">个护清洁</li>
            <li class="item">母婴亲子</li>
            <li class="item">运动旅行</li>
            <li class="item">数码家电</li>
            <li class="item">全球特色</li>
          </ul>
        </div>
        <div class="btnrow">
          <i class="iconfont icon-RectangleCopy2" @click="allCategory()"></i>
        </div>
      </div>
    </div>
    <div class="homepage-content">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/swiper/1.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper/2.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper/3.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper/4.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="./images/swiper/7.jpg" alt />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="tips">
        <div class="tips-item">
          <i class="iconfont icon-RectangleCopy7"></i>
          <span>网易自营品牌</span>
        </div>
        <div class="tips-item">
          <i class="iconfont icon-RectangleCopy1"></i>
          <span>30天无忧退货</span>
        </div>
        <div class="tips-item">
          <i class="iconfont icon-RectangleCopy5"></i>
          <span>48小时极速退款</span>
        </div>
      </div>
      <div class="homepage-category">
        <ul class="category-list">
          <li>
            <img src="./images/category/1.png" alt />
            <span>新品首发</span>
          </li>
          <li>
            <img src="./images/category/2.png" alt />
            <span>新品首发</span>
          </li>
          <li>
            <img src="./images/category/3.png" alt />
            <span>新品首发</span>
          </li>
          <li>
            <img src="./images/category/4.png" alt />
            <span>新品首发</span>
          </li>
          <li>
            <img src="./images/category/5.png" alt />
            <span>新品首发</span>
          </li>
          <li>
            <img src="./images/category/3.png" alt />
            <span>新品首发</span>
          </li>
          <li>
            <img src="./images/category/7.png" alt />
            <span>新品首发</span>
          </li>
          <li>
            <img src="./images/category/8.png" alt />
            <span>新品首发</span>
          </li>
          <li>
            <img src="./images/category/9.png" alt />
            <span>新品首发</span>
          </li>
          <li>
            <img src="./images/category/10.gif" alt />
            <span>新品首发</span>
          </li>
        </ul>
      </div>
      <div class="advertising">
        <img src="https://yanxuan.nosdn.127.net/62e85565adc51e236b4943450bdc254b.gif" alt="">
      </div>
      <div class="youhui">
        <div class="youhui_item">
          <div class="youhui_item_title">
            9.9元超值专区
          </div>
          <div class="youhui_item_desc">
            190款商品定价直降
          </div>
          <div class="youhui_item_img">
            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
        <div class="youhui_item">
          <div class="youhui_item_title">
            9.9元超值专区
          </div>
          <div class="youhui_item_desc">
            190款商品定价直降
          </div>
          <div class="youhui_item_img">
            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
        <div class="youhui_item">
          <div class="youhui_item_title">
            9.9元超值专区
          </div>
          <div class="youhui_item_desc">
            190款商品定价直降
          </div>
          <div class="youhui_item_img">
            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
        <div class="youhui_item">
          <div class="youhui_item_title">
            9.9元超值专区
          </div>
          <div class="youhui_item_desc">
            190款商品定价直降
          </div>
          <div class="youhui_item_img">
            <img src="https://yanxuan-item.nosdn.127.net/b2065eab67acc5923a8ec71167a35f6a.png?imageView&thumbnail=150x150&quality=75" alt="">
            <img src="https://yanxuan-item.nosdn.127.net/569ab2c87df93c56de39b8c890463242.png?imageView&thumbnail=150x150&quality=75" alt="">
          </div>
        </div>
      </div>
      <footer>
        <div class="btn">
          <div class="btn_item left">
            下载App
          </div>
          <div class="btn_item">
            电脑版
          </div>
        </div>
        <p class="copyright">
          <center>网易公司版权所有 © 1997-2019</center>
          <br>
          <center>食品经营许可证：JY13301080111719</center>
          </p>
      </footer>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
// require styles swiper样式
import "swiper/dist/css/swiper.css";
import Bscroll from "better-scroll";
export default {
  name: "HomePage",
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      /* eslint-disable no-new */
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
      this.scroll = new Bscroll(this.$refs.wrapper, {
        scrollX: true,
        click:true
      });
    });
  },
  methods: {
    allCategory() {}
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.homepage_container
  width 100%
  min-height 100%
  .homepage_header
    position fixed
    top 0
    left 0
    z-index 99
    .header-top
      width 690px
      height 56px
      display flex
      align-items center
      background-color #fff
      padding 16px 30px
      // box-sizing border-box
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
        i
          font-size 36px
          margin-left 36px
        span
          font-size 30px
          color #666
          display flex
          margin-left 0
      .login_btn
        margin-left 16px
        padding 8px 16px
        border 1px solid red
        font-size 20px
        color red
        border-radius 10px
    .tabbar
      width 750px
      height 60px
      background-color #fff
      position relative
      .list
        width 650px
        display flex
        overflow hidden
        ul
          display flex
          .item
            width 140px
            height 60px
            font-size 30px
            line-height 60px
            color #333
            text-align center
            padding 0 16px
            &:nthchild(1)
              width 80px
            &.active
              color #b4282d
              &:after
                content ''
                display block
                width 80px
                height 5px
                background #b4282d
                margin-top -5px
                margin-left 28px
                border-radius 5px
      .btnrow
        width 100px
        height 60px
        background #fff
        position absolute
        right 0
        bottom 0
        i
          font-size 70px
          line-height 60px
          float right
          margin-right 30px
  .homepage-content
    margin-top 148px
    margin-bottom 98px
    .swiper-container
      width 100%
      height 370px
      position relative
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
          img
            width 100%
            height 100%
      .swiper-pagination
        position absolute
        left 0
        right 0
        margin 0 auto
        bottom 10px
        span
          width 30px
          height 5px
          background-color white
          border-radius 3px
          &.swiper-pagination-bullet-active
            background-color white
    .tips
      width 750px
      height 72px
      padding 0 30px
      display flex
      align-items center
      box-sizing border-box
      .tips-item
        display flex
        flex 1
        i
          font-size 30px
          color #BE4448
          margin-right 10px
    .homepage-category
      width 100%
      height 341px
      padding 0 0 32px 0
      .category-list
        display flex
        flex-wrap wrap
        li
          width 110px
          height 156px
          margin 10px 20px 9px
          text-align center
          img
            width 110px
            height 110px
            margin-bottom 10px
          span
            font-size 24px
            color #333
    .advertising
      width 100%
      height 126px
      img 
        width 100%
        height 100%
    .youhui
      box-sizing border-box
      width 100%
      height 576px
      margin 0 0 20px
      padding 10px 30px 30px 26px
      display flex
      flex-wrap wrap
      .youhui_item
        width 323px
        height 244px
        margin 4px 0 0 4px
        padding 20px 0 0 20px
        background #f5f5f5
        .youhui_item_title
          font-size 32px
          padding-left 10px
        .youhui_item_desc
          font-size 24px  
          padding-left 10px
    footer 
      width 710px
      height 162px
      padding 54px 20px 28px
      background rgba(51,51,51,.6)
      .btn
        width 100%
        height 62px
        margin-bottom 36px
        display flex
        justify-content center
        .btn_item
          width 169px
          height 60px
          line-height 60px
          text-align center
          color white
          border 1px solid white
          &.left
            margin-right 60px
        .copyright
          display block
          color #333
          text-align center
          align-items center
          span 
            font-size 24px
</style>

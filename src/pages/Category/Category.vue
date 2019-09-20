<template>
  <div class="categorypage">
    <div class="container">
      <header>
        <div class="search">
          <i class="iconfont icon-RectangleCopy"></i>
          <span>搜索商品,共22673款商品</span>
        </div>
      </header>
      <div class="leftwrap" ref="leftwrap">
        <ul class="menulist content">
          <li class="item active">推荐专区</li>
          <li class="item">换季专区</li>
          <li class="item">爆品专区</li>
          <li class="item">新品专区</li>
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
      <div class="rightwrap">
        <div class="topswiper">
          <CategorySwiper></CategorySwiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
// import Swiper from "swiper";
// // require styles swiper样式
// import "swiper/dist/css/swiper.css";
import CategorySwiper from '../../components/CategorySwiper/CategorySwiper';
export default {
  name:'Category',
  components:{
    CategorySwiper
  },
  mounted(){
    this.$nextTick(()=>{
      if (!this.scrollLeft) {
        this.scrollLeft = new BScroll(this.$refs.leftwrap,{
          scrollY: true,
          click: true
        })
      }else{
         this.scrollLeft.refresh();
      }
    })
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.categorypage
  width 100%
  position relative
  clear()
  header 
    width 100%
    height 88px
    border-bottom 1px solid #ccc
    box-sizing border-box
    padding 0 30px  
    display flex
    align-items center
    .search
      width 100%
      height 56px
      background #ededed
      border-radius 10px
      line-height 56px
      text-align center
      font-size 28px
      .iconfont 
        font-size 28px
  .leftwrap
    width 162px
    height 1039px
    overflow hidden
    position absolute
    top 128px
    left 0
    padding 40px 0
    box-sizing border-box
    .menulist
      // margin-top 40px
      .item
        width 162px
        height 50px
        font-size 28px
        line-height 50px
        text-align center
        margin-top 40px
        position relative
        // &:nth-child(1)
        //   margin-top 0
        &.active
          color #b42d48
          &::before
            content ''
            display block
            background #b42d48
            width 5px
            height 50px
            position absolute
            left 0 
            top 0
  .rightwrap
    width 528px
    height 1097px
    position absolute
    top 88px
    right 0
    padding 30px 30px 21px 30px
    .top-swiper
      width 100%
      height 100%
      

</style>

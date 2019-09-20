<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper class="swiperwrap" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="https://yanxuan.nosdn.127.net/40ee9e553e6a2c228b0544bff65a618d.jpg?imageView&quality=75&thumbnail=0x196" alt=""></swiper-slide>
    <swiper-slide><img src="https://yanxuan.nosdn.127.net/f7f216f5d01874f8f768ccfd78a7112e.jpg?imageView&quality=75&thumbnail=0x196" alt=""></swiper-slide>
    <swiper-slide><img src="https://yanxuan.nosdn.127.net/c7de7e8850dc05df6943a1a39dce2558.jpg?imageView&thumbnail=0x196" alt=""></swiper-slide>
    <swiper-slide><img src="https://yanxuan.nosdn.127.net/fd9bb8dd511541082fac86e84750b45c.jpg?imageView&thumbnail=0x196" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: "carrousel",
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // width: 528,
        // height: 192,
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

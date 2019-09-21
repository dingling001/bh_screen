<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="imgbox"><img src="../assets/sf1.jpg" alt=""></swiper-slide>
    <swiper-slide class="imgbox"><img src="../assets/sf2.jpg" alt=""></swiper-slide>
    <swiper-slide class="imgbox"><img src="../assets/sf3.jpg" alt=""></swiper-slide>
    <swiper-slide class="imgbox"><img src="../assets/sf4.jpg" alt=""></swiper-slide>
    <swiper-slide class="imgbox"><img src="../assets/diqiu.jpg" alt=""></swiper-slide>
    <swiper-slide class="imgbox"><img src="../assets/fukebai.jpg" alt=""></swiper-slide>
    <swiper-slide class="imgbox"><img src="../assets/jixie.jpg" alt=""></swiper-slide>
    <swiper-slide class="imgbox"><img src="../assets/qipao.jpg" alt=""></swiper-slide>

  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          autoplay: {
            delay: 10000,
            stopOnLastSlide: true,
            disableOnInteraction: true,
          },
          observer: true,
          observeParents: true,
        }
      }
    },
    name: "Imgview"
  }
</script>

<style lang="less" scoped>
  .imgbox {
    img {
      width: 100%;
    }
  }
</style>

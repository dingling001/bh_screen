<template>
  <div id="app" class="animated fadeIn">
    <div id="header" :class="['animated fast',headershow?'slideInDown ':'slideOutUp']">
      <div class="wether head_left ">
            <span>
                   <span class="l1" :style="{color:wlist[windex]}">
                       <span class="iconfont iconwendu" :style="{color:wlist[windex]}"></span><span>{{tmp}} ℃</span>
                     </span>
            <span
              :class="['l2',qlty=='良'?'color1':'',qlty=='轻度污染'?'color2':'',qlty=='中度污染'?'color3':'',qlty=='重度污染'?'color4':'',qlty=='严重污染'?'color5':'' ]">
                <span :class="['iconfont iconshuye' ]"></span>
                <span>{{qlty}}</span>
            </span>
            <span class="l3">
              <span class="cloudy">
                <img :src="cond_src" alt="">
            </span>
            <span>{{cond_txt}}</span>
            </span>
            </span>
      </div>
      <div class="title">滨海科技馆数据展示平台</div>
      <div class="time">
        <div class="time-con"><span class="iconfont iconshijian"></span>{{nowdate}}</div>
      </div>
    </div>
    <!--<router-view/>-->
    <div class="swiper-container swiperbox" :class="[swiperindex>2?'top0':'top54']"
         :style="{height:swiperindex>2?'768px':'714px'}">
      <div class="swiper-wrapper">
        <div class="swiper-slide imgbox">
          <Home :sindex="swiperindex" v-show="swiperindex==0"></Home>
        </div>
        <div class="swiper-slide imgbox">
          <Second :sindex="swiperindex" v-show="swiperindex==1"></Second>
        </div>
        <div class="swiper-slide imgbox">
          <Thrid :sindex="swiperindex" v-show="swiperindex==2"></Thrid>
        </div>
        <!--<div class="swiper-slide imgbox">-->
        <!--<Imgview></Imgview>-->
        <!--</div>-->
        <div class="swiper-slide imgbox"><img src="./assets/sf1.jpg" alt=""></div>
        <div class="swiper-slide imgbox"><img src="./assets/sf2.jpg" alt=""></div>
        <div class="swiper-slide imgbox"><img src="./assets/sf3.jpg" alt=""></div>
        <div class="swiper-slide imgbox"><img src="./assets/sf4.jpg" alt=""></div>
        <div class="swiper-slide imgbox"><img src="./assets/diqiu.jpg" alt=""></div>
        <div class="swiper-slide imgbox"><img src="./assets/fukebai.jpg" alt=""></div>
        <div class="swiper-slide imgbox"><img src="./assets/jixie.jpg" alt=""></div>
        <div class="swiper-slide imgbox"><img src="./assets/qipao.jpg" alt=""></div>
      </div>
    </div>
  </div>
</template>
<script>
  import Imgview from '@/views/Imgview';
  import Home from '@/views/Home';
  import Second from '@/views/Second';
  import Thrid from '@/views/Thrid';
  import Swiper from 'swiper';

  export default {
    name: 'app',
    data() {
      var vm = this;
      return {
        nowdate: '',
        tmp: 0,//温度
        qlty: '优',//空气质量
        cond_txt: '晴',
        cond_code: '100',
        newdate: '获取时间中...',
        windex: 4,
        wlist: [
          '#49008D',
          '#0C43C4',
          '#0294FB',
          '#5EB7FB',
          '#AAF3F7',
          '#FFFEBD',
          '#FFDB63',
          '#FFAA01',
          '#FE6400',
          '#E40001',
          '#A00010',
          '#640000',
        ],
        cond_src: '',
        headershow: true,
        swiperindex: 0,
        initialSlide: 0,
        comp: '',
        mySwiper: null
      }
    },
    components: {
      Imgview,
      Home,
      Second,
      Thrid,
    },
    created() {
      var vm = this;
      // this.headershow=this.$route.meta.headers
      var time = setInterval(function () {
        var date = new Date();
        var options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };
        vm.nowdate = date.toLocaleDateString('chinese', options);
      }, 1000);
      this.get_setWeather();
    },
    watch: {
      'swiperindex'(val) {
        var vm = this;
        // if (val === 10) {
        //   setTimeout(() => {
        //     vm.mySwiper.slideTo(0, 2500, false)
        //   }, 30000)
        // }
        if (val === 10) {
          var s = setTimeout(() => {
            vm.swiperindex = 0;
            vm.mySwiper.slideTo(0, 2500, false)
          }, 30000)
        }
      }
    },
    mounted() {
      var vm = this;
      vm.mySwiper = new Swiper('.swiper-container', {
        autoplay: 30000,
        // loop: true,
        effect: 'fade',
        speed: 1000,
        autoplayDisableOnInteraction: false,
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        lazyLoadingInPrevNextAmount: 2,
        preloadImages: true,
        fadeEffect: {
          crossFade: true,
        },
        onSlideChangeStart: swiper => {
          // console.log(swiper.activeIndex)
          // console.log(swiper.realIndex);
          vm.swiperindex = swiper.realIndex;
          vm.headershow = swiper.realIndex <= 2;
        },
        onTransitionEnd: function (swiper) {
          swiper.update();
          vm.swiperindex = swiper.realIndex;
          if (swiper.isEnd) {
            vm.mySwiper.startAutoplay();
            // let dom = swiper.slides[0];
            // swiper.removeSlide(0);
            // swiper.appendSlide(dom);
            // swiper.activeIndex = 0;
            // swiper.update();
            // console.log(swiper.isEnd)
            // // swiper.next();
            // setTimeout(() => {
            //   swiper.slideTo(0, 3000, false)
            // }, 30000);
            // window.location.reload();
          }
        },
        onSlideChangeEnd: swiper => {
          vm.headershow = swiper.realIndex <= 2;
          vm.swiperindex = swiper.realIndex;
          // if (swiper.isEnd) {
          //   // let dom = swiper.slides[0];
          //   // swiper.removeSlide(0);
          //   // swiper.appendSlide(dom);
          //   // swiper.activeIndex = 0;
          //   // swiper.update();
          //   // console.log(swiper.isEnd)
          //   // // swiper.next();
          //   setTimeout(() => {
          //     swiper.slideTo(0, 1000, false)
          //   }, 200);
          //   // window.location.reload();
          // }
        },
        observer: true,
        observeParents: true,
      })
    },
    methods: {
      // 设置天气
      get_setWeather: function () {
        var vm = this;
        this.$api.SetWeather().then(rlt => {
          if (rlt.HeWeather6[0].status == 'ok') {
            var now = rlt.HeWeather6[0].now;
            vm.tmp = now.tmp;
            var tmp = parseInt(vm.tmp);
            if (tmp <= -25) {
              vm.windex = 0;
            } else if (tmp > -25 && tmp <= -15) {
              vm.windex = 1;
            } else if (tmp > -15 && tmp <= -10) {
              vm.windex = 2;
            } else if (tmp > -10 && tmp <= -5) {
              vm.windex = 3;
            } else if (tmp > -5 && tmp <= 0) {
              vm.windex = 4;
            } else if (tmp > 6 && tmp <= 15) {
              vm.windex = 5;
            } else if (tmp > 15 && tmp <= 20) {
              vm.windex = 6;
            } else if (tmp > 20 && tmp <= 25) {
              vm.windex = 7;
            } else if (tmp > 25 && tmp <= 30) {
              vm.windex = 8;
            } else if (tmp > 30 && tmp <= 40) {
              vm.windex = 9;
            } else if (tmp > 40) {
              vm.windex = 10;
            }
            vm.cond_code = now.cond_code;
            vm.cond_src = require('./assets/cloudy/' + now.cond_code + '.png');
            vm.cond_txt = now.cond_txt;
          }
        })
      },

    }
  }
</script>
<style lang="less">
  /** @format */

  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 768px;
    overflow: hidden;
    background-color: #000;
    font-size: 16px;
    width: 1366PX;
    margin: 0 auto;

    .swiperbox {
      width: 1366px;
      height: 714px;
      position: fixed;
      left: 0;
      right: 0;
      /*bottom: 0;*/
      top: 54px;
      margin: auto;
      transition: ease-in-out .3s;
    }

    .top54 {
      top: 54px;
    }

    .top0 {
      top: 0;
    }
  }

  #header {
    position: relative;
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.84);
    color: #fff;
    text-align: center;
    z-index: 9999;

    > .wether {
      font-size: 16px;
      flex: 1;
    }

    .title {
      margin: 0 auto;
      font-size: 22px;
      font-weight: bold;
      flex: 1;
    }

    .time {
      flex: 1;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;

      .time-con {
        display: flex;
        align-items: center;

        .iconfont {
          font-size: 23px;
          color: #56B1E4;
          margin-right: 10px;
          font-weight: normal;
        }
      }
    }
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .head_left span {
    font-size: 16px;
    font-weight: bold;
    display: inline-flex;
    align-items: center;

    .iconwendu {
      color: #FDB201;
      font-size: 20px;
    }

    .iconshuye {
      color: #0FDA00;
      font-size: 20px;
      font-weight: normal;
      transition: .3s all;
    }

    .color1 {
      span {
        color: #FFFF00;
      }
    }

    .color2 {
      span {
        color: #FF7E00;

      }
    }

    .color3 span {
      color: #FE0000;
    }

    .color4 span {
      color: #97014B;
    }

    .color5 span {
      color: #7D0022;
    }

    .l1 {
      margin-right: 36px;
      font-size: 16px;
    }

    .wcolor0 span {
      color: #0FDA00;
    }

    .l2 {
      color: #3ACE74;
      font-size: 16px;
      margin-right: 36px;
      height: 25px;
    }

    .l3 {
      color: #AAE9FF;
      display: inline-flex;
      align-items: center;
      height: 25px;

      .cloudy {
        width: 25px;
        height: 25px;
        position: relative;
        margin-right: .05rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          /*position: absolute;*/
          /*left: 0;*/
          /*right: 0;*/
          /*margin: 0 auto;*/
          /*top: .1rem;*/
        }
      }
    }
  }

</style>

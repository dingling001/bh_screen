<template>
  <div class="hot-map">
    <!--    <div class="center">-->
    <!--      <p>当前馆内观众热力图</p>-->
    <!--            <div class="heat-type" ></div>-->
    <div class="swiper-container floor">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="heattitle">
            <div class="r1">
              <div class="c1">1F</div>
              <div class="c2 status1">正常</div>
            </div>
          </div>
          <div class="heatchart bg1" id="chart4_1"></div>
        </div>
        <div class="swiper-slide">
          <div class="heattitle">
            <div class="r1">
              <div class="c1">2F</div>
              <div class="c2 status1">正常</div>
            </div>
          </div>
          <div class="heatchart bg2" id="chart4_2">
          </div>
        </div>
        <div class="swiper-slide">
          <div class="heattitle">
            <div class="r1">
              <div class="c1">3F</div>
              <div class="c2 status1">正常</div>
            </div>
          </div>
          <div class="heatchart bg3" id="chart4_3"></div>
        </div>
        <div class="swiper-slide">
          <div class="heattitle">
            <div class="r1">
              <div class="c1">4F</div>
              <div class="c2 status1">正常</div>
            </div>
          </div>
          <div class="heatchart bg4" id="chart4_4"></div>
        </div>
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
  import Heatmap from 'heatmap.js';
  import Swiper from 'swiper';

  export default {
    data() {
      return {
        heatmap: [
          {map: null},
          {map: null},
          {map: null},
          {map: null},
        ],
        mySwiper: null,
        rData: [],//随机的两组值
        hotdata_1f: [],
        max_1f: 0,
        hotdata_2f: [],
        max_2f: 0,
        hotdata_3f: [],
        max_3f: 0,
        hotdata_4f: [],
        max_4f: 0,
        mapindex: 0,
        staylistdata: []
      };
    },
    props: {
      'staylist': {
        type: Array,
        default: []
      }
    },
    watch: {
      'mapindex'(val) {
        var vm = this;
        if (val === 3) {
          setTimeout(() => {
            vm.mySwiper.slideTo(0, 2000, false)
          }, 10000)
        }
      },
      'staylist'(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          if (oldValue[i] != newValue[i]) {
            this.mySwiper.update();
            this.mySwiper.slideTo(0, 2000, false);
            this.staylistdata = newValue;
          }
        }
      },
    },
    mounted() {
      var vm = this;
      this.mySwiper = new Swiper('.floor', {
        autoplay: 10000,
        direction: 'vertical',
        // loop: true,
        speed: 2000,
        // effect: 'coverflow',
        grabCursor: true,
        // centeredSlides: true,
        slidesPerView: 2.5,
        // coverflowEffect: {
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 200,
        //   modifier: 1,
        //   slideShadows: false,
        // },
        observer: true,
        observeParents: true,
        onSlideChangeStart: swiper => {
          vm.mapindex = swiper.realIndex
        },
      });
      this.staylistdata = this.staylist;
      this.initData(this.staylistdata);
    },
    methods: {
      // 初始化地图数据
      initData(staylist) {
        this.hotdata_1f = [];
        this.max_1f = 0;
        this.hotdata_2f = [];
        this.max_2f = 0;
        this.hotdata_3f = [];
        this.max_3f = 0;
        this.hotdata_4f = [];
        this.max_4f = 0;
        staylist.forEach((item, index) => {
          this.randomData(item);
          if (item.title == '4D科普影院') {
            this.hotdata_1f.push({
                name: '4D科普影院',
                x: 140, // x coordinate of the datapoint, a number
                y: 150, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '4D科普影院',
                x: 120, // x coordinate of the datapoint, a number
                y: 150, // y coordinate of the datapoint, a number
                value: this.rData[1], // the value at datapoint(x, y)
              })
          } else if (item.title == "儿童乐园") {
            this.hotdata_1f.push({
                name: '儿童乐园',
                x: 145, // x coordinate of the datapoint, a number
                y: 110, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '儿童乐园',
                x: 120, // x coordinate of the datapoint, a number
                y: 110, // y coordinate of the datapoint, a number
                value: this.rData[1], // the value at datapoint(x, y)
              })
          } else if (item.title == "科技的脚步") {
            this.hotdata_1f.push({
                name: '科技的脚步',
                x: 260, // x coordinate of the datapoint, a number
                y: 100, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '科技的脚步',
                x: 230, // x coordinate of the datapoint, a number
                y: 105, // y coordinate of the datapoint, a number
                value: this.rData[1], // the value at datapoint(x, y)
              },)
          } else if (item.title == "企业成果") {
            this.hotdata_1f.push({
                name: '企业成果',
                x: 300, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '企业成果',
                x: 280, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: this.rData[1], // the value at datapoint(x, y)
              },)
          } else if (item.title == '临时展区') {
            this.hotdata_1f.push({
                name: '临时展区',
                x: 380, // x coordinate of the datapoint, a number
                y: 40, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '临时展区',
                x: 380, // x coordinate of the datapoint, a number
                y: 60, // y coordinate of the datapoint, a number
                value: this.rData[1], // the value at datapoint(x, y)
              })
          } else if (item.title == '数理世界＆光影天地') {
            this.hotdata_2f.push(
              {
                name: '数理世界',
                x: 160, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '光影天地',
                x: 180, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: this.rData[1], // the value at datapoint(x, y)
              })
          } else if (item.title == '探秘剧场＆力量空间') {
            this.hotdata_2f.push(
              {
                name: '探秘剧场',
                x: 350, // x coordinate of the datapoint, a number
                y: 50, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '力量空间',
                x: 400, // x coordinate of the datapoint, a number
                y: 40, // y coordinate of the datapoint, a number
                value: this.rData[1], // the value at datapoint(x, y)
              })
          } else if (item.title == '生命健康') {
            this.hotdata_3f.push(
              {
                name: '生命健康',
                x: 110, // x coordinate of the datapoint, a number
                y: 110, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '生命健康',
                x: 110, // x coordinate of the datapoint, a number
                y: 130, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
            )
          } else if (item.title == '浩瀚宇宙＆地球家园') {
            this.hotdata_3f.push(
              {
                name: '浩瀚宇宙',
                x: 360, // x coordinate of the datapoint, a number
                y: 50, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '地球家园',
                x: 400, // x coordinate of the datapoint, a number
                y: 70, // y coordinate of the datapoint, a number
                value: this.rData[1], // the value at datapoint(x, y)
              })
          } else if (item.title == '智能空间') {
            this.hotdata_4f.push(
              {
                name: '智能空间',
                x: 120, // x coordinate of the datapoint, a number
                y: 120, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '智能空间',
                x: 130, // x coordinate of the datapoint, a number
                y: 150, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
            )
          } else if (item.title == '信息天地＆动力车间＆材料工坊') {
            this.hotdata_4f.push(
              {
                name: '信息天地',
                x: 250, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: (this.rData[0] + this.rData[1]) / 3, // the value at datapoint(x, y)
              },
              {
                name: '材料工坊',
                x: 350, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: this.rData[0], // the value at datapoint(x, y)
              },
              {
                name: '动力车间',
                x: 380, // x coordinate of the datapoint, a number
                y: 20, // y coordinate of the datapoint, a number
                value: this.rData[1], // the value at datapoint(x, y)
              }
            )
          }
          // console.log(this.rData);
        });
        this.max_1f = Math.max(...this.hotdata_1f.map(o => o.value));
        this.max_2f = Math.max(...this.hotdata_2f.map(o => o.value));
        this.max_3f = Math.max(...this.hotdata_3f.map(o => o.value));
        this.max_4f = Math.max(...this.hotdata_4f.map(o => o.value));
        this.initHotMap()
      },
      // 渲染热力图
      initHotMap() {
        const vm = this;
        // let maxvalue = Math.max(...dataarr.map(o => o.value));
        const nuConfig = {
          blur: .9,
          radius: 10,
          maxOpacity: .7,
          minOpacity: 0,
          gradient: {
            '.5': '#8CF13A',
            '.8': '#FF9F19',
            '.95': '#F7563E',
          },
        };
        const data = [
          {
            max: this.max_1f > 0 ? this.max_1f : 100,
            min: 1,
            data: this.hotdata_1f,
          },
          {
            max: this.max_2f > 0 ? this.max_2f : 100,
            min: 1,
            data: this.hotdata_2f,
          },
          {
            max: this.max_3f > 0 ? this.max_3f : 100,
            min: 1,
            data: this.hotdata_3f,
          },
          {
            max: this.max_4f > 0 ? this.max_4f : 100,
            min: 1,
            data: this.hotdata_4f,
          },
        ];
        // 热力图
        vm.heatmap.forEach((a, i) => {
          const heatmapDom = document.querySelector(`#chart4_${i + 1}`);
          // console.log(heatmapDom);
          const scale = heatmapDom.clientWidth / 1400;
          a.map = Heatmap.create(
            {
              container: heatmapDom,
              radius: 80 * scale,
            },
          ).configure(nuConfig).setData(data[i]);
        });
      },
      // 随机生成数据
      randomData(data) {
        var d = data.stay_num;
        var r = Math.floor(Math.random() * 6 + 1) / 10;
        this.rData = [d * r, d - d * r];
      }
    },
  };
</script>

<style lang="less" scoped>
  /** @format */
  .hot-map {
    /*width: 100%;*/
    /*height: 1536px;*/
    /*height: 768px;*/

    /*.center {*/
    /*  position: relative;*/
    /*  width: 1366px;*/
    /*  margin: 0 auto;*/
    /*  !*height: 1536px;*!*/
    /*  height: 768px;*/
    /*  !*padding-top: 112px;*!*/
    /*  !*padding-left: 120px;*!*/
    /*  !*padding-right: 120px;*!*/

    /*  > p {*/
    /*    position: absolute;*/
    /*    top: 170px;*/
    /*    left: 120px;*/
    /*    font-size: 30px;*/
    /*    font-weight: bold;*/
    /*    color: #fff;*/
    /*    text-align: left;*/
    /*  }*/
    /*}*/

    .heat-type {
      width: 200px;
      height: 350px;
      position: absolute;
      background-size: 100% 100%;
      margin-top: 1rem;
      /*background-image: url(../assets/relitu@2x.png);*/
      background-repeat: no-repeat;
    }
  }

  .floor {
    height: 714px;
    width: 900px;

    .swiper_box {
      width: 100%;
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /deep/ .swiper-slide {
      /*height: 300px!important;*/
      display: flex;
      align-items: center;
      justify-content: center;

      .swiper-slide-shadow-top {
        display: none;
      }

      .swiper-slide-shadow-bottom {
        display: none;
      }
    }

    /deep/ .swiper-slide {
      /*&.swiper-slide-prev {*/
      /*  .heattitle {*/
      /*    transform: translate3d(0px, 0px, 100px) rotateX(50deg) rotateY(0deg) !important;*/
      /*  }*/
      /*}*/

    }

    .heattitle {
      width: 518px;
      height: auto;
      position: absolute;
      bottom: 26%;
      left: -15px;
      right: 0;
      margin: 0 auto;
      margin-left: 19%;
      z-index: 5;


      .r1 {
        width: 100%;
        height: auto;
        overflow: hidden;

        .c1 {
          float: left;
          margin-right: 10px;
          font-size: 22px;
          color: #fff;
        }

        .c2 {
          float: left;
          font-size: 12px;
          font-weight: bold;
          line-height: 22px;
          color: #67B700;
        }
      }

      .r2 {
        width: 100%;
        height: auto;
        overflow: hidden;

        .c1 {
          float: left;
          margin-right: 10px;
          font-size: 22px;
          /*line-height: 1.5rem;*/
        }

        .c2 {
          float: left;
          padding-right: 1rem;
          position: relative;
          font-size: 11px;
          line-height: 22px;
          color: #67B700;

          &:after {
            display: block;
            content: " ";
            width: 0;
            height: 0;
            position: absolute;
            right: 0;
            border-width: 0.3rem;
            border-style: solid;
          }

          &.status1 {
            color: #67B700;
          }

          &.status2 {
            color: #E59C00;
          }

          &.status3 {
            color: #E53600;
          }

          &.down {
            color: #67B700;

            &:after {
              top: 0.75rem;
              border-color: #67B700 transparent transparent transparent;
            }
          }

          &.up {
            color: #FF4800;

            &:after {
              bottom: 0.5rem;
              border-color: transparent transparent #FF4800 transparent;
            }
          }
        }

      }
    }

    .heatchart {
      width: 477px;
      height: 183px;
      position: relative;
      /*top: 0;*/
      /*left: 0;*/
      /*right: 0;*/
      /*margin: 0 auto;*/
      background-size: 100% 100%;

      &.bg1 {
        background-image: url(../assets/1F.png);

      }

      &.bg2 {
        background-image: url(../assets/2F.png);
      }

      &.bg3 {
        background-image: url(../assets/3F.png);

      }

      &.bg4 {
        background-image: url(../assets/1F.png);
      }
    }

    color: #fff;
  }
</style>

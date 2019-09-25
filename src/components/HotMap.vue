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
          <div class="heatchart bg1" id="chart4_1">
          </div>
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
        mySwiper: null
      };
    },
    props: {
      'staylist': {
        type: Array,
        default: []
      }
    },
    mounted() {
      console.log(this.staylist)
      this.initHotMap();
      setTimeout(() => {
        this.mySwiper = new Swiper('.floor', {
          autoplay: 10000,
          direction: 'vertical',
          effect: 'coverflow',
          slidesPerView: 2,
          speed:2000,
          autoplayDisableOnInteraction:false,
          // centeredSlides: true,
          coverflow: {
            rotate: 30,
            stretch: 10,
            depth: 60,
            modifier: 2,
            slideShadows: false
          },
          observer: true,
          observeParents: true,
        })
      }, 50)

    },
    methods: {
      initHotMap(dataarr) {
        const vm = this;
        // let maxvalue = Math.max(...dataarr.map(o => o.value));
        const nuConfig = {
          blur: 1,
          radius: 50,
          maxOpacity: 0.5,
          minOpacity: 0,
          gradient: {
            '.5': '#8CF13A',
            '.8': '#FF9F19',
            '.95': '#F7563E',
          },
        };
        const data = [
          {
            max: 200,
            min: 0,
            data: [
              {
                name:'4D科普影院',
                x: 130, // x coordinate of the datapoint, a number
                y: 150, // y coordinate of the datapoint, a number
                value: 80, // the value at datapoint(x, y)
              },
              {
                name:'儿童乐园',
                x: 120, // x coordinate of the datapoint, a number
                y: 130, // y coordinate of the datapoint, a number
                value: 100, // the value at datapoint(x, y)
              },
              {
                name:'科技的脚步',
                x: 250, // x coordinate of the datapoint, a number
                y: 100, // y coordinate of the datapoint, a number
                value: 200, // the value at datapoint(x, y)
              },
              {
                name:'企业成果',
                x: 300, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 100, // the value at datapoint(x, y)
              },
              {
                name:'临时展区',
                x:350, // x coordinate of the datapoint, a number
                y: 50, // y coordinate of the datapoint, a number
                value: 40, // the value at datapoint(x, y)
              },
            ],
          },
          {
            max: 120,
            min: 0,
            data: [
              {
                name:'数理世界',
                x: 160, // x coordinate of the datapoint, a number
                y: 60, // y coordinate of the datapoint, a number
                value: 90, // the value at datapoint(x, y)
              },
              {
                x: 250, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 40, // the value at datapoint(x, y)
              },
              {
                x: 350, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 100, // the value at datapoint(x, y)
              },
            ],
          },
          {
            max: 200,
            min: 0,
            data: [
              {
                x: 200, // x coordinate of the datapoint, a number
                y: 120, // y coordinate of the datapoint, a number
                value: 180, // the value at datapoint(x, y)
              },
              {
                x: 250, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 40, // the value at datapoint(x, y)
              },
              {
                x: 350, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 100, // the value at datapoint(x, y)
              },
            ],
          },
          {
            max: 300,
            min: 0,
            data: [
              {
                x: 200, // x coordinate of the datapoint, a number
                y: 120, // y coordinate of the datapoint, a number
                value: 10, // the value at datapoint(x, y)
              },
              {
                x: 250, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 140, // the value at datapoint(x, y)
              },
              {
                x: 350, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 100, // the value at datapoint(x, y)
              },
            ],
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
      height: 3.5rem;
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

    .heattitle {
      width: 518px;
      height: auto;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      margin: 0 auto;
      margin-left: 19%;
      transform: none;

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
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
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

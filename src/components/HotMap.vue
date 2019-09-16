<template>
  <div class="hot-map">
    <div class="center">
      <p>当前馆内观众热力图</p>
      <!--      <div class="heat-type" ></div>-->
      <div class="cont">
        <ul>
          <li>
            <div class="heattitle">
              <div class="r1">
                <div class="c1">1F</div>
                <div class="c2 status1">正常</div>
              </div>
            </div>
            <div class="heatchart bg1" id="chart4_1">
              <!--              <heatmapjs-vue class="heatchart bg4" id="chart4_1" :max="1000" :min="0"-->
              <!--                             :data="[{ x:100, y:100, value: 1000,radius:80}]">-->
              <!--              </heatmapjs-vue>-->
            </div>
          </li>
          <li>
            <div class="heattitle">
              <div class="r1">
                <div class="c1">2F</div>
                <div class="c2 status1">正常</div>
              </div>
            </div>
            <div class="heatchart bg2" id="chart4_2"></div>
          </li>
          <li>
            <div class="heattitle">
              <div class="r1">
                <div class="c1">3F</div>
                <div class="c2 status1">正常</div>
              </div>
            </div>
            <div class="heatchart bg3" id="chart4_3">
              <!--              <heatmapjs-vue class="heatchart bg4" id="chart4_3" :max="100" :min="0"-->
              <!--                             :data="[{ x: 10, y: 15, value: 5}]"></heatmapjs-vue>-->
            </div>
          </li>
          <li>
            <div class="heattitle">
              <div class="r1">
                <div class="c1">4F</div>
                <div class="c2 status1">正常</div>
              </div>
            </div>
            <div class="heatchart bg4" id="chart4_4"></div>
            <!--            <heatmapjs-vue class="heatchart bg4" id="chart4_4" :max="100" :min="0"-->
            <!--                           :data="[{ x: 10, y: 15, value: 5}]"></heatmapjs-vue>-->
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import Heatmap from 'heatmap.js'

  export default {
    data() {
      return {
        heatmap: [
          {map: null},
          {map: null},
          {map: null},
          {map: null}
        ],
      }
    },
    mounted() {
      this.initHotMap()
    },
    methods: {
      initHotMap(dataarr) {
        var vm = this;
        var nuConfig = {
          blur: .75,
          maxOpacity: .5,
          minOpacity: .1,
          gradient: {
            '.5': '#8CF13A',
            '.8': '#FF9F19',
            '.95': '#F7563E'
          }
        };
        var data = [
          {
            max: 100,
            min: 0,
            data: [
              {
                x: 200, // x coordinate of the datapoint, a number
                y: 120, // y coordinate of the datapoint, a number
                value: 80 // the value at datapoint(x, y)
              },
              {
                x: 250, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 40 // the value at datapoint(x, y)
              },
              {
                x: 350, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 100 // the value at datapoint(x, y)
              }
            ]
          },
          {
            max: 120,
            min: 0,
            data: [
              {
                x: 300, // x coordinate of the datapoint, a number
                y: 120, // y coordinate of the datapoint, a number
                value: 90 // the value at datapoint(x, y)
              },
              {
                x: 250, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 40 // the value at datapoint(x, y)
              },
              {
                x: 350, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 100 // the value at datapoint(x, y)
              }
            ]
          },
          {
            max: 200,
            min: 0,
            data: [
              {
                x: 200, // x coordinate of the datapoint, a number
                y: 120, // y coordinate of the datapoint, a number
                value: 180 // the value at datapoint(x, y)
              },
              {
                x: 250, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 40 // the value at datapoint(x, y)
              },
              {
                x: 350, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 100 // the value at datapoint(x, y)
              }
            ]
          },
          {
            max: 300,
            min: 0,
            data: [
              {
                x: 200, // x coordinate of the datapoint, a number
                y: 120, // y coordinate of the datapoint, a number
                value: 10 // the value at datapoint(x, y)
              },
              {
                x: 250, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 140 // the value at datapoint(x, y)
              },
              {
                x: 350, // x coordinate of the datapoint, a number
                y: 80, // y coordinate of the datapoint, a number
                value: 100 // the value at datapoint(x, y)
              }
            ]
          }
        ];
        // 热力图
        vm.heatmap.forEach(function (a, i) {
          var heatmapDom = document.querySelector('#chart4_' + (i + 1));
          console.log(heatmapDom)
          var scale = heatmapDom.clientWidth / 1400;
          a.map = Heatmap.create(
            {
              container: heatmapDom,
              radius: 80 * scale,
            }
          ).configure(nuConfig).setData(data[i]);
        })
      }

    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .hot-map {
    width: 100%;
    height: 1536px;

    .center {
      position: relative;
      width: 1680px;
      margin: 0 auto;
      height: 1536px;
      padding-top: 112px;
      padding-left: 120px;
      padding-right: 120px;

      > p {
        position: absolute;
        top: 170px;
        left: 120px;
        font-size: 30px;
        font-weight: bold;
        color: #fff;
        text-align: left;
      }
    }

    .heat-type {
      width: 200px;
      height: 3.5rem;
      position: absolute;
      background-size: 100% 100%;
      margin-top: 1rem;
      background-image: url(../assets/relitu@2x.png);
      background-repeat: no-repeat;
    }
  }

  .cont {
    ul {
      width: 100%;
      height: auto;
      position: absolute;
      top: 0;
      left: 0;

      li {
        width: 100%;
        height: 324px;
        /*margin-top: 1rem;*/
        position: relative;

        &:first-child {
          margin-top: 200px;
        }

        .heattitle {
          width: 8rem;
          height: auto;
          position: absolute;
          top: 50%;
          left: 2rem;
          transform: translateY(-50%);

          .r1 {
            width: 100%;
            height: auto;
            overflow: hidden;

            .c1 {
              float: left;
              margin-right: 0.5rem;
              font-size: 36px;
              color: #fff;
            }

            .c2 {
              float: left;
              font-size: 22px;
              font-weight: bold;
              line-height: 50px;
              color: #67B700;
            }
          }

          .r2 {
            width: 100%;
            height: auto;
            overflow: hidden;

            .c1 {
              float: left;
              margin-right: 0.5rem;
              font-size: 0.95rem;
              line-height: 1.5rem;
            }

            .c2 {
              float: left;
              padding-right: 1rem;
              position: relative;
              font-size: 0.95rem;
              line-height: 1.5rem;
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
          width: 852px;
          height: 324px;
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
      }
    }
  }
</style>

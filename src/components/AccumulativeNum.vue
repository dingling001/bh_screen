<template>
  <div class="accumulative">
    <div class="accumulative-top">
      <div class="accumulative-top_left">
        <span>累计预约人数:</span>
        <span>
          <i-count-up :delay="delay"
                      :endVal="total"
                      :options="options"
                      @ready="onReady"
                      class="iconup"></i-count-up>
        </span>
      </div>
      <div class="accumulative-top_right">
        <span>累计体验人数:</span>
        <span>   <i-count-up :delay="delay"
                             :endVal="totalcheck"
                             :options="options"
                             @ready="onReady1"
                             class="iconup">

        </i-count-up></span>
      </div>
    </div>
    <!-- echarts -->
    <div class="echarts-con" ref="echartsEl"></div>
    <div class="peiban">
      <div><span>陪伴票:</span><span class="pbprenct"> {{pbprenct}}%</span></div>
      <div>{{peoplepbnum}}</div>
    </div>
    <div class="tiyan">
      <div class="child"><span>儿童 </span><span> {{childprecent}}%</span></div>
      <div class="adult"><span>{{adultprecent}}% </span><span> 成人</span></div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import ICountUp from 'vue-countup-v2';

  export default {
    data() {
      return {
        delay: 1000,
        endVal: 120500,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '',
        },
        myEcharts: null,
        total: 0,
        totalcheck: 0,
        pbprenct: 0,
        childprecent: 0,
        adultprecent: 0
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.total = this.childrenyysum + this.peopleyysum;
      this.totalcheck = this.childrencksum + this.peopleyysum;
      this.pbprenct = this.total == 0 ? 0 : (this.peoplepbnum / this.total).toFixed(2) * 100;
      // console.log(this.total)
      this.childprecent = this.totalcheck == 0 ? 0 : (this.childrencksum / this.totalcheck).toFixed(2) * 100;
      this.adultprecent = this.totalcheck == 0 ? 0 : (this.peopleyysum / this.totalcheck).toFixed(2) * 100;
      this.initChildtotal();
      var initChildtotal = setInterval(() => {
        this.initChildtotal()
      }, 10000);
    },
    components: {
      ICountUp,
    },
    props: {
      'childrenyysum': {
        type: Number,
        default: 0
      },
      'childrencksum': {
        type: Number,
        default: 0
      },
      'peoplepbnum': {
        type: Number,
        default: 0
      },
      'peopleyysum': {
        type: Number,
        default: 0
      }
    },
    methods: {
      initChildtotal() {
        const options = {
          series: [
            {
              type: 'pie',
              startAngle: 90,
              radius: [45, 50],
              center: ['25%', '50%'],
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 11,
                  },
                  position: 'inside',
                },
              },
              labelLine: {
                show: false,
              },
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0)',
                  borderWidth: 0,
                },
              },
              data: [
                {
                  name: '',
                  value: this.total - this.peoplepbnum,
                  itemStyle: {
                    color: '#131C43',
                    borderWidth: 8,
                    borderColor: '#131C43',
                  },
                },
                {
                  name: '陪伴票',
                  value: this.peoplepbnum,
                  label: {
                    show: false
                  },
                  // label: {
                  //   padding: [50, 0, 20, 100],
                  //   color: '#fff',
                  //   formatter(params) {
                  //     console.log(params);
                  //     return `${params.data.name}\t\t{color1|${
                  //       params.data.value
                  //       }%}\n{color2|9564}`;
                  //   },
                  //   rich: {
                  //     color1: {
                  //       fontSize: 11,
                  //       fontWeight: 'bold',
                  //       color: '#FF107A',
                  //     },
                  //     color2: {
                  //       fontSize: 14,
                  //       color: '#fff',
                  //       fontWeight: 'bold',
                  //       lineHeight: 40,
                  //     },
                  //   },
                  // },
                  itemStyle: {
                    color: '#FF107A',
                    borderWidth: 8,
                    borderColor: '#FF107A',
                  },
                },
              ],
            },
            {
              type: 'pie',
              startAngle: -90,
              radius: [45, 50],
              center: ['75%', '50%'],
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    fontSize: 11,
                  },
                  position: 'inside',
                },
              },
              labelLine: {
                show: true,
                length: 5,
                length2: 5,
                lineStyle: {
                  width: 0,
                },
              },
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0)',
                  borderWidth: 0,
                },
              },
              data: [
                {
                  name: '儿童',
                  value: this.childrencksum,
                  label: {
                    show: false
                  },
                  // label: {
                  //   padding: [0, 0, 20, 100],
                  //   color: '#FFB400',
                  //   formatter(params) {
                  //     // console.log(params);
                  //     return `${params.data.name}\t\t{color1|${
                  //       params.data.value
                  //       }%}`;
                  //   },
                  //   rich: {
                  //     color1: {
                  //       fontSize: 14,
                  //       fontWeight: 'bold',
                  //     },
                  //   },
                  // },
                  itemStyle: {
                    color: '#FFB400',
                    borderWidth: 8,
                    borderColor: '#FFB400',
                  },
                },
                {
                  name: '',
                  // value: this.totalcheck - this.childrencksum,
                  value: 0
                },
                {
                  name: '成人',
                  value: this.peopleyysum,
                  label: {
                    show: false
                  },
                  // label: {
                  //   color: '#FF2045',
                  //   padding: [20, 90, 0, 0],
                  //   formatter(params) {
                  //     // console.log(params);
                  //     return `${params.data.name}\t\t{color1|${params.value}%}`;
                  //   },
                  //   rich: {
                  //     color1: {
                  //       fontSize: 14,
                  //       fontWeight: 'bold',
                  //     },
                  //   },
                  // },
                  itemStyle: {
                    color: '#FF2045',
                    borderWidth: 8,
                    borderColor: '#FF2045',
                  },
                },
                {
                  name: '',
                  // value: this.totalcheck - this.peopleyysum,
                  value: 0
                },
              ],
            },
          ],
        };
        this.myEcharts.setOption(options);
      },
      onReady(instance, CountUp) {
        // console.log(CountUp)
        const that = this;
        instance.update(that.total);
      },
      onReady1(instance, CountUp) {
        // console.log(CountUp)
        const that = this;
        instance.update(that.totalcheck);
      },
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .accumulative {
    /*  width: 960 + 120px;
      height: 452px;*/
    display: flex;
    flex-flow: column nowrap;
    /*width: 367px;*/
    height: 169px;
    width: 100%;

    &-top {
      /*padding-top: 50px;*/
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      div {
        /*margin: 0 auto;*/
        display: flex;

        > span {
          &:first-child {
            margin-right: 16px;
            font-size: 11px;
            color: rgba(255, 255, 255, 0.75);
          }

          &:last-child {
            font-size: 13px;
            color: #fff;
          }
        }
      }
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }

    .peiban {
      position: absolute;
      top: 45%;
      left: 18%;
      color: #fff;
      font-size: 11px;
      line-height: 22px;

      .pbprenct {
        color: #E62473;
      }
    }

    .tiyan {
      position: absolute;
      top: 45%;
      right: 18%;
      font-size: 14px;
      line-height: 22px;

      .child {
        color: #FFB400;

        span {
          &:first-child {
            font-size: 9px;
          }
        }
      }

      .adult {
        color: #FF2045;

        span {
          &:first-child {
            font-size: 9px;
          }
        }
      }
    }
  }
</style>

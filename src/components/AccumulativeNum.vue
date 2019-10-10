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
      <div>{{people_pbnum}}</div>
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
        // total: 0,
        // totalcheck: 0,
        // pbprenct: 0,
        // childprecent: 0,
        // adultprecent: 0,

        children_yysum: 0,
        children_cksum: 0,
        people_pbnum: 0,
        people_yysum: 0
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.initChildtotal();
      var initChildtotal = setInterval(() => {
        this.myEcharts.clear();
        this.initChildtotal()
      }, 10000);
    },

    components: {
      ICountUp,
    },
    computed: {
      total() {
        // this.children_yysum=this.childrenyysum;
        // this.peoplepbnum=this.people_yysum;
        return this.children_yysum + this.people_yysum;
      },
      totalcheck() {
        return this.children_cksum + this.people_yysum;
      },
      pbprenct() {
        return this.total == 0 ? 0 : (this.people_pbnum / this.total).toFixed(2) * 100;
      },
      childprecent() {
        return this.totalcheck == 0 ? 0 : (this.children_cksum / this.totalcheck * 100).toFixed(1);
      },
      adultprecent() {
        return this.totalcheck == 0 ? 0 : ((this.people_yysum / this.totalcheck) * 100).toFixed(1);
      }
    },
    watch: {
      'childrenyysum': {
        handler(val) {
          this.children_yysum = val;
        },
        immediate: true
      },
      'childrencksum': {
        handler(val) {
          this.children_cksum = val;
        },
        immediate: true
      },
      'peoplepbnum': {
        handler(val) {
          this.people_pbnum = val;
        },
        immediate: true
      },
      'peopleyysum': {
        handler(val) {
          this.people_yysum = val;
        },
        immediate: true
      }
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
          showSymbol: false,
          sampling: 'average',
          showAllSymbol: false,
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
              center: ['76%', '52%'],
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
                  value: 20
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
                  value: 20
                },
              ],
            },
          ],
        };
        this.myEcharts.setOption(options);
      },
      onReady(instance, CountUp) {
        const that = this;
        instance.update(that.total);
      },
      onReady1(instance, CountUp) {
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
    width: 83%;

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
        font-weight: bold;
      }
    }

    .tiyan {
      position: absolute;
      top: 45%;
      right: 15%;
      font-size: 14px;
      line-height: 22px;

      .child {
        color: #FFB400;
        font-weight: bold;

        span {
          &:last-child {
            font-size: 12px;
          }
        }
      }

      .adult {
        color: #FF2045;
        font-weight: bold;

        span {
          &:first-child {
            font-size: 12px;
          }
        }
      }
    }
  }
</style>

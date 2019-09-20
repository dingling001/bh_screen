<template>
  <div class="current-inner">
    <div class="current-inner_top">
      <span>当前观众在馆人数：</span>
      <span><ICountUp :delay="delay" :endVal="staynum" :options="options" @ready="onReady" class="iconup"/></span>
    </div>
    <!-- echart -->
    <div class="echarts-con" ref="echartsEl"></div>
    <div class="hr"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import ICountUp from 'vue-countup-v2';

  export default {
    data() {
      return {
        value: [830, 924, 1921, 924, 1230, 1220, 1102],
        myEchart: null,
        delay: 500,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '',
        },
        staynum: 0
      };
    },
    components: {
      ICountUp
    },

    props: {
      'stay_num': {
        type: Number,
        default: 0
      },
      'datalist': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEchart = echarts.init(echartsEl);
      this.initPersonMap(this.datalist);
      this.staynum = this.stay_num > 0 ? this.stay_num : 5306

      setInterval(() => {
        this.myEchart.clear();
        // this.stay_num = 0;
        this.initPersonMap(this.datalist)
      }, 10000)
    },
    methods: {
      initPersonMap(datalist) {
        var xdata = [];
        var ydata = []
        datalist.forEach((item, index) => {
          xdata.push(item.time);
          ydata.push(item.num);
        })
        const options = {
          grid: {
            left: 59,
            top: 20,
            right: 20,
            bottom: 40,
          },

          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: true,
              interval: 'auto',
              fontSize: 10,
              fontWeight: 'bold',
              color: '#808080',
            },
            data: xdata.length ? xdata : ['9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
          },
          yAxis: {
            type: 'value',
            splitNumber: 3,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              showMinLabel: false,
              fontWeight: 'bold',
              fontSize: 10,
              color: '#808080',
            },
          },
          series: [
            {
              type: 'line',
              name: 'number',
              smooth: true,
              lineStyle: {
                width: 2,
                color: '#1DBC9D',
              },
              itemStyle: {
                color: '#1DBC9D',
                borderWidth: 2,
                borderColor: '#1DBC9D',
                opacity: 0,
              },
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(29,188,157,0.1)', // 0% 处的颜色
                    },
                    {
                      offset: 0.3,
                      color: 'rgba(29,188,157,0.2)', // 30% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(29,188,157,0.5)', // 100% 处的颜色
                    },
                  ],
                },
              },
              data: ydata.length ? ydata : [830, 924, 1921, 924, 1230, 1220, 1102],
            },
          ],
        };
        this.myEchart.setOption(options);
      },
      onReady(instance, CountUp) {
        const that = this;
        instance.update(that.staynum);
      },
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .current-inner {
    margin-bottom: 22px;
    display: flex;
    flex-flow: column nowrap;
    width: 367px;
    height: 251px;
    // background-color: #0e0e20;

    &_top {
      padding-top: 25px;
      padding-bottom: 20px;
      padding-left: 60px;
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;

      > span {
        &:last-child {
          font-size: 22px;
        }
      }
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }

    .hr {
      width: 422px;
      height: 11px;
      background: #05141F;
      opacity: .5;
    }
  }
</style>

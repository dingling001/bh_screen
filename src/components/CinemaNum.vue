<template>
  <div class="week-visits">
    <div class="week-visits_top">
      <span>4D影院预约量：</span>
      <span><ICountUp
        :delay="delay"
        :endVal="totaldata"
        :options="options"
        @ready="onReady"
        class="iconup"
      /></span>
    </div>
    <!-- echarts -->
    <div class="echarts-con" ref="echartsEl"></div>
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
        totaldata: 0
      };
    },
    watch: {
      'clist'(newValue, oldValue) {
        if (newValue.length) {
          for (let i = 0; i < newValue.length; i++) {
            if (oldValue[i] != newValue[i]) {
              this.myEcharts.clear();
              this.initCdata(newValue)
            }
          }
        }
      },
      'ctotal': {
        handler(val) {
          this.totaldata = val;
        },
        immediate: true
      }
    },
    props: {
      'clist': {
        type: Array,
        default: []
      },
      'ctotal': {
        type: Number,
        default: 0
      }
    },
    components: {
      ICountUp,
    },
    methods: {
      onReady(instance, CountUp) {
        // console.log(CountUp)
        const that = this;
        instance.update(that.totaldata);
      },
      initCdata(clist) {
        var xdata = [];
        var ydata = [];
        clist.forEach((item, index) => {
          xdata.push(item.date);
          ydata.push(item.buy_count)
        })
        const options = {
          color: ['#7349D0', '#79C1FF'],
          grid: {
            top: 40,
            bottom: 80,
            left: 30,
            right: 30,
          },
          legend: {
            icon: 'circle',
            textStyle: {
              color: '#ffffff',
              fontSize: 9,
              fontWeight: 'bold',
            },
            orient: 'vertical',

            right: '20%',
            selectedMode: false,
            data: ['预约人数'],
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
              show: true,
              lineStyle: {
                color: ['rgba(150,108,247,0.5)'],
              },
              interval: 0,
            },
            axisLabel: {
              show: true,
              // rotate: 45,
              interval: 'auto',
              fontSize: 9,
              color: '#fff',
              formatter(val) {
                const arr = val.split('-');
                return `${arr[1]}/${arr[2]}`;
              },
            },

            data: xdata,
          },
          yAxis: {
            type: 'value',
            minInterval: 1,
            splitNumber: 3,
            name: '每日预约量',
            nameTextStyle: {
              color: '#ffffff',
              fontSize: 9,
              fontWeight: 'bold',
            },
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
              fontSize: 9,
              padding: [0, 10, 0, 0],
              color: 'rgba(255,255,255,0.72)',
            },
          },
          series: [
            {
              type: 'line',
              name: '进馆人数',
              lineStyle: {
                width: 5,
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#7349D0', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#79C1FF', // 100% 处的颜色
                    },
                  ],
                },
              },
              itemStyle: {
                opacity: 0,
              },
              areaStyle: {
                color: 'rgba(255,153,153,0.2)',
              },
              data: ydata,
            },
          ],
        };
        this.myEcharts.setOption(options);
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.initCdata(this.clist)
      var cnum = setInterval(() => {
        this.myEcharts.clear()
        this.initCdata(this.clist)
      }, 10000)
    },
  };
</script>

<style lang="less" scoped>
  /** @format */
  .week-visits {
    display: flex;
    flex-flow: column nowrap;
    /* width: 960 + 120px;*/
    /*height: 452px;*/
    // background-color: #0e0e20;
    width: 343px;
    height: 280px;

    &_top {
      padding-top: 25px;
      padding-bottom: 20px;
      /*padding-left: 30px;*/
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;

      .iconup {
        font-size: 22px;
      }
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="child-age">
    <div class="child-age_top">
      <span>4D影院七日上座率</span>
    </div>

    <!-- echart -->
    <div class="echarts-con" ref="echartsEl"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    data() {
      return {
        myEcharts: null
      }
    },
    props: {
      'attendancerate': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.initCrank(this.attendancerate)
      setInterval(() => {
        this.initCrank(this.attendancerate)
      }, 10000)
    },
    methods: {
      initCrank(attendancerate) {
        var xdata = [];
        var ydata = [];
        attendancerate.forEach((item, index) => {
          xdata.push(item.date);
          ydata.push(item.attendance_rate)
        });
        const options = {
          grid: {
            top: 20,
            bottom: 80,
            left: 50,
            right: 20,
          },
          xAxis: {
            type: 'category',
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
              color: '#fff',
              fontSize: 11,
              margin: 20,
              formatter(val) {
                const arr = val.split('-');
                return `${arr[1]}/${arr[2]}`;
              },
            },

            data: xdata
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              color: '#A4A4A4',
              fontSize: 11,
              formatter(val) {
                return `${val}%`;
              },
            },
            splitLine: {show: false},
            axisLine: {show: false},
            axisTick: {show: false},
          },
          series: [
            {
              type: 'bar',
              barWidth: 25,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#BC15EC', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#5715EB', // 100% 处的颜色
                    },
                  ],
                },
              },
              data: ydata
            },
          ],
        };
        this.myEcharts.setOption(options);
      }
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .child-age {
    display: flex;
    flex-flow: column nowrap;
    width: 343px;
    height: 280px;

    &_top {
      padding-top: 14px;
      padding-bottom: 20px;
      /*padding-left: 30px;*/
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="compared">
    <div class="compared_top">
      <span>儿童乐园预约及体验人数对比</span>
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
      'peopleline': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.initChild(this.peopleline)
      setInterval(()=>{
        this.myEcharts.clear();
        this.initChild(this.peopleline)
      },10000)
    },
    methods: {
      initChild(data) {
        var xdata = [];
        var ydata = [];
        var tdata = []
        data.forEach((item, index) => {
          xdata.push(item.name);
          ydata.push(item.value);
          tdata.push(item.value_ck);
        });
        const options = {
          color: ['#DB5D09', '#7F55C4'],
          grid: {
            top: 50,
            bottom: 20,
            left: 90,
            right: 50,
          },
          legend: {
            icon: 'circle',
            textStyle: {
              color: '#ffffff',
              fontSize: 8,
              fontWeight: 'bold',
            },
            right: '10%',
            top: 0,
            selectedMode: false,
            data: ['体验人数', '预约人数'],
            orient: 'vertical',
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            interval: 0,
            axisLine: {
              show: false,
              interval: 0,
            },
            axisTick: {
              show: true,
              interval: 0,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#966CF7',
              },
              interval: 0,
            },
            axisLabel: {
              interval: 0,
              show: true,
              fontSize: 8,
              color: '#fff',
              formatter(val) {
                const arr = val.split('-');
                return `${arr[1]}/${arr[2]}`;
              },
            },
            data: xdata.length ? xdata : [
              '2019-08-25',
              '2019-08-28',
              '2019-08-29',
              '2019-08-30',
              '2019-08-31',
              '2019-09-01',
              '2019-09-04',
            ],
          },
          yAxis: {
            type: 'value',
            splitNumber: 3,
            name: '人数',
            nameGap: 40,
            minInterval:1,
            nameTextStyle: {
              color: '#ffffff',
              fontSize: 8,
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
              showMinLabel: true,
              fontSize: 8,
              padding: [0, 20, 0, 0],
              color: '#808080',
            },
          },
          series: [
            {
              type: 'line',
              name: '体验人数',
              symbol: 'none',
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#DB5D09', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FF9999', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                width: 8,
                type: 'solid',
              },
              data: tdata.length ? tdata : [1000, 1200, 3000, 5660, 1000, 5662, 5000],
              markPoint: {
                data: [
                  {
                    name: '最大值',
                    type: 'max',
                    valueIndex: 0,
                    symbol: 'none',
                  },
                ],
              },
            },
            {
              type: 'line',
              name: '预约人数',
              symbol: 'none',
              lineStyle: {
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
                  global: false, // 缺省为 false
                },
                width: 8,
                type: 'solid',
              },

              data: ydata ? ydata : [2000, 4000, 3000, 2100, 3200, 4000, 6000],
            },
          ],
        };
        this.myEcharts.setOption(options);
      },

    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .compared {
    margin-bottom: 22px;
    display: flex;
    flex-flow: column nowrap;
    /*  width: 960 + 120px;
      height: 480px;*/
    // background-color: #0e0e20;
    /*width: 367px;*/
    height: 240px;
    width: 100%;

    &_top {
      padding-top: 25px;
      padding-bottom: 20px;
      padding-left: 30px;
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

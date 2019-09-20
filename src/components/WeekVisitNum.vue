<template>
  <div class="week-visit">
    <div class="week-visit_top">
      <span>七日预约/进馆人数</span>
    </div>

    <!-- echarts -->
    <div class="echarts-con" ref="echartsEl"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    props: {
      'people_line': {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        myEcharts: null
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      // console.log(this.people_line)
      this.myEcharts = echarts.init(echartsEl);
      this.initPeople(this.people_line)
    },
    methods: {
      initPeople(data) {
        var date = [];
        var ydata = [];
        var cdata = [];
        data.forEach((item, index) => {
          date.push(item.name);
          ydata.push(item.value);
          cdata.push(item.value_ck)
        })
        const options = {
          color: ['#7F55C4', '#DB5D09'],
          grid: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 30,
          },
          legend: {
            icon: 'circle',
            textStyle: {
              color: '#ffffff',
              fontSize: 8,
              fontWeight: 'bold',
            },
            orient: 'vertical',

            right: '10%',
            selectedMode: false,
            data: ['预约人数', '进馆人数'],
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
              interval: 'auto',
              fontSize: 8,
              color: '#808080',
              formatter(val) {
                const arr = val.split('-');
                return `${arr[1]}/${arr[2]}`;
              },
              rotate:45
            },
            data: date.length <= 0 ? [
              '2019-08-25',
              '2019-08-28',
              '2019-08-29',
              '2019-08-30',
              '2019-08-31',
              '2019-09-01',
              '2019-09-04',
            ] : date,
          },
          yAxis: {
            type: 'value',
            splitNumber: 3,
            name: '人数',
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
              showMinLabel: false,
              fontSize: 8,
              padding: [0, 20, 0, 0],
              color: '#808080',
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
                      color: '#1A7FD6', // 100% 处的颜色
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
              data: ydata.length <= 0 ? [3321, 1031, 766, 489, 2650, 2949, 500] : ydata,
            },
            {
              type: 'line',
              name: '预约人数',
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
                      color: '#DB5D09', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#FF9999', // 100% 处的颜色
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
              data: cdata.length <= 0 ? [2871, 961, 756, 473, 2337, 2645, 504] : cdata,
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
  .week-visit {
    display: flex;
    flex-flow: column nowrap;
    /*  width: 960 + 120px;
      height: 452px;*/
    width: 367px;
    height: 240px;
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
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="child-age">
    <div class="child-age_top">
      <span>儿童乐园预约人数年龄分布</span>
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
      'agestat': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      // console.log(this.agestat)
      this.initChildAge(this.agestat)
      var childage = setInterval(() => {
        this.myEcharts.clear();
        this.initChildAge(this.agestat)
      }, 10000)
    },
    methods: {
      initChildAge(agestat) {
        var xdata = [];
        var values = [];
        var total = 0
        agestat.forEach((item) => {
          xdata.push(item.name);
          values.push(item.value>1?item.value:item.value+1);
          total += parseInt(item.value>1?item.value:item.value+1)
        });
        const options = {
          grid: {
            top: 50,
            bottom: 105,
            left: 60,
            right: 50,
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
              fontSize: 9,
              margin: 10,
              interval:0
            },
            data: xdata.length ? xdata : ['3-4岁', '5-6岁', '7-8岁', '9-10岁', '11-12岁', '13(岁)'],
          },
          yAxis: {
            type: 'value',
            minInterval: 0,
            axisLabel: {
              color: 'rgba(255,255,255,0.72)',
              fontSize: 9,
              formatter(val) {
                return `${Number(val/total*100).toFixed(0)}%`;
              },
            },
            splitLine: {show: false},
            axisLine: {show: false},
            axisTick: {show: false},
          },
          series: [
            {
              type: 'bar',
              barWidth: 24,
              // barCategoryGap:20,
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
              data: values.length ? values : [50, 60, 10, 20, 30, 20],
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
    width: 83%;
    height: 300px;

    &_top {
      padding-top: 25px;
      /*padding-bottom: 20px;*/
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

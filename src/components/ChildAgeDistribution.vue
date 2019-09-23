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
      setInterval(()=>{
        this.myEcharts.clear();
        this.initChildAge(this.agestat)
      },10000)
    },
    methods: {
      initChildAge(agestat) {
        var xdata = [];
        var values = [];
        agestat.forEach((item) => {
          xdata.push(item.name);
          values.push(item.value);
        })
        const options = {
          grid: {
            top: 40,
            bottom: 50,
            left: 80,
            right: 0,
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
              fontSize: 12,
              margin: 20,
            },
            data: xdata.length ? xdata : ['3-4岁', '5-6岁', '7-8岁', '9-10岁', '11-12岁', '13(岁)'],
          },
          yAxis: {
            type: 'value',
            minInterval:10,
            axisLabel: {
              color: '#A4A4A4',
              fontSize: 12,
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
    /*width: 1080px;
    height: 452px;*/
    /*width: 520px;*/
    width: 100%;
    height: 240px;

    &_top {
      padding-top: 25px;
      /*padding-bottom: 20px;*/
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

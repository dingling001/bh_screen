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
  mounted() {
    const { echartsEl } = this.$refs;

    const myEcharts = echarts.init(echartsEl);

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
        data: ['3-4', '5-6', '7-8', '9-10', '11-12', '13(岁)'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#A4A4A4',
          fontSize: 12,
          formatter(val) {
            return `${val}%`;
          },
        },
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
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
          data: [50, 60, 10, 20, 30, 20],
        },
      ],
    };

    myEcharts.setOption(options);
  },
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

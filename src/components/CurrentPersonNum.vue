<template>
  <div class="current-inner">
    <div class="current-inner_top">
      <span>当前观众在馆人数：</span>
      <span>8,120</span>
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
      value: [830, 924, 1921, 924, 1230, 1220, 1102],
    };
  },
  mounted() {
    const { echartsEl } = this.$refs;

    console.log(echartsEl);

    const myEchart = echarts.init(echartsEl);

    const options = {
      grid: {
        left: 110,
        top: 20,
        right: 80,
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
          fontSize: 19,
          fontWeight: 'bold',
          color: '#808080',
        },
        data: ['9:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'],
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
          fontSize: 19,
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
                  color: 'rgba(29,188,157,0.5)', // 30% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(29,188,157,0.8)', // 100% 处的颜色
                },
              ],
            },
          },
          data: [830, 924, 1921, 924, 1230, 1220, 1102],
        },
      ],
    };

    myEchart.setOption(options);
  },
};
</script>

<style lang="less" scoped>
/** @format */
.current-inner {
  margin-bottom: 22px;
  display: flex;
  flex-flow: column nowrap;
  width: 960 + 120px;
  height: 480px;
  // background-color: #0e0e20;

  &_top {
    padding-top: 25px;
    padding-bottom: 20px;
    padding-left: 60px;
    width: 100%;
    text-align: left;
    font-size: 29px;
    font-weight: 800;
    color: #fff;
    > span {
      &:last-child {
        font-size: 43px;
      }
    }
  }
  .echarts-con {
    width: 100%;
    height: 100%;
  }
}
</style>

<template>
  <div class="compared">
    <div class="compared_top">
      <span>“你好智能”累计体验人数：</span><span>
      <ICountUp
        :delay="delay"
        :endVal="endVal"
        :options="options"
        @ready="onReady"
        class="iconup"
      />
    </span>
    </div>
    <!-- echart -->
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
    };
  },
  components: {
    ICountUp,
  },
  methods: {
    onReady(instance, CountUp) {
      const that = this;
      instance.update(that.endVal);
    },
  },
  mounted() {
    const { echartsEl } = this.$refs;

    const myEcharts = echarts.init(echartsEl);

    const options = {
      color: ['#E5318B', '#4E65DF'],
      grid: {
        top:40,
        bottom: 40,
        left: 80,
        right: 40,
      },
      legend: {
        icon: 'circle',
        textStyle: {
          color: '#ffffff',
          fontSize: 8,
          fontWeight: 'bold',
        },
        right: '20%',
        top: 50,
        selectedMode: false,
        data: ['当日体验', '临时体验'],
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
          color: '#808080',
          formatter(val) {
            const arr = val.split('-');
            return `${arr[1]}/${arr[2]}`;
          },
        },
        data: [
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
            width: 4,
            type: 'solid',
          },
          data: [1000, 1200, 3000, 5660, 1000, 5662, 5000],
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
            width: 4,
            type: 'solid',
          },

          data: [2000, 4000, 3000, 2100, 3200, 4000, 6000],
        },
      ],
    };

    myEcharts.setOption(options);
  },
};
</script>

<style lang="less" scoped>
  /** @format */
  .compared {
    margin-bottom: 22px;
    display: flex;
    flex-flow: column nowrap;
   /* width: 960 + 120px;
    height: 480px;*/
    width: 367px;
    height: 251px;
    // background-color: #0e0e20;

    &_top {
      padding-top:25px;
      padding-bottom: 20px;
      padding-left: 60px;
      width: 100%;
      text-align: left;
      font-size: 14px;
      color: #fff;
      .iconup{
        font-size: 22px;
        font-weight: 800;
      }
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }
</style>

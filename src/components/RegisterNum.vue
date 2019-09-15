<template>
  <div class="register-num">
    <div class="register-num_top">
      <span>科技馆会员总注册人数：</span>
      <span>6,352</span>
    </div>

    <div class="register-num_catalog">
      <div>
        <span>网站</span>
        <span>1,689</span>
      </div>
      <div>
        <span>微信</span>
        <span>2,689</span>
      </div>
      <div>
        <span>导视屏</span>
        <span>3,689</span>
      </div>
    </div>

    <!-- echarts -->
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
        left: 90,
        top: 30,
        right: 80,
        bottom: 40,
      },
      legend: {
        type: 'plain',
        show: false,
        data: ['网站', '微信', '导视屏'],
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          show: true,
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
          fontSize: 20,
          color: '#657CA8',
        },
        data: ['0-17', '18-24', '25-35', '36-64', '65及以上'],
      },
      yAxis: {
        type: 'value',
        splitNumber: 0,
        axisLine: {
          show: true,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          fontSize: 20,
          color: '#657CA8',
          padding: [0, 20, 0, 0],
          formatter: '{value}%',
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'line', // 默认为直线，可选为：'line' | 'shadow'
          lineStyle: {
            color: '#57617B',
          },
        },
        formatter:
          '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%<br />',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], // 内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', // 添加阴影
      },
      series: [
        {
          name: '网站',
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#00B7EE',
            borderColor: '#fff',
            borderWidth: 2,
          },
          lineStyle: {
            color: '#00B7EE',
            width: 5,
          },

          data: [7, 30, 40, 50, 10],
        },
        {
          name: '微信',
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#2FE4C3',
            borderColor: '#fff',
            borderWidth: 2,
          },
          lineStyle: {
            color: '#2FE4C3',
            width: 5,
          },

          data: [20, 60, 10, 10, 10],
        },
        {
          name: '导视屏',
          type: 'line',
          symbol: 'circle',
          symbolSize: 10,
          itemStyle: {
            color: '#E4007F',
            borderColor: '#fff',
            borderWidth: 2,
          },
          lineStyle: {
            color: '#E4007F',
            width: 5,
          },
          data: [3.5, 15.2, 16.1, 17.4, 13.4],
        },
      ],
    };

    myEcharts.setOption(options);
  },
};
</script>

<style lang="less" scoped>
/** @format */
.register-num {
  margin-bottom: 18px;
  display: flex;
  flex-flow: column nowrap;
  width: 960 + 120px;
  height: 480px;
  // background-color: #0e0e20;

  &_top {
    padding-top: 25px;
    padding-bottom: 40px;
    padding-left: 60px;
    width: 100%;
    text-align: left;
    font-size: 29px;
    font-weight: 800;
    color: #fff;
    > span {
      &:last-child {
        font-size: 36px;
      }
    }
  }

  &_catalog {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    > div {
      display: flex;
      flex-flow: column nowrap;
      font-weight: 600;

      &:first-child {
        > span:first-child {
          color: #00b7ee;

          &::before {
            background-color: #00b7ee;
          }
        }
      }

      &:nth-child(2) {
        > span:first-child {
          color: #2fe4c3;

          &::before {
            background-color: #2fe4c3;
          }
        }
      }

      &:last-child {
        > span:first-child {
          color: #e4007f;

          &::before {
            background-color: #e4007f;
          }
        }
      }

      > span {
        &:first-child {
          position: relative;
          padding-left: 20px;
          font-size: 22px;
          &::before {
            position: absolute;
            top: 50%;
            left: 0px;
            transform: translateY(-50%);
            width: 11px;
            height: 11px;
            border: 2px solid rgba(255, 255, 255, 1);
            border-radius: 50%;

            content: '';
          }
        }

        &:last-child {
          padding-top: 16px;
          font-size: 29px;
          color: #fff;
        }
      }
    }
  }
  .echarts-con {
    width: 100%;
    height: 100%;
  }
}
</style>

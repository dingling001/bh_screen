<template>
  <div class="register-num">
    <div class="register-num_top">
      <span>会员总注册人数：</span>
      <span>{{m_data.total}}</span>
    </div>

    <div class="register-num_catalog">
      <div>
        <span>网站</span>
        <span>{{m_data.pc}}</span>
      </div>
      <div>
        <span>微信</span>
        <span>{{m_data.wx}}</span>
      </div>
      <div>
        <span>导视屏</span>
        <span>{{m_data.ter}}</span>
      </div>
    </div>

    <!-- echarts -->
    <div class="echarts-con" ref="echartsEl"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    data() {
      return {
        m_data: {},
        myEcharts: null
      }
    },
    props: {
      'mdata': {
        type: Object,
        default: {}
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      setInterval(() => {
        this.m_data = this.mdata;
        this.myEcharts.clear();
        this.initMember(this.mdata);
      }, 3000)
    },
    methods: {
      initMember(data) {
        var pctotal = (data.one.pc + data.two.pc + data.three.pc + data.four.pc + data.five.pc) <= 0 ? 1 : (data.one.pc + data.two.pc + data.three.pc + data.four.pc + data.five.pc);
        var wxtotal = (data.one.wx + data.two.wx + data.three.wx + data.four.wx + data.five.wx) <= 0 ? 1 : (data.one.wx + data.two.wx + data.three.wx + data.four.wx + data.five.wx);
        var tertotal = (data.one.ter + data.two.ter + data.three.ter + data.four.ter + data.five.ter) <= 0 ? 1 : (data.one.ter + data.two.ter + data.three.ter + data.four.ter + data.five.ter);
        const options = {
          grid: {
            left: 50,
            top: 30,
            right: 50,
            bottom: 50,
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
              fontSize: 10,
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
              fontSize: 10,
              color: '#657CA8',
              padding: [0, 20, 0, 0],
              formatter: function (value) {
                // console.log(value)
                return `${value}%`
              }
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

              data: [data.one.pc / pctotal, data.two.pc / pctotal, data.three.pc / pctotal, data.four.pc / pctotal, data.five.pc / pctotal],
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

              data: [data.one.wx / wxtotal, data.two.wx / wxtotal, data.three.wx / wxtotal, data.four.wx / wxtotal, data.five.wx / wxtotal],
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
              data: [data.one.ter / tertotal, data.two.ter / tertotal, data.three.ter / tertotal, data.four.ter / tertotal, data.five.ter / tertotal],
            },
          ],
        };
        this.myEcharts.setOption(options);
        this.m_data = this.mdata;
      }
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .register-num {
    margin-bottom: 18px;
    display: flex;
    flex-flow: column nowrap;
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

      > span {
        &:last-child {
          font-size: 22px;
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
            padding-left: 21px;
            font-size: 11px;
            text-align: left;

            &::before {
              position: absolute;
              top: 48%;
              left: 0;
              transform: translateY(-50%);
              width: 11px;
              height: 11px;
              border: 4px solid rgba(255, 255, 255, 1);
              border-radius: 50%;

              content: '';
            }
          }

          &:last-child {
            padding-top: 6px;
            font-size: 14px;
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

<template>
  <div class="age-distribution">
    <div class="age-distribution_top">
      <span>观众年龄分布</span>
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

    const option = {
      title: [
        {
          show: true,
          text: '17岁及以下',
          textAlign: 'center',
          textStyle: {
            color: '#808080',
            fontSize: 22,
            fontWeight: 'normal',
            textAlign: 'center',
          },
          left: '30%',
          top: 140,
        },
        {
          show: true,
          text: '18-24',
          textAlign: 'center',
          textStyle: {
            color: '#808080',
            fontSize: 22,
            fontWeight: 'normal',
            textAlign: 'center',
          },
          left: '50%',
          top: 140,
        },
        {
          show: true,
          text: '25-30',
          textAlign: 'center',
          textStyle: {
            color: '#808080',
            fontSize: 22,
            fontWeight: 'normal',
            textAlign: 'center',
          },
          left: '70%',
          top: 140,
        },

        {
          show: true,
          text: '31-35',
          textAlign: 'center',
          textStyle: {
            color: '#808080',
            fontSize: 22,
            fontWeight: 'normal',
            textAlign: 'center',
          },
          left: '20%',
          bottom: 20,
        },
        {
          show: true,
          text: '36-40',
          textAlign: 'center',
          textStyle: {
            color: '#808080',
            fontSize: 22,
            fontWeight: 'normal',
            textAlign: 'center',
          },
          left: '40%',
          bottom: 20,
        },
        {
          show: true,
          text: '41-64',
          textAlign: 'center',
          textStyle: {
            color: '#808080',
            fontSize: 22,
            fontWeight: 'normal',
            textAlign: 'center',
          },
          left: '60%',
          bottom: 20,
        },
        {
          show: true,
          text: '65岁及以上',
          textAlign: 'center',
          textStyle: {
            color: '#808080',
            fontSize: 22,
            fontWeight: 'normal',
            textAlign: 'center',
          },
          left: '80%',
          bottom: 20,
        },
      ],
      series: [
        {
          type: 'pie',
          clockWise: true,
          radius: [53, 54],
          startAngle: 90,
          center: ['30%', 70],
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              borderWidth: 5,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,

          data: [
            {
              value: 20.5,
              label: {
                formatter(params) {
                  return `${Number(params.value).toFixed(2)}%`;
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '21',
                  fontWeight: 'bold',
                  color: '#fff',
                },
              },
            },
            {
              value: 100 - 20.5,
              itemStyle: {
                color: '#535353',
                borderWidth: 0,
                emphasis: {
                  show: false,
                },
              },
            },
          ],
        },
        {
          type: 'pie',
          clockWise: true,
          radius: [53, 54],
          startAngle: 90,
          center: ['50%', 70],
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              borderWidth: 5,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,

          data: [
            {
              value: 20.5,
              label: {
                formatter(params) {
                  return `${Number(params.value).toFixed(2)}%`;
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '21',
                  fontWeight: 'bold',
                  color: '#fff',
                },
              },
            },
            {
              value: 100 - 20.5,
              itemStyle: {
                color: '#535353',
                borderWidth: 0,
                emphasis: {
                  show: false,
                },
              },
            },
          ],
        },
        {
          type: 'pie',
          clockWise: true,
          radius: [53, 54],
          startAngle: 90,
          center: ['70%', 70],
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              borderWidth: 5,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,

          data: [
            {
              value: 20.5,
              label: {
                formatter(params) {
                  return `${Number(params.value).toFixed(2)}%`;
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '21',
                  fontWeight: 'bold',
                  color: '#fff',
                },
              },
            },
            {
              value: 100 - 20.5,
              itemStyle: {
                color: '#535353',
                borderWidth: 0,
                emphasis: {
                  show: false,
                },
              },
            },
          ],
        },

        {
          type: 'pie',
          clockWise: true,
          radius: [53, 54],
          startAngle: 90,
          center: ['20%', 230],
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              borderWidth: 5,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,

          data: [
            {
              value: 20.5,
              label: {
                formatter(params) {
                  return `${Number(params.value).toFixed(2)}%`;
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '21',
                  fontWeight: 'bold',
                  color: '#fff',
                },
              },
            },
            {
              value: 100 - 20.5,
              itemStyle: {
                color: '#535353',
                borderWidth: 0,
                emphasis: {
                  show: false,
                },
              },
            },
          ],
        },

        {
          type: 'pie',
          clockWise: true,
          radius: [53, 54],
          startAngle: 90,
          center: ['40%', 230],
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              borderWidth: 5,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,

          data: [
            {
              value: 20.5,
              label: {
                formatter(params) {
                  return `${Number(params.value).toFixed(2)}%`;
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '21',
                  fontWeight: 'bold',
                  color: '#fff',
                },
              },
            },
            {
              value: 100 - 20.5,
              itemStyle: {
                color: '#535353',
                borderWidth: 0,
                emphasis: {
                  show: false,
                },
              },
            },
          ],
        },

        {
          type: 'pie',
          clockWise: true,
          radius: [53, 54],
          startAngle: 90,
          center: ['60%', 230],
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              borderWidth: 5,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,

          data: [
            {
              value: 20.5,
              label: {
                formatter(params) {
                  return `${Number(params.value).toFixed(2)}%`;
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '21',
                  fontWeight: 'bold',
                  color: '#fff',
                },
              },
            },
            {
              value: 100 - 20.5,
              itemStyle: {
                color: '#535353',
                borderWidth: 0,
                emphasis: {
                  show: false,
                },
              },
            },
          ],
        },

        {
          type: 'pie',
          clockWise: true,
          radius: [53, 54],
          startAngle: 90,
          center: ['80%', 230],
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              borderWidth: 5,
              borderColor: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#F1AA3A', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#F7563E', // 100% 处的颜色
                  },
                ],
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,

          data: [
            {
              value: 20.5,
              label: {
                formatter(params) {
                  return `${Number(params.value).toFixed(2)}%`;
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '21',
                  fontWeight: 'bold',
                  color: '#fff',
                },
              },
            },
            {
              value: 100 - 20.5,
              itemStyle: {
                color: '#535353',
                borderWidth: 0,
                emphasis: {
                  show: false,
                },
              },
            },
          ],
        },
      ],
    };

    myEcharts.setOption(option);
  },
};
</script>

<style lang="less" scoped>
/** @format */
.age-distribution {
  margin-bottom: 22px;
  display: flex;
  flex-flow: column nowrap;
  width: 1080px;
  height: 452px;
  // background-color: #0e0e20;

  &_top {
    padding-top: 36px;
    padding-bottom: 20px;
    padding-left: 60px;
    width: 100%;
    text-align: left;
    font-size: 30px;
    font-weight: 800;
    color: #fff;
  }

  .echarts-con {
    width: 100%;
    height: 100%;
  }
}
</style>

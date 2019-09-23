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
    data() {
      return {
        myEcharts: null,
      }
    },
    props: {
      'age_user': {
        type: Array,
        default: []
      }
    },
    mounted() {
      const {echartsEl} = this.$refs;
      this.myEcharts = echarts.init(echartsEl);
      this.initData(this.age_user)
      setInterval(()=>{
        this.myEcharts.clear();
        this.initData(this.age_user)
      },10000)
    },
    methods: {
      initData(titles) {
        const title = [];
        const serie = [];
        var total = 0;
        for (var i in titles) {
          total += parseInt(titles[i].value);
        }
        if (titles && titles.length > 0) {
          titles.forEach((item, index) => {
            title.push({
              show: true,
              text: item.name,
              textAlign: 'center',
              textStyle: {
                color: '#808080',
                fontSize: 11,
                fontWeight: 'normal',
                textAlign: 'center',
              },
              left: index > 2 ? (20 + (index - 3) * 20) + '%' : (30 + index * 20) + '%',
              top: index > 2 ? null : 65,
              bottom: 15
            })
            serie.push({
              type: 'pie',
              clockWise: true,
              radius: [27, 26],
              startAngle: 90,
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
              center: [index > 2 ? ((index - 3) * 20 + 20) + '%' : (index * 20 + 30) + '%', index > 2 ? 115 : 35],
              data: [
                {
                  value: item.value,
                  label: {
                    formatter(params) {
                      return `${Number(params.value / total).toFixed(2) * 100}%`;
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                      fontSize: '11',
                      fontWeight: 'bold',
                      color: '#fff',
                    },
                  },
                },
                {
                  value: total - parseInt(item.value),
                  itemStyle: {
                    color: '#535353',
                    borderWidth: 0,
                    emphasis: {
                      show: false,
                    },
                  },
                },
              ],
            })
          });
        } else {
          var t = [
            {
              show: true,
              text: '17岁及以下',
              textAlign: 'center',
              textStyle: {
                color: '#808080',
                fontSize: 11,
                fontWeight: 'normal',
                textAlign: 'center',
              },
              left: '30%',
              top: 65,
            },
            {
              show: true,
              text: '18-24',
              textAlign: 'center',
              textStyle: {
                color: '#808080',
                fontSize: 11,
                fontWeight: 'normal',
                textAlign: 'center',
              },
              left: '50%',
              top: 65,
            },
            {
              show: true,
              text: '25-30',
              textAlign: 'center',
              textStyle: {
                color: '#808080',
                fontSize: 11,
                fontWeight: 'normal',
                textAlign: 'center',
              },
              left: '70%',
              top: 65,
            },
            {
              show: true,
              text: '31-35',
              textAlign: 'center',
              textStyle: {
                color: '#808080',
                fontSize: 11,
                fontWeight: 'normal',
                textAlign: 'center',
              },
              left: '20%',
              bottom: 0,
            },
            {
              show: true,
              text: '36-40',
              textAlign: 'center',
              textStyle: {
                color: '#808080',
                fontSize: 11,
                fontWeight: 'normal',
                textAlign: 'center',
              },
              left: '40%',
              bottom: 0,
            },
            {
              show: true,
              text: '41-64',
              textAlign: 'center',
              textStyle: {
                color: '#808080',
                fontSize: 11,
                fontWeight: 'normal',
                textAlign: 'center',
              },
              left: '60%',
              bottom: 0,
            },
            {
              show: true,
              text: '65岁及以上',
              textAlign: 'center',
              textStyle: {
                color: '#808080',
                fontSize: 11,
                fontWeight: 'normal',
                textAlign: 'center',
              },
              left: '80%',
              bottom: 0,
            }
          ];
          var s = [
            {
              type: 'pie',
              clockWise: true,
              radius: [27, 26],
              startAngle: 90,
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
              center: ['30%', 35],
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
                      fontSize: '11',
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
              radius: [27, 26],
              startAngle: 90,
              center: ['50%', 35],
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
                      fontSize: '11',
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
              radius: [27, 26],
              startAngle: 90,
              center: ['70%', 35],
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
                      fontSize: '11',
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
              radius: [27, 26],
              startAngle: 90,
              center: ['20%', 115],
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
                      fontSize: '11',
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
              radius: [27, 26],
              startAngle: 90,
              center: ['40%', 115],
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
                      fontSize: '11',
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
              radius: [27, 26],
              startAngle: 90,
              center: ['60%', 115],
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
                      fontSize: '11',
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
              radius: [27, 26],
              startAngle: 90,
              center: ['80%', 115],
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
                      fontSize: '11',
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
          ]
        }
        const option = {
          title: titles.length > 0 ? title : t,
          series: titles.length > 0 ? serie : s,
        };
        this.myEcharts.setOption(option);
      },
    },
  };
</script>

<style lang="less" scoped>
  /** @format */
  .age-distribution {
    margin-bottom: 22px;
    display: flex;
    flex-flow: column nowrap;
    /*width: 1080px;*/
    /*height: 452px;*/
    width: 367px;
    height: 240px;
    // background-color: #0e0e20;

    &_top {
      padding-top: 16px;
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

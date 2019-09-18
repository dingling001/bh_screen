<template>
  <div class="home">
    <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <full-screen-map v-show="show" class="bottom-map"></full-screen-map>
    </transition>
    <div class="left">
      <current-person-num class="vist-num" v-show="showCurrent"></current-person-num>
      <age-distribution class="age-distribution" :age_user="age_user" v-if="age_user.length"></age-distribution>
      <sex-ratio class="sex-ratio" :sex_user="sex_user" v-if="sex_user.length"></sex-ratio>
    </div>
    <div class="right">
      <register-num class="register-num"></register-num>
      <online-register-num class="online-register"></online-register-num>
      <week-visit-num class="week-visit"></week-visit-num>
    </div>

    <audience-origin class="audience-rogin"></audience-origin>
  </div>
</template>

<script>
  // @ is an alias to /src
  import CurrentPersonNum from '@/components/CurrentPersonNum';
  import RegisterNum from '@/components/RegisterNum';
  import FullScreenMap from '@/components/FullScreenMap';
  import AgeDistribution from '@/components/AgeDistribution';
  import SexRatio from '@/components/SexRatio';
  import OnlineRegisterNum from '@/components/OnlineRegisterNum';
  import WeekVisitNum from '@/components/WeekVisitNum';
  import AudienceOrigin from '@/components/AudienceOrigin';

  export default {
    name: 'home',
    components: {
      CurrentPersonNum,
      RegisterNum,
      FullScreenMap,
      AgeDistribution,
      SexRatio,
      OnlineRegisterNum,
      WeekVisitNum,
      AudienceOrigin,
    },
    data() {
      return {
        show: true,
        showCurrent: true,
        age_user: [],
        sex_user: [],
        people_ck_sum:0
      };
    },
    created() {
      this.get_UserAttr()
      setInterval(() => {
        this.get_UserAttr()
      }, 3000)
    },
    methods: {
      get_UserAttr() {
        this.$api.UserAttr().then(res => {
          this.age_user = res.data.age_stat.data;
          this.sex_user = res.data.sex_stat.data;
        }).catch((err) => {
          this.age_user = [
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
          this.sex_user = [
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
        })
      },
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .home {
    position: relative;
    height: 768px;


    .vist-num {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      /*background-image: url('../assets/zuozhezhao.png');*/
      /*background-size: cover;*/
      /*background-repeat: no-repeat;*/
      /*background-position: center;*/
    }

    .bottom-map {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .register-num {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;

      /*background-image: url('../assets/youzhezhao.png');*/
      /*background-size: cover;*/
      /*background-repeat: no-repeat;*/
      /*background-position: center;*/
    }

    .age-distribution {
      position: absolute;
      /*top: 480 + 22px;*/
      top: 251px;
      left: 0;
      z-index: 2;

      background-image: url('../assets/zuozhezhao.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .sex-ratio {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;

      background-image: url('../assets/zuozhezhao.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .online-register {
      position: absolute;
      /*    top: 480 + 22px;*/
      top: 269px;
      right: 0;
      z-index: 2;

      background-image: url('../assets/youzhezhao.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .week-visit {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 2;

      background-image: url('../assets/youzhezhao.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .audience-origin {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      background-image: url('../assets/xiazhezhao.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
</style>

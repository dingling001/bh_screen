<template>
  <div class="home">
    <!--    <transition enter-active-class="animated" leave-active-class="animated zoomOut">-->
    <full-screen-map :class="['bottom-map animated', showmap?'zoomIn':'zoomOut']" :vistNumber="keliu_info.in_num"
                     :areatop="areatop"
    >
    </full-screen-map>
    <!--    </transition>-->
    <div class="left animated slideInLeft">
      <div class="hr top"></div>
      <div class="hr bottom"></div>
      <current-person-num class="vist-num  animated fadeInLeft " :stay_num="keliu_info.stay_num"
                          :datalist="keliu_info.data_list"
                          v-if="showmap"></current-person-num>
      <age-distribution class="age-distribution animated fadeInLeft  delay-1s" :age_user="age_user"
                        v-if="showmap"></age-distribution>
      <sex-ratio class="sex-ratio animated fadeInLeft delay-2s" :sex_user="sex_user" v-if="showmap"></sex-ratio>
    </div>
    <div class="right animated slideInRight">
      <div class="hr top"></div>
      <div class="hr bottom"></div>
      <register-num class="register-num animated fadeInRight" :mdata="mdata"
                    v-if="showdata"></register-num>
      <online-register-num class="online-register animated fadeInRight delay-1s" :onlinedata="onlinedata"
                           v-if="showdata"></online-register-num>
      <week-visit-num class="week-visit animated fadeInRight delay-2s" :people_line="people_line"
                      v-if="showdata"></week-visit-num>
    </div>
    <audience-origin class="audience-rogin animated fadeInUp delay-3s" v-if="showmap"></audience-origin>
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
        age_user: [],//年龄数据
        sex_user: [],//性别数据
        people_ck_sum: 0,
        keliu_info: {
          data_list: [],//当前在馆人数
        },
        mdata: {},
        count: 0,
        onlinedata: {},
        showdata: false,
        showmap: false,
        areatop: [],
        origin: [],
        people_line: []
      };
    },
    created() {
    },
    props: ['sindex'],
    watch: {
      'sindex'() {
        console.log(this.sindex)
        if (this.sindex == 0) {
          this.showmap = true;
          this.showdata = Object.keys(this.mdata).length && Object.keys(this.onlinedata).length && this.people_line.length
        } else {
          this.showmap = false;
          this.showdata = false;
        }
      }
    },
    mounted() {
      this.get_UserAttr();
      this.get_KeliuInfo();
      this.get_Member();
      this.get_StatUserNum();
      this.get_YyCkData();
      setInterval(() => {
        this.get_UserAttr();
        this.get_KeliuInfo();
        this.get_Member();
        this.get_StatUserNum();
        this.get_YyCkData();
        // this.keliu_info.stay_num=0;
      }, 30000);
    },
    methods: {
      // 用户属性
      get_UserAttr() {
        this.$api.UserAttr().then(res => {
          this.showmap = true;
          this.age_user = res.data.age_stat.data;
          this.sex_user = res.data.sex_stat.data;
          this.areatop = res.data.area_top;
          this.origin = res.data.area_top.splice(0, 20);
          // console.log(this.origin)
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
      // 客流
      get_KeliuInfo() {
        this.$api.KeliuInfo().then(res => {
          // console.log(res)
          this.showdata = true;
          this.keliu_info = res.data;
          this.keliu_info.data_list = res.data.data_list;
        })
      },
      // 会员注册情况
      get_Member() {
        this.$api.Member().then((res) => {
          this.mdata = res.data;
        })
      },
      // 线上会员注册情况
      get_StatUserNum() {
        this.$api.StatUserNum().then(res => {
          this.onlinedata = res.data;
        })
      },
      // 获取7日进馆人数
      get_YyCkData() {
        this.$api.YyCkData().then(res => {
          this.people_line = res.data.people_line;
        })
      }
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
      position: absolute;
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
      top: 240px;
      left: 0;
      z-index: 2;

      /*background-image: url('../assets/zuozhezhao.png');*/
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .sex-ratio {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 2;

      /*background-image: url('../assets/zuozhezhao.png');*/
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .online-register {
      position: absolute;
      /*    top: 480 + 22px;*/
      top: 240px;
      right: 0;
      z-index: 2;

      /*background-image: url('../assets/youzhezhao.png');*/
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .week-visit {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 2;

      /*background-image: url('../assets/youzhezhao.png');*/
      /*background-size: cover;*/
      /*background-repeat: no-repeat;*/
      /*background-position: center;*/
    }

    .audience-origin {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 2;
      /*background-image: url('../assets/xiazhezhao.png');*/
      /*background-size: cover;*/
      /*background-repeat: no-repeat;*/
      /*background-position: center;*/
    }
  }
</style>

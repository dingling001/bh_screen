<template>
  <div class="home">
    <!--    <transition enter-active-class="animated" leave-active-class="animated zoomOut">-->
    <full-screen-map :class="['bottom-map animated', area_top.length?'zoomIn':'zoomOut']" :vistNumber="keliu_info.in_num"
                     :areatop="area_top"
                     v-if="area_top.length">
    </full-screen-map>
    <!--    </transition>-->
    <div class="left animated slideInLeft">
      <div class="hr top"></div>
      <div class="hr bottom"></div>
      <current-person-num class="vist-num  animated fadeInLeft" :stay_num="keliu_info.stay_num"
                          :datalist="keliu_info.data_list"
                          v-if="keliu_info.data_list.length"></current-person-num>
      <age-distribution class="age-distribution animated fadeInLeft  delay-1s" :age_user="age_user"
                        v-if="age_user.length"></age-distribution>
      <sex-ratio class="sex-ratio animated fadeInLeft delay-2s" :sex_user="sex_user" v-if="sex_user.length"></sex-ratio>
    </div>
    <div class="right animated slideInRight">
      <div class="hr top"></div>
      <div class="hr bottom"></div>
      <register-num class="register-num animated fadeInRight" :mdata="mdata"
                    v-if="Object.keys(mdata).length"></register-num>
      <online-register-num class="online-register animated fadeInRight delay-1s" :onlinedata="onlinedata"
                           v-if="Object.keys(onlinedata).length"></online-register-num>
      <week-visit-num class="week-visit animated fadeInRight delay-2s" :people_line="people_line"
                      v-if="people_line.length"></week-visit-num>
    </div>
    <audience-origin class="audience-rogin animated fadeInUp delay-3s" :origin="origin" v-if="origin.length"></audience-origin>
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
        area_top: [],
        origin: [],
        people_line: [],
        testKeLiu: [
          {
            time: '10:00',
            num: 100
          },
          {
            time: '11:00',
            num: 200
          },
          {
            time: '12:00',
            num: 500
          },
          {
            time: '13:00',
            num: 1500
          },
          {
            time: '14:00',
            num: 1120
          }
        ]
      };
    },
    created() {
    },
    props: ['sindex'],
    watch: {
      'sindex'() {
        // console.log(this.sindex)
        if (this.sindex == 0) {
          this.showmap = true;
          this.showdata = Object.keys(this.mdata).length && Object.keys(this.onlinedata).length && this.people_line.length
          this.get_UserAttr();
          this.get_KeliuInfo();
          this.get_Member();
          this.get_StatUserNum();
          this.get_YyCkData();
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
        this.keliu_info.data_list=[];
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
          this.age_user = res.data.age_stat.data;
          this.sex_user = res.data.sex_stat.data;
          this.area_top = res.data.area_top;
          // console.log(this.area_top)
          this.origin = res.data.area_top;
          // console.log(this.origin)
        }).catch((err) => {
        })
      },
      // 客流
      get_KeliuInfo() {
        this.$api.KeliuInfo().then(res => {
          // console.log(res)
          this.showdata = true;
          this.keliu_info = res.data;
          if (res.data.data_list.length > 0) {
            this.keliu_info.data_list = res.data.data_list;
          } else {
            this.keliu_info.data_list = this.testKeLiu;
          }
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

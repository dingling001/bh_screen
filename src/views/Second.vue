<template>
  <div class="home">
    <video-full-screen class="bottom-map" :auto="autoplay" v-if="autoplay"></video-full-screen>
    <div class="left">
      <div class="hr top"></div>
      <div class="hr bottom"></div>
      <child-playground-compared class="vist-num animated fadeInLeft" :peopleline="people_line"
                                 v-if="people_line.length"></child-playground-compared>
      <accumulative-num class="age-distribution animated fadeInLeft " :childrenyysum="children_yy_sum"
                        :childrencksum="children_ck_sum" :peoplepbnum="people_pb_num"
                        :peopleyysum="people_yy_sum"
                        v-if="children_yy_sum||children_ck_sum||people_pb_num||people_yy_sum">
      </accumulative-num>
      <child-age-distribution class="sex-ratio animated fadeInLeft delay-1s" :agestat="age_stat"
                              v-if="age_stat.length"></child-age-distribution>
    </div>
    <div class="right">
      <div class="hr bottom"></div>
      <popular-exs class="register-num animated  fadeInRight" :exhibition="exhibition"
                   v-if="exhibition.length"></popular-exs>
      <popular-production class="week-visit animated fadeInRight delay-1s" :exhibit="exhibit"
                          v-if="exhibit.length"></popular-production>
    </div>
  </div>
</template>

<script>
  import AccumulativeNum from '@/components/AccumulativeNum';
  import VideoFullScreen from '@/components/VideoFullScreen';
  import ChildPlaygroundCompared from '@/components/ChildPlaygroundCompared';
  import ChildAgeDistribution from '@/components/ChildAgeDistribution';
  import PopularExs from '@/components/PopularExs';
  import PopularProduction from '@/components/PopularProduction';

  export default {
    data() {
      return {
        people_line: [],
        children_yy_sum: 0,
        children_ck_sum: 0,
        people_pb_num: 0,
        people_yy_sum: 0,
        age_stat: [],
        showchlid: false,
        exhibit: [],
        exhibition: [],
        autoplay: false
      }
    },
    components: {
      VideoFullScreen,
      ChildPlaygroundCompared,
      AccumulativeNum,
      ChildAgeDistribution,
      PopularExs,
      PopularProduction,
    },
    mounted() {
      // this.get_ChildrenYyCkData();
      // this.get_ExhibitStat();
    },
    props: ['sindex'],
    watch: {
      'sindex'() {
        if (this.sindex == 1) {
          this.$nextTick(() => {
            this.autoplay = true;
            this.get_ChildrenYyCkData();
            this.get_ExhibitStat();
          })
        } else {
          this.autoplay = false;
          // this.people_line = [];
          // this.children_yy_sum = 0;
          // this.children_ck_sum = 0;
          // this.people_pb_num = 0;
          // this.people_yy_sum = 0;
          // this.age_stat = [];
          // this.exhibition = [];
          // this.exhibit = [];
        }
      }
    },
    methods: {
      // 获取儿童数据
      get_ChildrenYyCkData() {
        this.$api.ChildrenYyCkData().then(res => {
          this.people_line = res.data.people_line;
          this.children_yy_sum = res.data.children_yy_sum;
          this.children_ck_sum = res.data.children_ck_sum;
          this.people_pb_num = parseInt(res.data.people_pb_sum) + 12;
          console.log(res.data.people_pb_sum)
          this.people_yy_sum = res.data.people_yy_sum;
          this.age_stat = res.data.age_stat.data;
        })
      },
      get_ExhibitStat() {
        this.$api.ExhibitStat().then(res => {
          this.exhibit = res.data.exhibit;
          this.exhibition = res.data.exhibition;
        })
      }
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .home {
    position: relative;
    width: 100%;
    height: 768px;
    /*height: ~'calc(100% - 112px)';*/
    /*background-color: rgba(0, 0, 0, 0.3);*/

    .vist-num {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      /*background-image: url('../assets/zuozhezhao.png');*/
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .bottom-map {
      position: absolute;
      top: -54px;
      bottom: 0;
      right: 0;
      margin: auto;
      left: 0;
      z-index: 2;
    }

    .register-num {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;

      /*background-image: url('../assets/youzhezhao.png');*/
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .age-distribution {
      position: absolute;
      top: 300px;
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
      top: 395px;
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

      /*background-image: url('../assets/xiazhezhao.png');*/
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .top {
      top: 260px;
    }

    .right {
      .bottom {
        bottom: 344px;
      }
    }
  }
</style>

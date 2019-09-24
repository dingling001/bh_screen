<template>
  <div class="home">
    <hot-map class="bottom-map" :staylist="staylist" v-if="showgame"></hot-map>
    <div class="left">
      <div class="hr top"></div>
      <div class="hr bottom"></div>
      <gamefeeltotal class="vist-num animated fadeInLeft" v-if="showgame" :total="total" :list="list"></gamefeeltotal>
      <game-feel-top class="age-distribution animated fadeInLeft delay-1s" :topfive="topfive"
                     v-if="showgame"></game-feel-top>
      <gametop class="sex-ratio animated fadeInLeft delay-2s" :gamedata="gamedata" v-if="showgame"></gametop>
    </div>
    <div class="right">
      <div class="hr top"></div>
      <div class="hr bottom"></div>
      <cinema-num class="register-num animated fadeInRight " :clist="clist" :ctotal="ctotal"
                  v-if="showgame"></cinema-num>
      <cinema-week-num class="online-register animated fadeInRight delay-1s" :attendancerate="attendance_rate"
                       v-if="showgame"></cinema-week-num>
      <cinema-rank class="week-visit animated fadeInRight delay-2s" v-if="showgame" :mlist="mlist"></cinema-rank>
    </div>
  </div>
</template>

<script>
  import HotMap from '@/components/HotMap';
  import Gamefeeltotal from '@/components/Gamefeeltotal';
  import GameFeelTop from '@/components/GameFeelTop';
  import Gametop from '@/components/Gametop';
  import CinemaNum from '@/components/CinemaNum';
  import CinemaWeekNum from '@/components/CinemaWeekNum';
  import CinemaRank from '@/components/CinemaRank';

  export default {
    data() {
      return {
        topfive: [],
        showgame: false,
        total: 0,
        list: [],
        gamedata: [],
        clist: [],
        ctotal: 0,
        attendance_rate: [],
        mlist: [],
        staylist: []
      }
    },
    components: {
      HotMap,
      Gamefeeltotal,
      GameFeelTop,
      Gametop,
      CinemaNum,
      CinemaWeekNum,
      CinemaRank,
    },
    mounted() {
      this.get_HelloTop();
    },
    watch: {
      'sindex'() {
        this.showgame = this.sindex == 2;
        this.get_HelloTop();
        this.get_hello();
        this.get_Game();
        this.get_CinemaStat();
        this.get_KeliuDataStat();
      }
    },
    props: ['sindex'],
    methods: {
      // 获取top5数据
      get_HelloTop() {
        this.$api.HelloTop().then(res => {
          // console.log(res)
          this.topfive = res.data;
        })
      },

      // 获取7日对比数据
      get_hello() {
        this.$api.Hello().then(res => {
          this.total = res.data.total;
          this.list = res.data.list;
        })
      },
      // 游戏高分
      get_Game() {
        this.$api.Game().then(res => {
          // console.log(res)
          this.gamedata = res.data;
        })
      },
      // 获取电影数据
      get_CinemaStat() {
        this.$api.CinemaStat().then(res => {
          console.log(res)
          this.clist = res.data.buy.list;
          this.ctotal = parseInt(res.data.buy.total, 10);
          this.attendance_rate = res.data.attendance_rate;
          this.mlist = res.data.movie_list;
        })
      },
      // 获取楼层客流
      get_KeliuDataStat() {
        this.$api.KeliuDataStat().then(res => {
          console.log(res)
          this.staylist = res.data;
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
    /*height: ~'calc(100% - 112px)';*/
    /*background-color: rgba(0, 0, 0, 0.3);*/
    height: 768px;

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
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-image: url("../assets/thrid_bg.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    .register-num {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      bottom: inherit;
      /*background-image: url('../assets/youzhezhao.png');*/
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .age-distribution {
      position: absolute;
      /*<!--top: 480 + 22px;-->*/
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
  }
</style>

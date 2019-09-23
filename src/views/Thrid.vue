<template>
  <div class="home">
    <hot-map class="bottom-map"></hot-map>
    <div class="left">
      <gamefeeltotal class="vist-num" v-if="showgame" :total="total" :list="list"></gamefeeltotal>
      <game-feel-top class="age-distribution" :topfive="topfive" v-if="showgame"></game-feel-top>
      <gametop class="sex-ratio"></gametop>
    </div>
    <div class="right">
      <cinema-num class="register-num "></cinema-num>
      <cinema-week-num class="online-register"></cinema-week-num>
      <cinema-rank class="week-visit"></cinema-rank>
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
        list:[]
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
      }
    },
    props: ['sindex'],
    methods: {
      // 获取top5数据
      get_HelloTop() {
        this.$api.HelloTop().then(res => {
          console.log(res)
          this.topfive = res.data;
        })
      },
      get_hello() {
        this.$api.Hello().then(res => {
          console.log(res)
          this.total = res.data.total;
          this.list=res.data.list;
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
      top: 54px;
      left: 0;
      z-index: 2;
      background-image: url('../assets/zuozhezhao.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .bottom-map {
      position: fixed;
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
      top: 54px;
      right: 0;
      z-index: 2;
      bottom: inherit;
      background-image: url('../assets/youzhezhao.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .age-distribution {
      position: absolute;
      /*<!--top: 480 + 22px;-->*/
      top: 280px;
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
      top: 280px;
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

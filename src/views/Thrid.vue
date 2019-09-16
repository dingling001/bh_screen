<template>
  <div class="home">
    <hot-map class="bottom-map"></hot-map>
    <gamefeeltotal class="vist-num"></gamefeeltotal>
    <game-feel-top class="age-distribution"></game-feel-top>
    <gametop class="sex-ratio"></gametop>
    <cinema-num class="register-num "></cinema-num>
    <cinema-week-num class="online-register"></cinema-week-num>
    <cinema-rank class="week-visit"></cinema-rank>
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
    components: {
      HotMap,
      Gamefeeltotal,
      GameFeelTop,
      Gametop,
      CinemaNum,
      CinemaWeekNum,
      CinemaRank
    }
  };
</script>

<style lang="less" scoped>
  /** @format */
  .home {
    position: relative;
    width: 100%;
    height: ~'calc(100% - 112px)';
    background-color: rgba(0, 0, 0, 0.3);

    .vist-num {
      position: absolute;
      top: 0;
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
    }

    .register-num {
      position: absolute;
      top: 0;
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
      top: 480 + 22px;
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
      top: 5.02rem;
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

<template>
  <div class="home">
    <video-full-screen class="bottom-map"></video-full-screen>
    <div class="left">
      <child-playground-compared class="vist-num"></child-playground-compared>
      <accumulative-num class="age-distribution"></accumulative-num>
      <child-age-distribution class="sex-ratio"></child-age-distribution>
    </div>
    <div class="right">
      <popular-exs class="register-num"></popular-exs>
      <popular-production class="week-visit"></popular-production>
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
    components: {
      VideoFullScreen,
      ChildPlaygroundCompared,
      AccumulativeNum,
      ChildAgeDistribution,
      PopularExs,
      PopularProduction,
    },
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
    }

    .register-num {
      position: absolute;
      top: 54px;
      right: 0;
      z-index: 2;

      background-image: url('../assets/youzhezhao.png');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }

    .age-distribution {
      position: absolute;
      top: 350px;
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
      top: 395px;
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

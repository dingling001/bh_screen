<template>
  <div class="home">
    <transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <full-screen-map v-show="show" class="bottom-map"></full-screen-map>
    </transition>

    <current-person-num class="vist-num" v-show="showCurrent"></current-person-num>
    <register-num class="register-num"></register-num>
    <age-distribution class="age-distribution"></age-distribution>
    <sex-ratio class="sex-ratio"></sex-ratio>
    <online-register-num class="online-register"></online-register-num>
    <week-visit-num class="week-visit"></week-visit-num>
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
    };
  },
};
</script>

<style lang="less" scoped>
/** @format */
.home {
  position: relative;
  height: 1428px;
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
  }

  .register-num {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;

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
    top: 480 + 22px;
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

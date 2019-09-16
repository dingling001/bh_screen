<template>
  <div class="child-age">
    <div class="child-age_top">
      <span>“你好智能”游戏分数最高纪录</span>
    </div>
    <div class="gamelist">
      <div class="gameitem">
        <div class="left ">
          <div class="gametitle">游戏名称</div>
          <div class="gamename gamename1">太空飞船</div>
        </div>
        <div class="left">
          <div class="gamehead"><img src="../assets/logo.png" alt=""></div>
          <div class="gameperson">
            <div class="personname">孙海燕</div>
            <div class="persontype">特级宇航员</div>
          </div>
        </div>
        <div class="left">
          <div class="gametitle">分数</div>
          <div class="gamename">
            <ICountUp :delay="delay" :endVal="endVal" :options="options" @ready="onReady"/>
          </div>
        </div>
      </div>
      <div class="gameitem">
        <div class="left ">
          <div class="gametitle">游戏名称</div>
          <div class="gamename gamename2">太空捡垃圾</div>
        </div>
        <div class="left">
          <div class="gamehead"><img src="../assets/logo.png" alt=""></div>
          <div class="gameperson">
            <div class="personname">孙海燕</div>
            <div class="persontype">特级宇航员</div>
          </div>
        </div>
        <div class="left">
          <div class="gametitle">分数</div>
          <div class="gamename">
            <ICountUp :delay="delay" :endVal="endVal" :options="options" @ready="onReady"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import ICountUp from 'vue-countup-v2';

  export default {
    data() {
      return {
        delay: 1000,
        endVal: 120500,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        }
      }
    },
    components: {
      ICountUp
    },
    mounted() {

    },
    methods: {
      onReady: function (instance, CountUp) {
        const that = this;
        instance.update(that.endVal);
      }
    },
  };
</script>

<style lang="less" scoped>
  /** @format */
  .child-age {
    display: flex;
    flex-flow: column nowrap;
    width: 1080px;
    height: 452px;

    &_top {
      padding-top: 36px;
      padding-bottom: 20px;
      padding-left: 60px;
      width: 100%;
      text-align: left;
      font-size: 30px;
      font-weight: 800;
      color: #fff;
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }

  .gamelist {
    padding: 59px 0 0 0;

    .gameitem {
      overflow: hidden;
      margin-bottom: 50px;

      .left {
        float: left;
        width: 33%;
        overflow: hidden;

        .gametitle {
          font-size: 16px;
          color: #D8D8D8;
          padding: 12px 0;
        }

        .gamename {
          font-size: 20px;
          font-weight: bold;
          color: #fff;

          &.gamename1 {
            color: #1787EB;
          }

          &.gamename2 {
            color: #C212F5;
          }
        }

        .gamehead {
          width: 71px;
          height: 71px;
          text-align: center;
          line-height: 71px;
          float: left;
          margin-right: 30px;

          img {
            width: 100%;
            vertical-align: middle;
          }
        }

        .gameperson {
          float: left;
          height: 71px;

          .personname {
            font-size: 22px;
            color: #fff;
            padding-bottom: 14px;
          }

          .persontype {
            font-size: 16px;
            color: #fff;
          }
        }

      }
    }
  }
</style>

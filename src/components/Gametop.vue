<template>
  <div class="child-age">
    <div class="child-age_top">
      <span>“你好智能”游戏分数最高纪录</span>
    </div>
    <div class="gamelist">
      <div class="gameitem" v-for="(item,index) in gamedata">
        <div class="gleft ">
          <div class="gametitle">游戏名称</div>
          <div :class="['gamename',index==0?'gamename1':'gamename2']">{{item.game_name}}</div>
        </div>
        <div class="gleft">
          <div class="gamehead">
            <img :src="item.avatar" alt="" v-if="item.avatar">
          </div>
          <div class="gameperson">
            <div class="personname">{{item.name}}</div>
            <div class="persontype">{{item.rank}}</div>
          </div>
        </div>
        <div class="gleft">
          <div class="gametitle">分数</div>
          <div class="gamename">
            <span>{{item.score}}</span>
            <!--            <ICountUp :delay="delay" :endVal="item.score" :options="options" @ready="onReady"/>-->
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
          suffix: '',
        },
      };
    },
    components: {
      ICountUp,
    },
    props: {
      'gamedata': {
        type: Array,
        default: []
      }
    },
    mounted() {

    },
    methods: {
      onReady(instance, CountUp) {
        const that = this;
        instance.update(that.endVal);
      },
    },
  };
</script>

<style lang="less" scoped>
  /** @format */
  .child-age {
    display: flex;
    flex-flow: column nowrap;
    /*width: 1080px;*/
    /*height: 452px;*/
    width: 100%;
    height: 280px;

    &_top {
      /*padding-top:25px;*/
      /*padding-bottom: 20px;*/
      /*padding-left: 60px;*/
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;
      padding: 18px 30px;
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }

  .gamelist {
    padding: 10px 0 0 0;

    .gameitem {
      overflow: hidden;
      margin-bottom: 10px;

      .gleft {
        float: left;
        width: 33%;
        overflow: hidden;

        .gametitle {
          font-size: 10px;
          color: #D8D8D8;
          padding: 12px 0;
        }

        .gamename {
          font-size: 12px;
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
          width: 44px;
          height: 44px;
          text-align: center;
          line-height: 71px;
          float: left;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            width: 100%;
            vertical-align: middle;
          }
        }

        .gameperson {
          float: left;
          height: 71px;

          .personname {
            font-size: 13px;
            color: #fff;
            padding-bottom: 14px;
          }

          .persontype {
            font-size: 10px;
            color: #fff;
          }
        }

      }
    }
  }
</style>

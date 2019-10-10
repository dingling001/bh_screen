<template>
  <div class="child-age">
    <div class="child-age_top">
      <span>“你好智能”游戏分数最高纪录</span>
    </div>
    <div class="gamelist">
      <div class="gameitem" v-for="(item,index) in game_data">
        <div class="gleft ">
          <div class="gametitle">游戏名称</div>
          <div :class="['gamename',index==0?'gamename1':'gamename2']">{{item.game_name}}</div>
        </div>
        <div class="gleft mid">
          <div
            :class="['gamehead',item.score>=0&&item.score<=3?'chuji':'',item.score>3&&item.score<=10?'zhongji':'',item.score>30?'teji':'']">
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
        game_data: []
      };
    },
    components: {
      ICountUp,
    },
    watch: {
      'gamedata'(newValue, oldValue) {
        for (let i = 0; i < newValue.length; i++) {
          if (oldValue[i] != newValue[i]) {
            this.game_data = newValue
          }
        }
      },
    },
    props: {
      'gamedata': {
        type: Array,
        default: []
      }
    },
    mounted() {
      this.game_data = this.gamedata;
      var gatop = setInterval(() => {
        this.game_data = [];
        this.game_data = this.gamedata;
      }, 10000)
    }
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
    height: 200px;

    &_top {
      /*padding-top:25px;*/
      /*padding-bottom: 20px;*/
      /*padding-left: 30px;*/
      width: 100%;
      text-align: left;
      font-size: 14px;
      font-weight: 800;
      color: #fff;
      /*padding: 18px 30px;*/
      padding-top: 14px;
      padding-bottom: 20px;
      padding-left: 30px;
    }

    .echarts-con {
      width: 100%;
      height: 100%;
    }
  }

  .gamelist {
    padding: 10px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

    .gameitem {
      overflow: hidden;
      /*margin-bottom: 10px;*/
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 129px 0 34px;

      .gleft {
        /*float: left;*/
        /*width: 33%;*/
        overflow: hidden;

        .gametitle {
          font-size: 10px;
          color: #D8D8D8;
          padding: 0 0 9px 0;
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
          line-height: 35px;
          float: left;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-repeat: no-repeat;
          background-size: cover;
          margin-right: 20px;

          img {
            vertical-align: middle;
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
        }

        .chuji {
          background-image: url("../assets/chuji.png");
        }

        .zhongji {
          background-image: url("../assets/zhongji.png");
        }

        .gaoji {
          background-image: url("../assets/gaoji.png");
        }

        .teji {
          background-image: url("../assets/teji.png");
        }


        .gameperson {
          float: left;

          .personname {
            font-size: 13px;
            color: #fff;
            padding-bottom: 10px;
          }

          .persontype {
            font-size: 10px;
            color: #fff;
          }
        }

      }

      .mid {
        /*width: 34%;*/
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>

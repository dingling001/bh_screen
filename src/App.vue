<template>
  <div id="app">
    <div id="header">
      <div class="wether head_left">
            <span>
                   <span class="l1" :style="{color:wlist[windex]}">
                       <span class="iconfont iconwendu" :style="{color:wlist[windex]}"></span><span>{{tmp}} ℃</span>
                     </span>
            <span
              :class="['l2',qlty=='良'?'color1':'',qlty=='轻度污染'?'color2':'',qlty=='中度污染'?'color3':'',qlty=='重度污染'?'color4':'',qlty=='严重污染'?'color5':'' ]">
                <span :class="['iconfont iconshuye' ]"></span>
                <span>{{qlty}}</span>
            </span>
            <span class="l3">
              <span class="cloudy">
                <img :src="cond_src" alt="">
            </span>
            <span>{{cond_txt}}</span>
            </span>
            </span>
      </div>
      <div class="title">滨海科技馆数据展示平台</div>
      <div class="time">
        <div class="clock"></div>
        <div class="time-con">{{nowdate}}</div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        nowdate: '',
        tmp: 0,//温度
        qlty: '优',//空气质量
        cond_txt: '晴',
        cond_code: '100',
        newdate: '获取时间中...',
        windex: 4,
        wlist: [
          '#49008D',
          '#0C43C4',
          '#0294FB',
          '#5EB7FB',
          '#AAF3F7',
          '#FFFEBD',
          '#FFDB63',
          '#FFAA01',
          '#FE6400',
          '#E40001',
          '#A00010',
          '#640000'
        ],
        cond_src: ''
      }
    },
    created() {
      var vm = this;
      setInterval(function () {
        var date = new Date();
        var options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };
        vm.nowdate = date.toLocaleDateString('chinese', options);
      }, 1000);
      this.get_setWeather();
    },

    methods: {
      // 设置天气
      get_setWeather: function () {
        var vm = this;
        this.$api.SetWeather().then(rlt => {
          if (rlt.HeWeather6[0].status == 'ok') {
            var now = rlt.HeWeather6[0].now;
            vm.tmp = now.tmp;
            var tmp = parseInt(vm.tmp);
            if (tmp <= -25) {
              vm.windex = 0;
            } else if (tmp > -25 && tmp <= -15) {
              vm.windex = 1;
            } else if (tmp > -15 && tmp <= -10) {
              vm.windex = 2;
            } else if (tmp > -10 && tmp <= -5) {
              vm.windex = 3;
            } else if (tmp > -5 && tmp <= 0) {
              vm.windex = 4;
            } else if (tmp > 6 && tmp <= 15) {
              vm.windex = 5;
            } else if (tmp > 15 && tmp <= 20) {
              vm.windex = 6;
            } else if (tmp > 20 && tmp <= 25) {
              vm.windex = 7;
            } else if (tmp > 25 && tmp <= 30) {
              vm.windex = 8;
            } else if (tmp > 30 && tmp <= 40) {
              vm.windex = 9;
            } else if (tmp > 40) {
              vm.windex = 10;
            }
            vm.cond_code = now.cond_code;
            vm.cond_src = './assets/cloudys/cond_icon_' + now.cond_code + '.png'
            vm.cond_txt = now.cond_txt;
          }
        })
      },
    }
  }
</script>
<style lang="less">
  /** @format */

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 768px;
    overflow: hidden;
    background-color: #000;
    font-size: 18px;
    // width: 3840px;
  }

  #header {
    position: relative;
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    z-index: 9999;

    > .wether {
      font-size: 22px;
      flex: 1;
    }

    .title {
      margin: 0 auto;
      font-size: 22px;
      font-weight: bold;
      flex: 1;
    }

    .time {
      flex: 1;
      font-size: 22px;
      font-weight: bold;
    }
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .head_left span {
    font-size: .18rem;
    font-weight: bold;
    display: inline-block;

    .iconwendu {
      color: #FDB201;
      font-size: .3rem;
    }

    .iconshuye {
      color: #0FDA00;
      font-size: .3rem;
      font-weight: normal;
      transition: .3s all;
    }

    .color1 {
      span {
        color: #FFFF00;
      }
    }

    .color2 {
      span {
        color: #FF7E00;

      }
    }

    .color3 span {
      color: #FE0000;
    }

    .color4 span {
      color: #97014B;
    }

    .color5 span {
      color: #7D0022;
    }

    .l1 {
      margin-right: .36rem;
      font-size: .18rem;
    }

    .wcolor0 span {
      color: #0FDA00;
    }

    .l2 {
      color: #3ACE74;
      font-size: .18rem;
      margin-right: .36rem;
    }

    .l3 {
      color: #AAE9FF;

      .cloudy {
        width: .39rem;
        height: .39rem;
        position: relative;
        margin-right: .05rem;

        img {
          width: 100%;
          position: absolute;
          left: 0;
          right: 0;
          margin: 0 auto;
          top: .1rem;
        }
      }
    }
  }

</style>

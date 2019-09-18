<template>
  <div id="app">
    <div id="header">
      <div class="wether"><span></span></div>
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
    data(){
      return{
        nowdate:''
      }
    },
    created() {
      var vm=this;
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
</style>

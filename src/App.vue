<template>
  <div id="app">
    <div id="header">
      <div class="wether"></div>
      <div class="title">滨海科技馆数据展示平台</div>
      <div class="time">
        <div class="clock"></div>
        <div class="time-con">2019年06月30日 14:52:44</div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
/** @format */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1536px;
  overflow: hidden;
  background-color: #000;
  font-size: 18px;
  // width: 3840px;
}
#header {
  position: relative;
  width: 100%;
  height: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  z-index: 9999;

  > .wether {
    width: 960px;
    font-size: 22px;
  }

  .title {
    margin: 0 auto;
    font-size: 43px;
    font-weight: bold;
  }

  .time {
    width: 960px;
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

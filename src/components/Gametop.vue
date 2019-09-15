<template>
  <div class="child-age">
    <div class="child-age_top">
      <span>“你好智能”游戏分数最高纪录</span>
    </div>
    <div class="gamelist">
      <div class="gameitem">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {

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
</style>

<template>
  <div class="hot-map">
    <div class="center">
      <p>当前馆内观众热力图</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/** @format */
.hot-map {
  width: 100%;
  height: 1536px;
  .center {
    position: relative;
    width: 1680px;
    margin: 0 auto;
    height: 1536px;
    padding-top: 112px;
    padding-left: 120px;
    padding-right: 120px;
    > p {
      position: absolute;
      top: 170px;
      left: 120px;
      font-size: 30px;
      font-weight: bold;
      color: #fff;
      text-align: left;
    }
  }
}
</style>

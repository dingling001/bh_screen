<template>
  <div class="hot-map">
    <div class="center">
      <p>当前馆内观众热力图</p>
      <div class="heat-type" style=" background-image: url(../assets/relitu@2x.png);"></div>
      <div class="cont">
        <ul>
          <li style="margin-top: 5.5rem;">
            <div class="heattitle">
              <div class="r1">
                <div class="c1">1F</div>
                <div class="c2 status1">正常</div>
              </div>
            </div>
            <div class="heatchart" id="chart4_1" style=" background-image: url(../assets/1F.png);"></div>
          </li>
          <li>
            <div class="heattitle">
              <div class="r1">
                <div class="c1">2F</div>
                <div class="c2 status1">正常</div>
              </div>
            </div>
            <div class="heatchart" id="chart4_2" style=" background-image: url(../assets/2F.png);"></div>
          </li>
          <li>
            <div class="heattitle">
              <div class="r1">
                <div class="c1">3F</div>
                <div class="c2 status1">正常</div>
              </div>
            </div>
            <div class="heatchart" id="chart4_3" style=" background-image: url(../assets/3F.png);"></div>
          </li>
        </ul>
      </div>
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

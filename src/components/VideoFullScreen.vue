<template>
  <div class="video-bg">
    <video src="../video/index-4.mp4" autoplay="true" muted="true" loop="true"></video>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
/** @format */
.video-bg {
  width: 100%;
  height: 1536px;
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

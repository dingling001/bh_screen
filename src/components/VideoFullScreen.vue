<template>
  <div class="video-bg">
    <video src="../video/i.mp4" autoplay="true" muted="true" loop="true" preload="auto"></video>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
/** @format */
.video-bg {
  width: 100%;
  height: 768px;
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

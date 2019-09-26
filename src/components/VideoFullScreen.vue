<template>
  <div class="video-bg">
    <video loop preload="auto" muted="muted" autoplay id="video">
      <source src="../video/i.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style lang="less" scoped>
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

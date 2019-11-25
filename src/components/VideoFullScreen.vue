<template>
  <div class="video-bg">
    <video loop preload="auto" muted="muted" :autoplay="auto" id="video">
<!--      <source src="../video/i.mp4" type="video/mp4">-->
      <source src="../video/v.ogg" type="video/ogg">
    </video>
  </div>
</template>
<script>
  export default {
    props: {
      'auto': {
        type: Boolean,
        default: false
      }
    },
  }
</script>
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

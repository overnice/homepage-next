<template>
  <div id="intro-video" class="intro-video">
    <div id="intro-video--outer" class="intro-video--outer">
      <div class="intro-video--inner">
        <video id="intro-video--video" autoplay playsinline muted loop>
          <source src="https://s3.eu-central-1.amazonaws.com/on-website-assets/intro_video.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>
<script>

export default {

}
</script>

<style lang="scss">
  @import 'css/variables';

  .intro-video {
    position: absolute;
    width: 100%;
    height: 100vh;

    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(1.02);
      height: auto;
      min-width: 100vw;
      min-height: 100%;
      z-index: unset;
      opacity: .4;

      @media (max-aspect-ratio: 4/3) { /* CHANGE TO ACTUAL VIDEO ASPECT RATIO */
        height: 100%;
        width: auto;
      }
    }

    @media (max-width: $bp-mobile) {
      height: calc(var(--vh, 1vh) * 100);
    }
  }

  .intro-video--outer {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 var(--m-spacing) var(--m-spacing);
  }

  .intro-video--inner {
    // background: rgba(255,255,255,0.1);
    /* background: rgba(30,150,30,0.2); */
    width: 100%;
    height: 100%;
    border-radius: 1px;
    overflow: hidden;
    position: relative;
  }

  // .intro-video--overlay {
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   top: 0;
  //   opacity: 0;
  //   background: black;
  //   z-index: 1;
  // }
</style>

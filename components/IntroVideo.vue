<template>
  <div id="intro-video" class="intro-video">
    <div id="intro-video--outer" class="intro-video--outer">
      <div class="intro-video--inner">
        <video playsinline autoplay muted loop>
          <source src="~/assets/videos/background.webm" type="video/webm">
        </video>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
    }
  }

  .intro-video--outer {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
  }

  .intro-video--inner {
    background: rgba(255,255,255,0.1);
    /* background: rgba(30,150,30,0.2); */
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
</style>

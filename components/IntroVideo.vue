<template>
  <div id="intro-video" class="intro-video">
    <div id="intro-video--outer" class="intro-video--outer">
      <div class="intro-video--inner">
        <video id="intro-video--video" autoplay playsinline muted loop>
          <source src="~/assets/videos/intro_video.mp4" type="video/mp4">
          <source src="~/assets/videos/intro_video.webm" type="video/webm">
          <source src="~/assets/videos/intro_video.ogv" type="video/ogv">
        </video>
      </div>
    </div>
  </div>
</template>
<script>

if (process.browser) {

  // window.onNuxtReady(() => {
  // const video = document.getElementById('intro-video--video')
  // console.log(video)
  // video.onloadedmetadata = () => {
  //   console.log('metadata loaded')
  // this.currentTime = 4000
  // }
  // })
}

export default {

}
</script>

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

      @media (max-aspect-ratio: 4/3) { /* CHANGE TO ACTUAL VIDEO ASPECT RATIO */
        height: 100%;
        width: auto;
      }

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
    background: rgba(255,255,255,0.1);
    /* background: rgba(30,150,30,0.2); */
    width: 100%;
    height: 100%;
    border-radius: 1px;
    overflow: hidden;
    position: relative;
  }
</style>

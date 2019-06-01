<template>
  <section id="about" class="about">
    <div id="about--visual" class="about--visual">
      <div id="about--visual--outer" class="about--visual--outer">
        <div id="about--visual--inner" class="about--visual--inner">
          <video playsinline autoplay muted loop>
            <source src="~/assets/videos/background.webm" type="video/webm">
          </video>
        </div>
      </div>
    </div>
    <div class="about--content">
      <h2>About</h2>
      <p>
        Overnice is obsessed with quality, technology, and its clients.
      </p>
      <p class="small">
        We love them. We travel the world for them, cross the jungle, sail the sea, take the train. But Friday afternoons are off because there's more to life than work.
      </p>
    </div>
  </section>
</template>

<script>
if (process.browser) {
  /* global window, ScrollMagic, TweenMax, Expo, controller */

  window.onNuxtReady(() => {
    // Pin Visual
    new ScrollMagic.Scene({ triggerElement: '#about', duration: 500, offset: window.innerHeight * 0.5 })
      .setPin('#about--visual', { pushFollowers: false })
      .addIndicators({ name: 'Pin About Visual' })
      .addTo(controller)

    // Grow Visual
    const growVisual = TweenMax.to('#about--visual--outer', 1, {
      paddingLeft: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      ease: Expo.easeIn
    })
    new ScrollMagic.Scene({ triggerElement: '#about', duration: 300, offset: window.innerHeight * 0.5 - 300 })
      .setTween(growVisual)
      .addIndicators({ name: 'Grow Visual' })
      .addTo(controller)
  })
}

export default {

}
</script>

<style lang="scss" scoped>
  .about {
    position: relative;
    margin: 0 auto;
    width: 100%;
  }

  .about--visual {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(50vw - 60px);
    height: 100vh;
    box-sizing: border-box;

    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(1.02);
      height: auto;
      min-width: 50vw;
    }
  }

  .about--visual--outer {
    width: 100%;
    height: 100%;
    padding: 64px 32px 64px 64px;
    box-sizing: border-box;
  }

  .about--visual--inner {
    background: rgba(255,255,255,0.1);
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .about--content {
    width: calc(var(--content-max-width) * 0.5);
    padding: 96px 0 0 32px;
    margin-left: 50%;
    box-sizing: border-box;

    p.small {
      opacity: 1;
    }
  }
</style>

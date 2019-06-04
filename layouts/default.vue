<template>
  <div class="container">
    <nuxt />
    <div id="controls" class="controls">
      <Nav />
      <LangSwitch lang="en" />
      <img src="~/assets/images/logo_vertical.svg" class="logo">
    </div>
  </div>
</template>
<script>
import Nav from '~/components/Layout/Nav.vue'
import LangSwitch from '~/components/Layout/LangSwitch.vue'

if (process.browser) {
  /* global window, document, TweenMax, ScrollMagic, controller */

  window.onNuxtReady(() => {
    // Show Logo
    const showControls = TweenMax.from('#controls', 0.4, {
      opacity: 0
    })
    new ScrollMagic.Scene({ triggerElement: '#content', duration: document.height, offset: window.innerHeight * 1.5 })
      .setTween(showControls)
      .addIndicators({ name: 'Show Controls' })
      .addTo(controller)
  })
}

export default {
  components: { Nav, LangSwitch },

  head() {
    return {
      script: [
        { src: './scripts/TweenMax.min.js' },
        { src: './scripts/ScrollMagic.js' },
        { src: './scripts/animation.gsap.js' },
        { src: './scripts/debug.addIndicators.js' },
        { innerHTML: 'const controller = new ScrollMagic.Controller();' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    color: white;
  }

  .logo, .nav {
    position: fixed;
  }

  .logo {
    width: 21px;
    height: auto;
    opacity: .1;
    bottom: 5rem;
    right: 5rem;
  }
</style>

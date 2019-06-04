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
  /* global window, document, ScrollMagic, controller */

  window.onNuxtReady(() => {
    // Show Logo
    new ScrollMagic.Scene({ triggerElement: '#content', duration: document.height, offset: window.innerHeight * 1.5 })
      .setClassToggle('#controls', 'visible')
      // .addIndicators({ name: 'Show Controls' })
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
  @import 'css/variables';
  .container {
    color: white;
  }

  .controls {
    opacity: 0;
    transition: opacity .2s ease;

    &.visible {
      opacity: 1;
      transition: opacity .5s ease;
    }

    @media (max-width: $bp-desktop + 108px) {
      display: none;
    }
  }

  .logo {
    position: fixed;
    width: 21px;
    height: auto;
    opacity: .1;
    bottom: 5rem;
    right: 5rem;
  }
</style>

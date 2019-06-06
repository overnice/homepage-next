<template>
  <div class="container">
    <nuxt />
    <Controls show-nav show-lang-switch />
  </div>
</template>
<script>
import Controls from '~/components/Layout/Controls.vue'

if (process.browser) {
  /* global window, ScrollMagic, controller */

  window.onNuxtReady(() => {
    // Show Logo
    new ScrollMagic.Scene({ triggerElement: '#intro', duration: window.innerHeight * 1.5 })
      .setClassToggle('#controls', 'invisible')
      // .addIndicators({ name: 'Hide Controls' })
      .addTo(controller)
  })
}

export default {
  components: { Controls },

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
    background: var(--darkgray);
    color: white;
    padding-bottom: 50vh;

    & /deep/ {
      .controls {
        background: var(--darkgray);
        z-index: 2;
      }

      .logo-vertical {
        color: white;
      }
    }
  }
</style>

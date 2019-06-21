<template>
  <div class="container">
    <nuxt/>
    <Controls show-nav show-lang-switch/>
  </div>
</template>
<script>
import Controls from '~/components/Layout/Controls.vue'

if (process.browser) {
  /* global window, ScrollMagic, controller */

  let hiddenDuration = window.innerHeight + 450

  if (window.innerWidth < 450) {
    hiddenDuration = window.innerHeight * 0.9
  }

  window.onNuxtReady(() => {
    // Show Logo
    new ScrollMagic.Scene({ triggerElement: '#content', duration: hiddenDuration })
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
        // { src: './scripts/TweenMax.min.js' },
        // { src: './scripts/ScrollMagic.js' },
        // { src: './scripts/animation.gsap.js' },
        // { src: './scripts/debug.addIndicators.js' },
        // { innerHTML: 'var controller = new ScrollMagic.Controller();' }
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
  padding-bottom: 50vh; // used to compensate the 50vh at the top, removed on mobile

  & /deep/ {
    .controls {
      background: var(--darkgray);
      z-index: 2;
    }

    .logo-vertical {
      color: white;
    }

    p {
      a {
        text-shadow:
          -0.125rem -0.125rem 0 var(--darkgray),
          0.125rem -0.125rem 0 var(--darkgray),
          -0.125rem 0.125rem 0 var(--darkgray),
          0.125rem 0.125rem 0 var(--darkgray),
          -0.25rem -0.25rem 0 var(--darkgray),
          0.25rem -0.25rem 0 var(--darkgray),
          -0.25rem 0.25rem 0 var(--darkgray),
          0.25rem 0.25rem 0 var(--darkgray),
          -0.375rem -0.375rem 0 var(--darkgray),
          0.375rem -0.375rem 0 var(--darkgray),
          -0.375rem 0.375rem 0 var(--darkgray),
          0.375rem 0.375rem 0 var(--darkgray);
        transition: color .3s cubic-bezier(.25,0,0,1), transform .3s cubic-bezier(.25,0,0,1);

        &:before {
          background: rgba(#ff795f, .7);
        }

        &:hover {
          color: white;

          &:before {
            background: rgba(255,255,255,.5);
          }
        }
      }
    }
  }

  @media (max-width: $bp-mobile) {
    padding-bottom: 0;
  }
}
</style>

<template>
  <div class="container">
    <nuxt />
  </div>
</template>
<script>

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
  head() {
    return {
      script: [
        { src: this.currentScript + '/scripts/TweenMax.min.js' },
        { src: this.currentScript + '/scripts/ScrollMagic.js' },
        { src: this.currentScript + '/scripts/debug.addIndicators.js' },
        { src: this.currentScript + '/scripts/animation.gsap.js' },

        { innerHTML: 'const controller = new ScrollMagic.Controller();' }
      ]
    }
  },
  computed: {
    currentScript() {
      if (this.$i18n.locale === 'de') { return '../.' } else {
        return '.'
      }
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
          0.125rem 0 0 var(--darkgray),
          -0.125rem 0 0 var(--darkgray),
          0 0.125rem 0 var(--darkgray),
          0 -0.125rem 0 var(--darkgray),

          -0.25rem -0.25rem 0 var(--darkgray),
          0.25rem -0.25rem 0 var(--darkgray),
          -0.25rem 0.25rem 0 var(--darkgray),
          0.25rem 0.25rem 0 var(--darkgray),
          0.25rem 0 0 var(--darkgray),
          -0.25rem 0 0 var(--darkgray),
          0 0.25rem 0 var(--darkgray),
          0 -0.25rem 0 var(--darkgray),

          -0.375rem -0.375rem 0 var(--darkgray),
          0.375rem -0.375rem 0 var(--darkgray),
          -0.375rem 0.375rem 0 var(--darkgray),
          0.375rem 0.375rem 0 var(--darkgray),
          0.375rem 0 0 var(--darkgray),
          -0.375rem 0 0 var(--darkgray),
          0 0.375rem 0 var(--darkgray),
          0 -0.375rem 0 var(--darkgray);
        transition: color .3s cubic-bezier(.25,0,0,1), transform .3s cubic-bezier(.25,0,0,1);

        &:before {
          background: rgba(#ff795f, .7);
        }

        &:hover,
        &:active,
        &:focus {
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

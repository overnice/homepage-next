<template>
  <div class="container">
    <nuxt />
  </div>
</template>
<script>

export default {
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

<style lang="scss">
  .container {
    color: white;
  }
</style>

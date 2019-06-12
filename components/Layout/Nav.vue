<template>
  <nav class="nav">
    <div class="top">
      <nuxt-link id="brands-link" to="#brands">
        Brands
      </nuxt-link>
      <nuxt-link id="products-link" to="#products">
        Products
      </nuxt-link>
      <nuxt-link id="creatives-link" to="#creatives">
        Creatives
      </nuxt-link>
    </div>
    <div class="bottom">
      <nuxt-link id="about-link" to="#about">
        About
      </nuxt-link>
      <nuxt-link id="contact-link" to="#contact">
        Contact
      </nuxt-link>
    </div>
  </nav>
</template>

<script>

if (process.browser) {
/* global ScrollMagic, controller */

  const targets = [
    'brands',
    'products',
    'creatives',
    'about',
    'contact'
  ]

  window.onNuxtReady(() => {
    targets.forEach((target) => {
      new ScrollMagic.Scene({ triggerElement: `#${target}`, duration: document.getElementById(target).getBoundingClientRect().height })
        .setClassToggle(`#${target}-link`, 'active')
        // .addIndicators({ name: target })
        .addTo(controller)
    })
  })
}

export default {

}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.nav {
  position: fixed;
  top: 0;
  left: 0;
  margin-top: calc(-10rem - var(--small-font-size));
  padding: 0 3.5rem;
  transform: rotate(90deg);
  display: flex;
  transform-origin: 0 100%;
  width: 100vh;
  box-sizing: border-box;
  margin-left: -4px; // compensate line height
  justify-content: space-between;

  .top, .bottom {
    display: flex;
  }

  a {
    font-size: var(--small-font-size);
    line-height: 1;
    color: white;
    padding: 5rem 1.5rem;
    text-decoration: none;
    font-weight: bold;
    display: block;
    opacity: .2;
    filter: blur(4px);
    transition: filter .4s ease, opacity .4s ease;

    &.active,
    &:hover {
      opacity: .3;
      filter: blur(0);
    }

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    a {
      filter: blur(0);
    }
  }

  @media (max-width: $bp-controls-layout) {
    display: none;
  }
}
</style>

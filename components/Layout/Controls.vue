<template>
  <div id="controls" class="controls">
    <Nav v-if="showNav" />
    <!-- <LangSwitch v-if="showLangSwitch" lang="en" /> -->
    <svg class="logo-vertical" viewBox="0 0 21 122">
      <path d="M0.2,80.49c0,5.89,2.79,8.32,10.3,8.32c7.41-0.05,10.3-2.03,10.3-8.32c0-5.38-2.69-7.66-7.36-7.71v5.89 c2.69,0,3.45,0.71,3.45,1.83c0,0.91-0.61,1.78-2.69,1.78h-2.59v-9.59h-0.05v-0.05H9.59C2.53,72.62,0.2,75.21,0.2,80.49z M8.29,78.76v3.55H7.43c-2.03,0-2.99-0.46-2.99-1.78c0-1.42,0.91-1.83,2.99-1.78H8.29z" />
      <path d="M0.2,7.94c0,5.89,2.79,8.32,10.3,8.32c7.41,0,10.3-2.03,10.3-8.32c0-5.38-2.69-7.56-7.36-7.71v5.89 c2.69,0,3.45,0.71,3.45,1.83c0,0.96-0.61,1.78-2.69,1.78h-2.59V0.12h-0.05V0.07H9.59C2.53,0.07,0.2,2.76,0.2,7.94z M8.29,6.26v3.55 H7.43c-2.03,0-2.99-0.46-2.99-1.78c0-1.37,0.91-1.83,2.99-1.78H8.29z" />
      <polygon points="20.29,100.88 0.76,105.65 0.76,98.91 14.86,97.03 14.86,96.98 0.76,95.15 0.76,88.4 20.29,93.17 	" />
      <path d="M6.24,59.79c-0.05,0.56-0.15,1.07-0.15,1.62c0,2.33,0.91,3.65,3.5,3.65h10.65v6.54v0.05H0.71v-6.29H3.8v-0.05 c-2.38-0.76-3.15-2.54-3.15-4.41v-1.07h5.58V59.79z" />
      <path d="M20.29,42.39v6.54H7.41c-1.62,0-2.33,0.41-2.33,1.62s0.71,1.62,2.33,1.62h12.89v6.54H0.76v-6.29h2.38v-0.05 c-1.88-0.81-2.89-2.54-2.89-4.77c0-2.89,1.12-5.12,5.33-5.12h14.71V42.39z" />
      <rect x="0.76" y="34.52" width="19.53" height="6.54" />
      <path d="M18.72,18.79c1.42,1.27,2.03,3.3,2.03,6.04c0,4.97-1.52,8.42-9.94,8.42c-9.23,0-10.65-3.86-10.65-8.78 c0-5.83,3.3-7.41,8.22-7.41v5.89c-1.62,0-2.54,0.15-3.15,0.41c-0.61,0.3-0.86,0.76-0.86,1.47c0,1.47,1.27,1.88,6.09,1.88 s6.09-0.41,6.09-1.88c0-1.22-0.76-1.88-3.2-1.88h-1.27v-5.89C15.17,17.02,17.35,17.53,18.72,18.79z" />
      <path d="M0.2,113.57c0,7.37,5.13,8.36,10.25,8.36c5.69,0,10.4-0.7,10.4-8.36c0-7.37-5.2-8.36-10.32-8.36 C4.84,105.21,0.2,105.91,0.2,113.57z M16.63,113.57c0,1.47-1.19,1.83-6.11,1.83c-4.99,0-6.11-0.35-6.11-1.83s1.2-1.83,6.11-1.83 C15.44,111.74,16.63,112.09,16.63,113.57z" />
    </svg>
  </div>
</template>
<script>
import Nav from '~/components/Layout/Nav.vue'
// import LangSwitch from '~/components/Layout/LangSwitch.vue'

export default {
  components: {
    Nav
    // LangSwitch
  },
  props: {
    showNav: Boolean,
    showLangSwitch: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.controls {
  opacity: 1;
  transition: opacity .5s ease, background .3s ease;

  &.invisible {
    opacity: 0;
    transition: opacity .2s ease, background .2s ease;
  }

  // @media (max-width: $bp-desktop + 108px) {
  //   display: none;
  // }

  &.on-image {
    & /deep/ .nav {
      button {
        opacity: .45;

        &.active {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: $bp-controls-layout) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 12.5rem;
    background: white;
  }
}

.logo-vertical {
  position: fixed;
  width: 21px;
  height: auto;
  opacity: .1;
  bottom: 5rem;
  right: 5rem;
  fill: white;
  transition: fill .3s ease;

  @media (max-width: $bp-controls-layout) {
    transform: rotate(90deg);
    right: auto;
    bottom: auto;
    top: 0;
    left: 122px; // logo width
    margin-top: 5rem;
    margin-left: 5rem;
    transform-origin: 0 0;
    fill: var(--red);
    opacity: 1;
  }
}

@media (max-width: $bp-mobile) {
  .controls {
    opacity: 1 !important;

    &.invisible {
      background: none !important;

      .logo-vertical {
        fill: white;
      }
    }
  }
}
</style>

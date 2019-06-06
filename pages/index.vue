<template>
  <div>
    <section class="intro">
      <div id="intro--inner" class="intro--inner">
        <svg id="logo" class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
          <path d="M96.4,187.56c-2.9,0-3.6,2.21-3.6,12.04c0,9.69,0.7,12.04,3.6,12.04c2.9,0,3.6-2.35,3.6-12.04 C100,189.92,99.3,187.56,96.4,187.56z" />
          <path d="M304.4,187.6c-2.6,0-3.5,1.9-3.5,5.9v1.7h7v-1.7C308,189.4,307.1,187.6,304.4,187.6z" />
          <path d="M161.5,187.6c-2.6,0-3.5,1.9-3.5,5.9v1.7h7v-1.7C165.1,189.4,164.3,187.6,161.5,187.6z" />
          <path d="M0,0v400h400V0H0z M96.4,219.95c-15.1,0-16.48-9.28-16.48-20.49c0-10.1,1.95-20.21,16.48-20.21 c15.08,0,16.47,9.14,16.48,20.35C112.88,209.7,110.93,219.95,96.4,219.95z M121.4,218.85l-9.4-38.5h13.3l3.7,27.8h0.1l3.6-27.8H146 l-9.4,38.5H121.4z M177.1,201.65H177v0.1h-18.9v5.1c0,4.1,1.7,5.3,3.5,5.3c2.2,0,3.6-1.5,3.6-6.8h11.6c-0.1,9.2-4.6,14.5-15.2,14.5 c-12.4,0-16.3-5.7-16.4-20.3c0-14.8,4.8-20.3,16.4-20.3c10.4,0,15.5,4.6,15.5,18.5V201.65z M202.3,191.15v-0.01 c-1.06-0.1-2.03-0.29-3.1-0.29c-4.6,0-7.2,1.8-7.2,6.9v21h-12.9H179v-38.5h12.4v6.1h0.1c1.5-4.7,5-6.2,8.7-6.2h2.1v10.99 c0.03,0,0.07,0.01,0.1,0.01H202.3z M223.8,218.85v-25.4c0-3.2-0.8-4.6-3.2-4.6c-2.4,0-3.2,1.4-3.2,4.6v25.4h-12.9v-38.5h12.4v4.7 h0.1c1.6-3.7,5-5.7,9.4-5.7c5.7,0,10.1,2.2,10.1,10.5v29H223.8z M252.2,218.85h-12.9v-38.5h12.9V218.85z M271.3,211.45 c2.4,0,3.7-1.5,3.7-6.3v-2.5h11.6c0.1,6.1-0.9,10.4-3.4,13.1c-2.5,2.8-6.5,4-11.9,4c-9.8,0-16.6-3-16.6-19.6c0-18.2,7.6-21,17.3-21 c11.5,0,14.6,6.5,14.6,16.2H275c0-3.2-0.3-5-0.8-6.2c-0.6-1.2-1.5-1.7-2.9-1.7c-2.9,0-3.7,2.5-3.7,12S268.4,211.45,271.3,211.45z  M320.1,201.65H320v0.1h-18.9v5.1c0,4.1,1.6,5.3,3.5,5.3c2.2,0,3.6-1.5,3.6-6.8h11.6c-0.3,9.2-4.6,14.5-15.2,14.5 c-12.4,0-16.4-5.7-16.4-20.3c0-14.8,4.8-20.3,16.4-20.3c10.2,0,15.5,4.6,15.5,18.5V201.65z" />
        </svg>
      </div>
    </section>
    <IntroVideo />
    <section id="content" class="content">
      <ServiceCategory
        v-for="serviceCategory in serviceCategories"
        :key="serviceCategory.id"
        :title="serviceCategory.title"
        :copy="serviceCategory.copy"
        :small-copy="serviceCategory.smallCopy"
        :case-previews="serviceCategory.casePreviews"
      />
      <About />
    </section>
  </div>
</template>

<script>
import IntroVideo from '~/components/IntroVideo.vue'
import ServiceCategory from '~/components/ServiceCategory.vue'
import About from '~/components/About.vue'

import serviceCategoriesData from '~/data/serviceCategories.json'

if (process.browser) {
  /* global window, TweenMax, Expo, ScrollMagic, controller */

  window.onNuxtReady(() => {
    // Zoom Logo
    const zoomLogo = TweenMax.fromTo('#intro--inner', 1,
      { transform: 'scale(1)' },
      { transform: 'scale(50) translate3D(-2.8vw, 0, 0)', ease: Expo.easeIn }
    )
    new ScrollMagic.Scene({ triggerElement: '#content', duration: 300 })
      .setTween(zoomLogo)
      // .addIndicators({ name: 'Zoom Logo' })
      .addTo(controller)

    // Pin Video
    new ScrollMagic.Scene({ triggerElement: '#content', duration: 450, offset: 0 })
      .setPin('#intro-video', { pushFollowers: false })
      // .addIndicators({ name: 'Pin Video' })
      .addTo(controller)

    // Shrink Video
    const shrinkVideo = TweenMax.from('#intro-video--outer', 1, {
      paddingLeft: '0',
      paddingRight: '0',
      paddingBottom: '0',
      ease: Expo.easeOut
    })
    new ScrollMagic.Scene({ triggerElement: '#content', duration: 300, offset: 350 })
      .setTween(shrinkVideo)
      // .addIndicators({ name: 'Shrink Video' })
      .addTo(controller)
  })
}

export default {
  components: { IntroVideo, ServiceCategory, About },

  data() {
    return {
      serviceCategories: serviceCategoriesData
    }
  }
}
</script>

<style lang="scss" scoped>
  .intro {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 50%;
    width: 100vw;
    height: 101vh; // slight flicker on mobile if 100vh
    transform: translate(0, -50%);
    pointer-events: none;

    .intro--inner {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: calc(50vh - 30vw);
        background: white;
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 0;
      }
    }
  }

  .logo {
    fill: white;
    width: 100vw;
    height: auto;
  }

  .content {
    position: relative;
    top: 50vh;
    margin-top: 1px;
    padding-top: calc(450px + 50vh); // video scroll height + video size (minus top value)
  }
</style>

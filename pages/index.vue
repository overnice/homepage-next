<template>
  <div>
    <section class="intro">
      <svg id="logo" class="logo" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <path d="M161.5,187.6c-2.6,0-3.5,1.9-3.5,5.9v1.7h7v-1.7C165.1,189.4,164.3,187.6,161.5,187.6z" />
        <path d="M304.4,187.6c-2.6,0-3.5,1.9-3.5,5.9v1.7h7v-1.7C308,189.4,307.1,187.6,304.4,187.6z" />
        <ellipse cx="96.4" cy="200.1" rx="3.6" ry="12" />
        <path d="M0,0v400h400V0H0z M96.4,220.4c-15.1,0-16.4-9.3-16.4-20.5c0-10.1,1.9-20.2,16.4-20.2c15.1,0,16.4,9.1,16.4,20.3 C112.9,210.2,110.9,220.4,96.4,220.4z M121.4,219.3l-9.4-38.5h13.3l3.7,27.8h0.1l3.6-27.8H146l-9.4,38.5H121.4z M177,202.1v0.1 h-18.9v5.1c0,4.1,1.7,5.3,3.5,5.3c2.2,0,3.6-1.5,3.6-6.8h11.6c-0.1,9.2-4.6,14.5-15.2,14.5c-12.4,0-16.3-5.7-16.4-20.3 c0-14.8,4.8-20.3,16.4-20.3c10.4,0,15.5,4.6,15.5,18.5V202.1z M202.4,191.6c-1.1-0.1-2.1-0.3-3.2-0.3c-4.6,0-7.2,1.8-7.2,6.9v21 h-12.9h-0.1v-38.5h12.4v6.1h0.1c1.5-4.7,5-6.2,8.7-6.2h2.1V191.6z M236.7,219.3h-12.9v-25.4c0-3.2-0.8-4.6-3.2-4.6 s-3.2,1.4-3.2,4.6v25.4h-12.9v-38.5h12.4v4.7h0.1c1.6-3.7,5-5.7,9.4-5.7c5.7,0,10.1,2.2,10.1,10.5V219.3z M252,219.3h-12.9v-38.5 H252V219.3z M283.2,216.2c-2.5,2.8-6.5,4-11.9,4c-9.8,0-16.6-3-16.6-19.6c0-18.2,7.6-21,17.3-21c11.5,0,14.6,6.5,14.6,16.2h-11.6 c0-3.2-0.3-5-0.8-6.2c-0.6-1.2-1.5-1.7-2.9-1.7c-2.9,0-3.7,2.5-3.7,12c0,9.5,0.8,12,3.7,12c2.4,0,3.7-1.5,3.7-6.3v-2.5h11.6 C286.7,209.2,285.7,213.5,283.2,216.2z M320,202.1v0.1h-18.9v5.1c0,4.1,1.6,5.3,3.5,5.3c2.2,0,3.6-1.5,3.6-6.8h11.6 c-0.3,9.2-4.6,14.5-15.2,14.5c-12.4,0-16.4-5.7-16.4-20.3c0-14.8,4.8-20.3,16.4-20.3c10.2,0,15.5,4.6,15.5,18.5V202.1z" />
      </svg>
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
    const zoomLogo = TweenMax.fromTo('#logo', 1,
      { transform: 'scale(1)' },
      { transform: 'scale(50) translate3D(-2.8vw, 0, 0)', ease: Expo.easeIn }
    )
    new ScrollMagic.Scene({ triggerElement: '#content', duration: 300 })
      .setTween(zoomLogo)
      .addIndicators({ name: 'Zoom Logo' })
      .addTo(controller)

    // Pin Video
    new ScrollMagic.Scene({ triggerElement: '#content', duration: 450, offset: 0 })
      .setPin('#intro-video', { pushFollowers: false })
      .addIndicators({ name: 'Pin Video' })
      .addTo(controller)

    // Shrink Video
    const shrinkVideo = TweenMax.to('#intro-video--outer', 1, {
      paddingLeft: '64px',
      paddingRight: '64px',
      paddingBottom: '64px',
      ease: Expo.easeOut
    })
    new ScrollMagic.Scene({ triggerElement: '#content', duration: 300, offset: 350 })
      .setTween(shrinkVideo)
      .addIndicators({ name: 'Shrink Video' })
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

<style lang="scss">
  .intro {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 50%;
    width: 100vw;
    height: 100vw;
    transform: translate(0, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  }

  .logo {
    fill: var(--white);
    width: 100vw;
    height: auto;
  }

  .content {
    position: relative;
    top: 50vh;
    margin-top: 1px;
    padding-top: calc(450px + 50vh + 104px); // video scroll height + video size (minus top value)
    height: 300vh;
  }
</style>

<template>
  <div>
    <div>
      <section class="intro">
        <div id="intro--inner" class="intro--inner">
          <svg
            id="logo"
            class="logo"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
          >
            <path
              d="M96.4,187.56c-2.9,0-3.6,2.21-3.6,12.04c0,9.69,0.7,12.04,3.6,12.04c2.9,0,3.6-2.35,3.6-12.04 C100,189.92,99.3,187.56,96.4,187.56z"
            />
            <path
              d="M304.4,187.6c-2.6,0-3.5,1.9-3.5,5.9v1.7h7v-1.7C308,189.4,307.1,187.6,304.4,187.6z"
            />
            <path
              d="M161.5,187.6c-2.6,0-3.5,1.9-3.5,5.9v1.7h7v-1.7C165.1,189.4,164.3,187.6,161.5,187.6z"
            />
            <path
              d="M0,0v400h400V0H0z M96.4,219.95c-15.1,0-16.48-9.28-16.48-20.49c0-10.1,1.95-20.21,16.48-20.21 c15.08,0,16.47,9.14,16.48,20.35C112.88,209.7,110.93,219.95,96.4,219.95z M121.4,218.85l-9.4-38.5h13.3l3.7,27.8h0.1l3.6-27.8H146 l-9.4,38.5H121.4z M177.1,201.65H177v0.1h-18.9v5.1c0,4.1,1.7,5.3,3.5,5.3c2.2,0,3.6-1.5,3.6-6.8h11.6c-0.1,9.2-4.6,14.5-15.2,14.5 c-12.4,0-16.3-5.7-16.4-20.3c0-14.8,4.8-20.3,16.4-20.3c10.4,0,15.5,4.6,15.5,18.5V201.65z M202.3,191.15v-0.01 c-1.06-0.1-2.03-0.29-3.1-0.29c-4.6,0-7.2,1.8-7.2,6.9v21h-12.9H179v-38.5h12.4v6.1h0.1c1.5-4.7,5-6.2,8.7-6.2h2.1v10.99 c0.03,0,0.07,0.01,0.1,0.01H202.3z M223.8,218.85v-25.4c0-3.2-0.8-4.6-3.2-4.6c-2.4,0-3.2,1.4-3.2,4.6v25.4h-12.9v-38.5h12.4v4.7 h0.1c1.6-3.7,5-5.7,9.4-5.7c5.7,0,10.1,2.2,10.1,10.5v29H223.8z M252.2,218.85h-12.9v-38.5h12.9V218.85z M271.3,211.45 c2.4,0,3.7-1.5,3.7-6.3v-2.5h11.6c0.1,6.1-0.9,10.4-3.4,13.1c-2.5,2.8-6.5,4-11.9,4c-9.8,0-16.6-3-16.6-19.6c0-18.2,7.6-21,17.3-21 c11.5,0,14.6,6.5,14.6,16.2H275c0-3.2-0.3-5-0.8-6.2c-0.6-1.2-1.5-1.7-2.9-1.7c-2.9,0-3.7,2.5-3.7,12S268.4,211.45,271.3,211.45z  M320.1,201.65H320v0.1h-18.9v5.1c0,4.1,1.6,5.3,3.5,5.3c2.2,0,3.6-1.5,3.6-6.8h11.6c-0.3,9.2-4.6,14.5-15.2,14.5 c-12.4,0-16.4-5.7-16.4-20.3c0-14.8,4.8-20.3,16.4-20.3c10.2,0,15.5,4.6,15.5,18.5V201.65z"
            />
          </svg>
        </div>
        <ScrollIndicator />
      </section>
      <IntroVideo />
      <div id="intro--text" class="intro--text">
        <h1>
          We create brands,
          <br>products, creatives and overall
          <strong>a good time for users.</strong>
        </h1>
      </div>
      <section id="content" class="content">
        <ServiceCategory
          v-for="serviceCategory in serviceCategories"
          :id="serviceCategory.id"
          :key="serviceCategory.id"
          :title="serviceCategory.title"
          :copy="serviceCategory.copy"
          :small-copy="serviceCategory.smallCopy"
          :case-previews="serviceCategory.casePreviews"
        />
        <About />
      </section>
    </div>
    <Controls show-nav show-lang-switch />
  </div>
</template>

<script>
import TimelineMax from 'gsap/src/uncompressed/TimelineMax'

import IntroVideo from '~/components/IntroVideo.vue'
import ServiceCategory from '~/components/ServiceCategory.vue'
import About from '~/components/About.vue'
import Controls from '~/components/Layout/Controls.vue'
import ScrollIndicator from '~/components/ScrollIndicator.vue'
import VueRouter from 'vue-router'

import serviceCategoriesData from '~/data/serviceCategories.json'

const Router = new VueRouter({

  scrollBehavior: (to, from, savedPosition) => new Promise((resolve) => {
    const position = savedPosition || {}
    if (!savedPosition) {
      if (to.hash) {
        position.selector = to.hash
      }
      if (to.matched.some(m => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
    }
    Router.app.$root.$once('triggerScroll', () => {
      Router.app.$nextTick(() => resolve(position))
    })
  }),
  mode: 'history',
  routes: []
})

// // detect mobile device
function isMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true
  } else {
    return false
  }
}

// // Recalculate custom CSS property for 100vh on mobile
// // function onResize() {
// //   window.addEventListener('resize', () => {
// //     const vh = window.innerHeight * 0.01
// //     document.documentElement.style.setProperty('--vh', `${vh}px`)
// //   })
// // }

if (process.browser) {
  if (isMobile()) {
    // Set custom CSS property for 100vh on mobile
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // window.requestAnimationFrame(onResize)
  }
}

export default {
  components: { IntroVideo, ServiceCategory, About, Controls, ScrollIndicator },

  data() {
    return {
      serviceCategories: serviceCategoriesData
    }
  },
  computed: {
    showBackAnimation() {
      return this.$store.state.showBackAnimation
    },
    lastPosition() {
      return this.$store.state.lastPosition
    },
    animImage() {
      return this.$store.state.animImage
    }
  },
  mounted() {
    this.$nextTick(this.pinContainerScene)
  },

  methods: {
    pinContainerScene() {
      const logoZoomDuration = 450

      if (window.innerWidth > 450) {
        // Zoom Logo
        const zoomLogo = this.$gsap.TweenMax.fromTo('#intro--inner', 1,
          { transform: 'scale(1)' },
          { transform: 'scale(50) translate3D(-2.8vw, 0, 0)', ease: this.$gsap.Expo.easeIn }
        )
        const sceneZoomLogo = new this.$scrollmagic.Scene({ triggerElement: '#content', duration: logoZoomDuration })
          .setTween(zoomLogo)
        this.$ksvuescr.$emit('addScene', 'sceneLogo', sceneZoomLogo)

        // Hide Scroll Indicator
        const sceneShowScrollIndicator = new this.$scrollmagic.Scene({ triggerElement: '#content', duration: 100, offset: -1 })
          .setClassToggle('#scroll-indicator', 'visible')
        this.$ksvuescr.$emit('addScene', 'showScrollIndicator', sceneShowScrollIndicator)

        // Pin Video
        const scenePinVideo = new this.$scrollmagic.Scene({ triggerElement: '#content', duration: logoZoomDuration + 150, offset: 0 })
          .setPin('#intro-video', { pushFollowers: false })
        this.$ksvuescr.$emit('addScene', 'pinVideo', scenePinVideo)

        // Move Intro Text
        const moveIntroText = this.$gsap.TweenMax.to('#intro--text', 1, {
          marginTop: '50vh', ease: this.$gsap.Expo.easeOut
        })
        const sceneMoveIntroText = new this.$scrollmagic.Scene({ triggerElement: '#content', duration: 240, offset: logoZoomDuration - 40 })
          .setTween(moveIntroText)
        this.$ksvuescr.$emit('addScene', 'moveIntroText', sceneMoveIntroText)

        // Darken Video
        const darkenVideo = this.$gsap.TweenMax.from('#intro-video--video', 1, {
          opacity: '1',
          ease: this.$gsap.Circ.easeOut
        })
        const sceneDarkenVideo = new this.$scrollmagic.Scene({ triggerElement: '#content', duration: 200, offset: logoZoomDuration })
          .setTween(darkenVideo)
        this.$ksvuescr.$emit('addScene', 'darkenVideo', sceneDarkenVideo)

        // Shrink Video
        const shrinkVideo = this.$gsap.TweenMax.from('#intro-video--outer', 1, {
          paddingLeft: '0',
          paddingRight: '0',
          paddingBottom: '0',
          opacity: 1,
          ease: this.$gsap.Expo.easeOut
        })
        const sceneShrinkVideo = new this.$scrollmagic.Scene({ triggerElement: '#content', duration: 300, offset: logoZoomDuration + 50 })
          .setTween(shrinkVideo)
        this.$ksvuescr.$emit('addScene', 'shrinkVideo', sceneShrinkVideo)
      }

      if (this.showBackAnimation) {
        const visualData = this.lastPosition
        const node = document.createElement('div')
        document.body.appendChild(node)
        node.classList += 'visual-transition-back'
        node.id = 'visual-transition-back'
        node.setAttribute('style', `
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        position: fixed;
      `)
        const pageTransitionBack = new TimelineMax()
        const animData = { top: visualData.top + 'px', left: visualData.left + 'px', width: visualData.width + 'px', height: visualData.height + 'px', backgroundColor: '#ffffff', ease: this.$gsap.Expo.easeInOut }
        console.log(animData)
        pageTransitionBack.to('#visual-transition-back', 0.6, animData)
          .addCallback(function () {
            // delete element with id visual-transition from dom
            const transElement = document.getElementById('visual-transition-back')
            // just remove it if its mounted before
            if (transElement) {
              transElement.remove()
            }
          }, 0.6)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
@import 'css/variables';

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

  @media (max-width: $bp-mobile) {
    display: none;
  }
}

.intro--text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(600px + 50vh);
  margin-top: 100vh;
  box-sizing: border-box;
  padding: var(--m-spacing);
  display: flex;
  align-items: flex-end;

  h1 {
    width: 100%;
    max-width: var(--content-max-width);
    padding: 0 var(--l-spacing) calc(var(--l-spacing) + var(--m-spacing));
    margin: 0 auto;
    font-weight: 400;
    line-height: 1.2;
    box-sizing: border-box;
  }

  @media (max-width: $bp-mobile) {
    h1 {
      font-size: 43px; // to fit 375px viewport
      padding: var(--m-spacing);
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
  padding-top: calc(600px + 50vh); // video scroll height + video size (minus top value)
}

@media (max-width: $bp-mobile) {
  .intro--text {
    margin-top: 0;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  }

  .content {
    top: 0;
    margin-top: 0;
    padding-top: 100vh;
    padding-top: calc(var(--vh, 1vh) * 100);
  }
}
</style>

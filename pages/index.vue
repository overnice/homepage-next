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
            <path d="M304.38,187.62c-2.63,0-3.45,1.93-3.45,5.94v1.66h7.04v-1.66C307.97,189.41,307.15,187.62,304.38,187.62z" />
            <path d="M161.51,187.62c-2.63,0-3.45,1.93-3.45,5.94v1.66h7.04v-1.66C165.1,189.41,164.28,187.62,161.51,187.62z" />
            <path
              d="M0,0v400h400V0H0z M96.45,220.39c-15.07,0-16.45-9.26-16.45-20.46c0-10.09,1.95-20.18,16.45-20.18
              c15.06,0,16.43,9.12,16.45,20.32C112.89,210.16,110.95,220.39,96.45,220.39z M121.44,219.28l-9.39-38.56h13.27l3.72,27.78h0.14
              l3.59-27.78h13.27l-9.4,38.56H121.44z M177.01,202.15v0.14h-18.93v5.12c0,4.15,1.66,5.26,3.45,5.26c2.22,0,3.59-1.52,3.59-6.78
              h11.6c-0.14,9.25-4.56,14.51-15.2,14.51c-12.43,0-16.29-5.67-16.43-20.32c0-14.79,4.83-20.32,16.43-20.32
              c10.35,0,15.47,4.56,15.48,18.53V202.15z M202.41,191.64c-1.11-0.14-2.07-0.28-3.18-0.28c-4.56,0-7.19,1.79-7.19,6.91v21.02h-12.85
              h-0.14v-38.56h12.44v6.08h0.14c1.52-4.7,4.97-6.22,8.71-6.22h2.07V191.64z M236.7,219.28h-12.85v-25.43c0-3.18-0.82-4.56-3.18-4.56
              s-3.18,1.38-3.18,4.56v25.43h-12.85v-38.56h12.43v4.7h0.14c1.65-3.74,4.97-5.67,9.39-5.67c5.67,0,10.08,2.2,10.11,10.5V219.28z
              M252.31,219.28h-12.85v-38.56h12.85V219.28z M283.24,216.23c-2.49,2.76-6.5,4.01-11.89,4.01c-9.8,0-16.57-3.04-16.57-19.62
              c0-18.23,7.6-21,17.27-21c11.46,0,14.64,6.49,14.63,16.17h-11.6c0-3.18-0.27-4.97-0.82-6.22c-0.55-1.25-1.52-1.66-2.9-1.66
              c-2.91,0-3.74,2.49-3.74,12.02c0,9.53,0.84,12.02,3.74,12.02c2.36,0,3.74-1.51,3.74-6.35v-2.49h11.6
              C286.69,209.18,285.73,213.47,283.24,216.23z M320,202.15v0.14h-18.93v5.12c0,4.15,1.65,5.26,3.45,5.26c2.22,0,3.59-1.52,3.59-6.78
              h11.6c-0.28,9.25-4.56,14.51-15.2,14.51c-12.44,0-16.45-5.67-16.45-20.32c0-14.79,4.84-20.32,16.45-20.32
              c10.21,0,15.47,4.56,15.48,18.53V202.15z"
            />
            <ellipse cx="96.45" cy="200.07" rx="3.59" ry="12.02" />
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

import VueRouter from 'vue-router'
import IntroVideo from '~/components/IntroVideo.vue'
import ServiceCategory from '~/components/ServiceCategory.vue'
import About from '~/components/About.vue'
import Controls from '~/components/Layout/Controls.vue'
import ScrollIndicator from '~/components/ScrollIndicator.vue'

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
    },
    imageid() {
      return this.$store.state.imageid
    }
  },
  mounted() {
    this.$nextTick(this.pinContainerScene)
  },

  methods: {
    pinContainerScene() {
      const logoZoomDuration = 450

      // used both on mobile and desktop with different offset
      const shrinkVideo = this.$gsap.TweenMax.from('#intro-video--outer', 1, {
        paddingLeft: '0',
        paddingRight: '0',
        paddingBottom: '0',
        opacity: 1,
        ease: this.$gsap.Expo.easeOut
      })

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
        const sceneShrinkVideo = new this.$scrollmagic.Scene({ triggerElement: '#content', duration: 300, offset: logoZoomDuration + 50 })
          .setTween(shrinkVideo)
        this.$ksvuescr.$emit('addScene', 'shrinkVideo', sceneShrinkVideo)
      } else {
        const sceneShrinkVideo = new this.$scrollmagic.Scene({ triggerElement: '#content', duration: 300, offset: window.innerHeight * 0.5 + 20 })
          .setTween(shrinkVideo)
        this.$ksvuescr.$emit('addScene', 'shrinkVideo', sceneShrinkVideo)
      }

      this.$nextTick(() => {
        if (this.showBackAnimation || document.getElementsByClassName('visual-transition-back')) {
          const pageTransitionBack = new TimelineMax()
          let animData = { opacity: 0, ease: this.$gsap.Expo.easeInOut }

          if (document.getElementById(this.imageid)) {
            const visualData = document.getElementById(this.imageid).getBoundingClientRect()
            animData = { top: (visualData.top) + 'px', left: (visualData.left) + 'px', width: visualData.width + 'px', height: visualData.height + 'px', ease: this.$gsap.Expo.easeInOut }
          }

          pageTransitionBack.to('#visual-transition-back', 0.6, animData)
            .to('#visual-transition-back', 0.2, { autoAlpha: 0 })
            .addCallback(function () {
            // delete element with id visual-transition from dom
              const transElement = document.getElementById('visual-transition-back')
              // just remove it if its mounted before
              if (transElement) {
                transElement.remove()
              }
            }, 0.8)
          this.$store.commit('resetAnimations')
        }
      })
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

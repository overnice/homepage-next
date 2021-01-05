<template>
  <section id="about" class="about">
    <div id="about--visual" class="about--visual">
      <div id="about--visual--outer" class="about--visual--outer">
        <div id="about--visual--inner" class="about--visual--inner">
          <!-- <video playsinline autoplay muted loop>
            <source src="~/assets/videos/background.webm" type="video/webm">
          </video> -->
          <img
            id="about--visual--image"
            src="~/assets/images/office.jpg"
            role="presentation"
          >
        </div>
      </div>
    </div>
    <div class="about--content">
      <h2>{{ $t('about') }}</h2>
      <p>
        We are obsessed with quality, technology and our clients.
      </p>
      <p class="small">
        We love them. We travel the world for them, cross the jungle, sail the
        sea, take the train. But Friday afternoons are off because there's more
        to life than work.
      </p>
      <div class="client-logos">
        <img src="~/assets/images/logos.svg" role="presentation">
      </div>
      <div id="contact" class="contact">
        <h2>Let's talk business.</h2>
        <p>
          Shoot us an
          <a href="mailto:hello@overnice.com">email</a>
          or visit us in
          <a
            href="https://goo.gl/maps/kJ45arnjaPRWryRL6"
            target="_blank"
          >Kreuzberg</a>
        </p>
        <h2 class="hiring">
          We're hiring!
        </h2>
        <p>
          <a
            href="https://www.notion.so/overnice/Job-offer-Project-and-Office-Manager-d23106accb8146699e70180de2cd414d"
            target="_blank"
          >Project and Office Manager</a>
        </p>
        <p>
          <a
            href="https://www.notion.so/overnice/Job-offer-Interaction-Designer-Web-af544609803d4a9dbaf5a5f05ff89d44"
            target="_blank"
          >Interaction Designer (Web)</a>
        </p>
        <p class="footnotes">
          <nuxt-link class="clickable" to="/imprint">
            Imprint
          </nuxt-link>
          <nuxt-link class="clickable" to="/privacy">
            Privacy
          </nuxt-link>

          <!-- <a href="">Jobs</a> -->
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import TimelineMax from 'gsap/src/uncompressed/TimelineMax'
export default {
  mounted() {
    this.$nextTick(this.handleAboutVisual)
  },
  methods: {
    nav(link) {
      // store the current scroll position
      const node = document.createElement('div')

      // append div to body
      document.body.appendChild(node)

      node.classList += 'visual-transition'
      node.id = 'visual-transition'

      node.setAttribute(
        'style',
        `
        left: 0;
        top: 0;
        width: 100vh;
        height: 100vh;
        opacity: 1;
      `
      )

      const pageTransition = new TimelineMax()

      pageTransition.to('#visual-transition', 0.6, {
        opacity: '0',
        ease: this.$gsap.Expo.easeInOut
      })
    },
    handleAboutVisual() {
      if (window.innerWidth > 650) {
        // Pin Visual
        const scenePinVisual = new this.$scrollmagic.Scene({
          triggerElement: '#about',
          duration: document.body.clientHeight,
          offset: window.innerHeight * 0.5
        }).setPin('#about--visual', { pushFollowers: false })
        this.$ksvuescr.$emit('addScene', 'scenePinVisual', scenePinVisual)

        // Grow Visual
        const growVisual = this.$gsap.TweenMax.to('#about--visual--outer', 1, {
          paddingLeft: '0px',
          paddingTop: '0px',
          paddingBottom: '0px',
          ease: this.$gsap.Expo.easeIn
        })
        const sceneGrowVisual = new this.$scrollmagic.Scene({
          triggerElement: '#about',
          duration: 300,
          offset: window.innerHeight * 0.5 - 300
        }).setTween(growVisual)
        this.$ksvuescr.$emit('addScene', 'sceneGrowVisual', sceneGrowVisual)

        // Keep image steady
        const keepVisualSteady = this.$gsap.TweenMax.from(
          '#about--visual--image',
          1,
          {
            marginLeft: '0px',
            ease: this.$gsap.Expo.easeIn
          }
        )
        const sceneKeepVisualSteady = new this.$scrollmagic.Scene({
          triggerElement: '#about',
          duration: 300,
          offset: window.innerHeight * 0.5 - 300
        }).setTween(keepVisualSteady)
        this.$ksvuescr.$emit(
          'addScene',
          'sceneKeepVisualSteady',
          sceneKeepVisualSteady
        )

        // Change Opacity of Overlaying Nav
        const sceneChangeNavOpacity = new this.$scrollmagic.Scene({
          triggerElement: '#about',
          duration: document.body.clientHeight,
          offset: window.innerHeight * 0.5
        }).setClassToggle('#controls', 'on-image')
        this.$ksvuescr.$emit(
          'addScene',
          'sceneChangeNavOpacity',
          sceneChangeNavOpacity
        )
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.about {
  position: relative;
  margin: 0 auto;
  width: 100%;
}

.about--visual {
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  box-sizing: border-box;

  video,
  img {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.02);
    width: auto;
    min-height: 100vh;
  }
}

.about--visual--outer {
  width: 100%;
  height: 100%;
  padding: var(--m-spacing) var(--l-spacing) var(--m-spacing) var(--m-spacing);
  box-sizing: border-box;
}

.about--visual--inner {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

#about--visual--image {
  margin-left: calc(var(--m-spacing) * 0.5);
}

.about--content {
  max-width: calc(var(--content-max-width) * 0.5);
  padding: 12rem 0 12rem;
  padding-right: var(--l-spacing);
  margin-left: 50%;
  min-height: 100vh;
  box-sizing: border-box;

  p.small {
    opacity: 1;
  }
}

.client-logos {
  width: 100%;
  margin-top: var(--m-spacing);

  img {
    width: 100%;
    height: auto;
  }
}

.contact {
  margin-top: var(--l-spacing);
  color: var(--red);

  h2 {
    font-weight: 500;
    font-size: var(--p-font-size);
  }

  p {
    font-size: var(--small-font-size);
  }
}

h2.hiring {
  margin-top: var(--l-spacing);
}

p.footnotes {
  display: flex;
  margin-top: var(--l-spacing);

  a {
    margin-right: 2rem;
    font-size: var(--tiny-font-size) !important;
    color: rgba(255, 255, 255, 0.5);
    font-weight: 400;
    text-shadow: none;

    &:before {
      background: rgba(255, 255, 255, 0);
      height: 1px;
      margin-top: -0.5rem;
    }

    &:hover,
    &:active,
    &:focus {
      opacity: 1;
    }
  }
}

@media (max-width: $bp-tablet) {
  .about--visual {
    position: relative;
    width: 100%;
    height: auto; // given the video has a 4:3 aspect ratio

    video,
    img {
      position: relative;
      top: 0;
      left: 0;
      transform: none;
      width: 100%;
      height: auto;
      min-height: 0;
    }
  }

  #about--visual--image {
    margin-left: 0;
  }

  .about--visual--outer {
    padding: var(--m-spacing);
    padding: 0;
  }

  .about--content {
    margin: 0;
    padding: var(--xl-spacing) var(--l-spacing) var(--l-spacing);
    max-width: none;
    min-height: 0;
  }

  .client-logos,
  .contact {
    margin-top: var(--xl-spacing);
  }
}
</style>

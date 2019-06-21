<template>
  <section id="about" class="about">
    <div id="about--visual" class="about--visual">
      <div id="about--visual--outer" class="about--visual--outer">
        <div id="about--visual--inner" class="about--visual--inner">
          <!-- <video playsinline autoplay muted loop>
            <source src="~/assets/videos/background.webm" type="video/webm">
          </video>-->
          <img id="about--visual--image" src="~/assets/images/office.jpg" role="presentation">
        </div>
      </div>
    </div>
    <div class="about--content">
      <h2>About</h2>
      <p>Overnice is obsessed with quality, technology, and its clients.</p>
      <p
        class="small"
      >We love them. We travel the world for them, cross the jungle, sail the sea, take the train. But Friday afternoons are off because there's more to life than work.</p>
      <div class="client-logos">
        <img src="~/assets/images/logos.svg" role="presentation">
      </div>
      <div id="contact" class="contact">
        <h2>Let's talk business</h2>
        <p>
          Shoot us an
          <a href="mailto:hello@overnice.com">email</a>
          or visit us in
          <a href="https://goo.gl/maps/kJ45arnjaPRWryRL6" target="blank">Kreuzberg</a>
        </p>
        <p class="footnotes">
          <a href="/imprint">Imprint</a>
          <a href="/privacy">Privacy</a>
          <!-- <a href="">Jobs</a> -->
        </p>
      </div>
    </div>
  </section>
</template>

<script>
// if (process.browser && window.innerWidth > 650) { // $bp-tablet

//   window.onNuxtReady(() => {
//     // Pin Visual
//     new ScrollMagic.Scene({ triggerElement: '#about', duration: document.body.clientHeight, offset: window.innerHeight * 0.5 })
//       .setPin('#about--visual', { pushFollowers: false })
//       // .addIndicators({ name: 'Pin About Visual' })
//       .addTo(controller)

//     // Grow Visual
//     const growVisual = TweenMax.to('#about--visual--outer', 1, {
//       paddingLeft: '0px',
//       paddingTop: '0px',
//       paddingBottom: '0px',
//       ease: Expo.easeIn
//     })
//     new ScrollMagic.Scene({ triggerElement: '#about', duration: 300, offset: window.innerHeight * 0.5 - 300 })
//       .setTween(growVisual)
//       // .addIndicators({ name: 'Grow Visual' })
//       .addTo(controller)

//     // Keep image steady
//     const keepVisualSteady = TweenMax.from('#about--visual--image', 1, {
//       marginLeft: '0px',
//       ease: Expo.easeIn
//     })
//     new ScrollMagic.Scene({ triggerElement: '#about', duration: 300, offset: window.innerHeight * 0.5 - 300 })
//       .setTween(keepVisualSteady)
//       // .addIndicators({ name: 'Keep Visual Steady' })
//       .addTo(controller)
//   })
// }

export default {

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

    video, img {
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(1.02);
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
    background: rgba(255,255,255,0.1);
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

  p.footnotes {
    display: flex;
    margin-top: var(--l-spacing);

    a {
      margin-right: 2rem;
      font-size: var(--tiny-font-size)!important;
      color: rgba(255,255,255,.5);
      font-weight: 400;
      text-shadow: none;

      &:before {
        background: rgba(255,255,255,0);
        height: 1px;
        margin-top: -0.5rem;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  @media (max-width: $bp-tablet) {
    .about--visual {
      position: relative;
      width: 100%;
      height: auto; // given the video has a 4:3 aspect ratio

      video, img {
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

    .client-logos, .contact {
      margin-top: var(--xl-spacing);
    }
  }
</style>

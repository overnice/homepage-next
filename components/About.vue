<template>
  <section id="about" class="about">
    <div id="about--visual" class="about--visual">
      <div id="about--visual--outer" class="about--visual--outer">
        <div id="about--visual--inner" class="about--visual--inner">
          <video playsinline autoplay muted loop>
            <source src="~/assets/videos/background.webm" type="video/webm">
          </video>
        </div>
      </div>
    </div>
    <div class="about--content">
      <h2>About</h2>
      <p>
        Overnice is obsessed with quality, technology, and its clients.
      </p>
      <p class="small">
        We love them. We travel the world for them, cross the jungle, sail the sea, take the train. But Friday afternoons are off because there's more to life than work.
      </p>
      <div class="client-logos">
        <img src="~/assets/images/logos.svg">
      </div>
      <div class="contact">
        <h2>Let's talk business</h2>
        <p>
          Give us a <a href="" target="blank">call</a>,
          shoot us an <a href="" target="blank">email</a>,
          visit us in <a href="" target="blank">Kreuzberg</a>
        </p>
        <p class="footnotes">
          <a href="">Imprint</a>
          <a href="">Privacy</a>
          <a href="">Jobs</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
if (process.browser) {
  /* global window, document, ScrollMagic, TweenMax, Expo, controller */

  window.onNuxtReady(() => {
    // Pin Visual
    new ScrollMagic.Scene({ triggerElement: '#about', duration: document.height, offset: window.innerHeight * 0.5 })
      .setPin('#about--visual', { pushFollowers: false })
      // .addIndicators({ name: 'Pin About Visual' })
      .addTo(controller)

    // Grow Visual
    const growVisual = TweenMax.to('#about--visual--outer', 1, {
      paddingLeft: '0px',
      paddingTop: '0px',
      paddingBottom: '0px',
      ease: Expo.easeIn
    })
    new ScrollMagic.Scene({ triggerElement: '#about', duration: 300, offset: window.innerHeight * 0.5 - 300 })
      .setTween(growVisual)
      // .addIndicators({ name: 'Grow Visual' })
      .addTo(controller)
  })
}

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

    video {
      position: absolute;
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

  .about--content {
    max-width: calc(var(--content-max-width) * 0.5);
    padding: 12rem 0 12rem;
    padding-right: var(--l-spacing);
    margin-left: 50%;
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

    a {
      color: inherit;
      text-decoration: none;
      position: relative;
      display: inline-block;
      font-weight: 600;
      text-shadow:
        -0.125rem -0.125rem 0 var(--darkgray),
        0.125rem -0.125rem 0 var(--darkgray),
        -0.125rem 0.125rem 0 var(--darkgray),
        0.125rem 0.125rem 0 var(--darkgray),
        -0.25rem -0.25rem 0 var(--darkgray),
        0.25rem -0.25rem 0 var(--darkgray),
        -0.25rem 0.25rem 0 var(--darkgray),
        0.25rem 0.25rem 0 var(--darkgray),
        -0.375rem -0.375rem 0 var(--darkgray),
        0.375rem -0.375rem 0 var(--darkgray),
        -0.375rem 0.375rem 0 var(--darkgray),
        0.375rem 0.375rem 0 var(--darkgray);
      transition: color .3s cubic-bezier(.25,0,0,1), transform .3s cubic-bezier(.25,0,0,1);

      &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        margin-top: -1.125rem;
        height: 2px;
        background: rgba(#ff795f, .7);
        z-index: -1;
        border-radius: 1px;
        transition: background .3s cubic-bezier(0.25, 0, 0, 1), transform .3s cubic-bezier(0.25, 0, 0, 1);
      }

      &:hover {
        color: white;
        transform: translate3d(0,-2px,0);

        &:before {
          transform: translate3D(0,2px,0);
          background: rgba(255,255,255,.5);
        }
      }
    }
  }

  .footnotes {
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
</style>

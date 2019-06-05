<template>
  <div class="case">
    <nuxt-link to="/" class="back" />
    <div class="case--inner">
      <header>
        <h1>Jungle Fever</h1>
        <p>
          In 2017, we took off to Costa Rica to join a technological jungle adventure with Nimiq.
        </p>
      </header>
      <figure class="full">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==">
      </figure>
      <p>
        Nimiq is an Inuit word for an object or force of connection and unification. Our client thought of Nimiq as a good name for an revolutionary idea: a entirely browser-based blockchain, written entirely in JavaScript.
      </p>
      <h2>This is a H2</h2>
      <p>
        A web-native Blockchain eradicates the need to download anything, to register anywhere and - most importantly - to understand how it works to be able to use it:
      </p>
      <blockquote>
        The holy grail of Blockchain mass adoption.
      </blockquote>
      <p>
        Honoring the technological possibilities Nimiq works with, we developed an interface that needed to be, as one of the founders described it, ‘so easy, your grandma could use it’.
      </p>
      <figure class="left">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==">
      </figure>
      <p>
        With one click, users are enabled to connect to the Nimiq Blockchain and become a ‘first class’ citizen. This means he can mine Nimiq with his desktop computer, laptop or even a mobile phone.
      </p>
      <p>
        We challenged the interface to follow the simplicity of the tech. In sync with the platform, ‘Cashlinks’ allows to send money as a plain link, pasteable in any text message.
      </p>
      <figure class="right">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==">
      </figure>
      <p>
        Besides the UI and UX, we engaged in the marketing of the projekt. Many of the stages an ICO goes through are similar to the ones of a fundraising campaign.
      </p>
      <h3>This is a H3</h3>
      <p>
        Our activities included building the website, defining wording and tonality, steering community and social media efforts, PR outreach, and ICO specific communication measures, such as Bitcointalk.org announcements.
      </p>
      <figure class="full">
        <img src="https://s3.eu-central-1.amazonaws.com/on-website-assets/nimiq/wallet.jpg">
        <figcaption>This is a caption</figcaption>
      </figure>
      <p>
        We learned by doing and contributed to US$18 million being raised in less than two weeks.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'case',
  head() {
    return {
      title: 'Case'
    }
  // },
  // transition(to, from) {
  //   return ({
  //     name: 'zoom',
  //     duration: 1000
  //   })
  }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.case {
  background: white;

  header p {
    font-size: var(--p-font-size);
    margin-top: 3rem;
  }

  header + figure.full {
    margin-bottom: var(--xl-spacing);
  }
}

.case--inner {
  width: 100%;
  max-width: var(--content-max-width);
  padding: calc(var(--l-spacing) * 2) var(--l-spacing);
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: $bp-tablet) {
    padding-top: calc(var(--l-spacing) * 4);
  }
}

.back {
  position: fixed;
  z-index: 7000;
  top: 0;
  right: 0;
  padding: 5rem;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  outline: none;
  opacity: .4;
  transform: rotate(0deg) translateZ(0);
  transition: opacity .2s ease;

  > span {
    display: none
  }

  &:before, &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    width: 4.5rem;
    background: var(--darkgray);
  }

  &:before {
    transform: translate3D(-50%, -50%, 0) rotate(-45deg);
  }

  &:after {
    transform: translate3D(-50%, -50%, 0) rotate(45deg) translateZ(0);
  }

  &:hover {
    transition: opacity .2s ease, transform .2s ease;
    transform: rotate(90deg);
    opacity: 1;
  }

  @media (max-width: $bp-tablet) {
    padding: 4rem;
  }
}

p {
  font-size: var(--small-font-size);
  margin-top: 3rem;
}

h2 {
  font-size: var(--p-font-size);
  font-weight: 600;
  margin-top: 6rem;
}

h3 {
  font-size: 28px;
  font-weight: 600;
  margin-top: 5rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  + p {
    margin-top: 2rem;
  }
}

blockquote {
  font-size: var(--p-font-size);
  color: var(--red);
  margin: 5rem;
}

figure {
  margin-left: calc(var(--l-spacing) * -1);
  margin-right: calc(var(--l-spacing) * -1);
  // background: rgba($darkgray, 0.1);
  margin-top: 5rem;

  & + p {
    margin-top: 5rem;
  }

  @media (min-width: 520px) {
    &.left, &.right {
      width: 60%;
      margin-top: 3rem;
      margin-bottom: 3rem;

      & + p {
        margin-top: 3rem;
      }
    }

    &.left {
      float: left;
      margin-right: 4rem;
    }

    &.right {
      float: right;
      margin-left: 4rem;
    }
  }

  @media (min-width: $bp-tablet) {
    &.left, &.right {
      width: 50%;
    }
  }

  img {
    display: block;
    width: 100%;
    border-radius: 1px;
  }

  figcaption {
    font-size: var(--tiny-font-size);
    padding: 1rem;
    text-align: center;
  }
}

@media (max-width: $bp-tablet) {
  blockquote {
    margin-left: 3rem;
    margin-right: 3rem;
  }
}

</style>

<template>
  <div :key="$route.params.slug">
    <h1>{{ $route.params.slug }}</h1>
    <h3>
      In 2017, we took off to Costa Rica to join a technological jungle adventure with Nimiq.
    </h3>
    <figure>
      <img src="/cases/branding_archilyse/logo.svg">
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
      <a href="">Honoring the technological</a> possibilities Nimiq works with, we developed an interface that needed to be, as one of the founders described it, ‘so easy, your grandma could use it’.
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
    <figure>
      <img src="https://s3.eu-central-1.amazonaws.com/on-website-assets/nimiq/wallet.jpg">
      <figcaption>This is a caption</figcaption>
    </figure>
    <p>
      We learned by doing and contributed to US$18 million being raised in less than two weeks.
    </p>
  </div>
</template>

<script>
// import Close from '~/components/Layout/Close.vue'

export default {
  // async asyncData({ params }) {
  //   const fileContent = await import(`~/static/caseMarkdownFiles/${params.slug}.md`)
  //   return {
  //     content: fileContent
  //   }
  // },
  // components: { Close },
  layout: 'content',
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

</style>

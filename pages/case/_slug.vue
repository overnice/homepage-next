<template>
  <div class="content">
    <header>
      <h1>{{ title }}</h1>
      <p class="tags">
        <span v-for="tag in tags" :key="tag">{{ tag }}</span>
      </p>
      <p v-html="abstract" />
    </header>
    <div :key="$route.params.slug" v-html="body" />
  </div>
</template>
<script>
import pageTransition from '~/utils/page-transition'
import { TimelineMax } from 'gsap'
export default {
  transition: pageTransition,
  // async asyncData({ params }) {
  //   const fileContent = await import(`~/static/caseMarkdownFiles/${params.slug}.md`)
  //   return {
  //     content: fileContent
  //   }
  // },
  // components: { Close },
  layout: 'content',

  async asyncData({ params, app }) {
    const fileContent = await import('~/static/' + app.i18n.locale + '/case/' + params.slug + '.md')
    const attr = fileContent.attributes

    return {
      slug: params.slug,
      // related: attr.related,
      body: fileContent.html,
      title: attr.title,
      abstract: attr.abstract,
      tags: attr.tags,
      urlTranslation: attr.urlTranslation
    }
  },
  mounted() {
    // delete element with id visual-transition from dom
    const transElement = document.getElementById('visual-transition')
    // just remove it if its mounted before
    if (transElement) {
      const pageTransition = new TimelineMax()
      pageTransition.to('#visual-transition', 0.6, { opacity: 0, ease: this.$gsap.Expo.easeInOut })
        .addCallback(() => {
          transElement.remove()
        }, 0.6)
    }
  },
  head() {
    return {
      title: this.title + ' – overnice',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: this.title, content: 'My custom description..' }
      ]
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 5.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.tags {
  font-size: var(--small-font-size) !important;
  opacity: .5;

  span + span:before {
    content: "•"
  }
}
</style>

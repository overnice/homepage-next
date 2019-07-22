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
import { TimelineMax } from 'gsap'
export default {
  layout: 'content',

  async asyncData({ params, app }) {
    const fileContent = await import('~/static/' + app.i18n.locale + '/jobs/' + params.slug + '.md')
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
        // { hid: 'description', name: this.title, content: 'My custom description..' }
      ]
    }
  }

}
</script>

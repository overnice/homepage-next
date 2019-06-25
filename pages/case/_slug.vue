<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
      <p class="tags">
        <span
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </span>
      </p>
      <p v-html="abstract" />
    </header>
    <div :key="$route.params.slug" v-html="body" />
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
  },

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
  }

}
</script>

<style lang="scss" scoped>
.tags {
  font-size: var(--small-font-size) !important;
  opacity: .5;

  span + span:before {
    content: "•"
  }
}
</style>

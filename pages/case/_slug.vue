<template>
  <div :key="$route.params.slug" v-html="body" />
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
  },

  async asyncData({ params, app }) {
    const fileContent = await import('~/static/' + app.i18n.locale + '/case/' + params.slug + '.md')
    const attr = fileContent.attributes
    console.log(fileContent)
    return {
      slug: params.slug,
      name: attr.name,
      related: attr.related,
      body: fileContent.html,
      title: attr.title,
      urlTranslation: attr.urlTranslation
    }
  }

}
</script>

<style lang="scss" scoped>

</style>

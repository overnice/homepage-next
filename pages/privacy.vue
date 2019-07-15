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
export default {
  layout: 'content',
  async asyncData({ params, app }) {
    const fileContent = await import('~/static/' + app.i18n.locale + '/privacy.md')
    const attr = fileContent.attributes

    return {
      body: fileContent.html,
      title: attr.title,
      abstract: attr.abstract,
      tags: attr.tags,
      urlTranslation: attr.urlTranslation
    }
  },
  head() {
    return {
      title: 'Privacy'
    }
  }
}
</script>

<template>
  <section :id="id" class="service-category">
    <header>
      <h2>{{ title }}</h2>
      <p>{{ copy }}</p>
      <p class="small">
        {{ smallCopy }}
      </p>
    </header>
    <div class="cases">
      <CasePreview
        v-for="casePreview in casePreviews"
        :key="casePreview.slug"
        :param="casePreview.slug"
        :copy="casePreview.copy"
        :visual="casePreview.visual"
      />
    </div>
  </section>
</template>

<script>
import CasePreview from '~/components/CasePreview.vue'
// import fm from '~/components/CasePreview.md'

export default {
  components: { CasePreview },
  // extends: fm.vue.component,
  props: {
    id: String,
    title: String,
    copy: String,
    smallCopy: String,
    casePreviews: Array
  },
  methods: {
    async asyncData({ params, app }) {
      const fileContent = await import(`~/static/${app.i18n.locale}/caseMarkdownFiles/${params.slug}.md`)
      const attr = fileContent.attributes
      return {
        id: attr.id,
        name: params.slug,
        related: attr.related,
        renderFunc: fileContent.vue.render,
        staticRenderFuncs: fileContent.vue.staticRenderFns,
        title: attr.title,
        urlTranslation: attr.urlTranslation
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.service-category {
  position: relative;
  z-index: 2;
  max-width: var(--content-max-width);
  box-sizing: border-box;
  margin: 0 auto;
  padding: var(--l-spacing);

  @media (min-width: $bp-case-layout + 1) {
    pointer-events: none;

    &/deep/ {
      .case {
        pointer-events: all;
      }
    }
  }
}

@media (max-width: $bp-case-layout) {
  .cases {
    display: flex;
    margin: calc(var(--l-spacing) * -1); // compensate service category padding + case hover state
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    padding: var(--l-spacing) 0;
  }
}
</style>

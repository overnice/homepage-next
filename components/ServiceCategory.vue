<template>
  <section class="service-category">
    <header>
      <h2>{{ title }}</h2>
      <p>{{ copy }}</p>
      <p class="small">
        {{ smallCopy }}
      </p>
    </header>
    <CasePreview
      v-for="casePreview in casePreviews"
      :key="casePreview.id"
      :copy="casePreview.copy"
    />
  </section>
</template>

<script>
import CasePreview from '~/components/CasePreview.vue'

export default {
  components: { CasePreview },
  props: {
    title: String,
    copy: String,
    smallCopy: String,
    casePreviews: Array
  }
}
</script>

<style lang="scss" scoped>
  .service-category {
    position: relative;
    z-index: 2;
    max-width: var(--content-max-width);
    box-sizing: border-box;
    margin: 0 auto;
    padding: 10rem;
  }
</style>

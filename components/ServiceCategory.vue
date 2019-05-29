<template>
  <section class="service-category">
    <header>
      <h1>{{ title }}</h1>
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
    color: var(--white);
    position: relative;
    z-index: 2;
    max-width: 760px;
    margin: 0 auto 160px;
  }

  header {
    margin-bottom: 104px;
  }

  /* .section:first-of-type {
    background: none;
  } */

  h1 {
    font-size: 70px;
    font-weight: bold;
    line-height: 1;
  }

  p {
    font-size: 40px;
    margin-top: 24px;
  }

  p.small {
    font-size: 28px;
    opacity: .4;
  }
</style>

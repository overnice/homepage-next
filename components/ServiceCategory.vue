<template>
  <section class="service-category">
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
        :key="casePreview.id"
        :copy="casePreview.copy"
      />
    </div>
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
@import 'css/variables';

.service-category {
  position: relative;
  z-index: 2;
  max-width: var(--content-max-width);
  box-sizing: border-box;
  margin: 0 auto;
  padding: var(--l-spacing);
}

@media (max-width: $bp-case-layout) {
  .cases {
    display: flex;
    margin: 0 calc(var(--l-spacing) * -1); // compensate service category padding
    overflow: auto;
  }
}
</style>

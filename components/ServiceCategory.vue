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
      copy="A radical, inclusive and concept-driven approach to branding one of the most thrilling technologies in existence: <strong>Nimiq</strong>, a browser-based cryptocurrency."
    />
    <CasePreview
      copy="Automation killing jobs is a scary topic; ironically, an AI-based service overnice branded and dubbed <strong>Peers</strong> could be the solution. The branding required tact."
    />
    <CasePreview
      copy="A dual brand strategy that leverages interaction and synergy to create more than the sum of its parts for <strong>Archilyse</strong>, architecture analysis by machine learning."
    />
    <CasePreview
      copy="<strong>Prisma</strong> simplifies database management and as a typical start-up, everything changes all the time. How branding can evolve without losing identity."
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
    smallCopy: String
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

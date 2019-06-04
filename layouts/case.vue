<template>
  <div class="container">
    <nuxt />
    <Controls />
  </div>
</template>
<script>
import Controls from '~/components/Layout/Controls.vue'

export default {
  components: { Controls }
}
</script>

<style lang="scss" scoped>
  .container {
    color: var(--darkgray);

    & /deep/ .logo-vertical {
      fill: var(--darkgray);
      opacity: .15;
    }
  }
</style>

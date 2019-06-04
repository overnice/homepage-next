<template>
  <nuxt-link to="/case" class="case">
    <div class="visual" />
    <p v-html="copy" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    copy: String
  }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.case {
  --case-padding: 10rem;

  color: inherit;
  text-decoration: none;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  transition: transform .6s cubic-bezier(0.25, 0, 0, 1), color .2s ease;
  cursor: pointer;

  &:nth-child(odd) {
    flex-direction: row-reverse;

    .visual {
      margin-left: 0;
      margin-right: calc(var(--case-padding) * -1);
    }
    p {
      padding-left: 0;
      padding-right: var(--case-padding);
    }
  }

  &.no-interaction {
    cursor: default;
  }

  &:not(.no-interaction):hover {
    transform: scale3D(1.05, 1.05, 1.05);
    color: var(--red);

    .visual {
      background: var(--red);
      transform: scale3D(1.1,1.1,1.1);
      opacity: 1;
    }
  }
}

p {
  font-size: var(--small-font-size);
  padding-left: var(--case-padding);
  margin-top: 0;

  & /deep/ strong {
    color: white !important;
  }
}

.visual {
  background: rgba(255,255,255,0.1);
  border-radius: 1px;
  height: 280px;
  width: 350px;
  flex: 0 0 auto;
  margin-left: calc(var(--case-padding) * -1);
  transition: background .2s ease, transform .6s cubic-bezier(0.25, 0, 0, 1);
}

@media (max-width: $bp-desktop) {
  .case {
    --case-padding: 8rem;
  }
}
</style>

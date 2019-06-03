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
.case {
  color: inherit;
  text-decoration: none;
  margin-top: 64px;
  display: flex;
  align-items: center;
  transition: transform .6s cubic-bezier(0.25, 0, 0, 1), color .2s ease;
  cursor: pointer;

  &:nth-child(odd) {
    flex-direction: row-reverse;

    .visual {
      margin-left: 0;
      margin-right: -10rem;
    }
    p {
      padding-left: 0;
      padding-right: 10rem;
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
  padding-left: 10rem;
  margin-top: 0;
}

.visual {
  background: rgba(255,255,255,0.1);
  border-radius: 1px;
  height: 280px;
  width: 350px;
  flex: 0 0 auto;
  margin-left: -10rem;
  transition: background .2s ease, transform .6s cubic-bezier(0.25, 0, 0, 1);
}
</style>

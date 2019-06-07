<template>
  <nuxt-link to="/case" class="case">
    <div class="visual" :style="{ backgroundImage: `url(${visual})` }" />
    <p v-html="copy" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    visual: String,
    copy: String
  }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.case {
  color: inherit;
  text-decoration: none;
  margin-top: var(--m-spacing);
  display: flex;
  align-items: center;
  transition: transform .6s cubic-bezier(0.25, 0, 0, 1), color .2s ease;
  cursor: pointer;

  &:nth-child(even) {
    flex-direction: row-reverse;

    .visual {
      margin-left: 0;
      margin-right: calc(var(--l-spacing) * -1);
    }
    p {
      padding-left: 0;
      padding-right: var(--l-spacing);
    }
  }

  &.no-interaction {
    cursor: default;
  }

  &:not(.no-interaction):hover,
  &:not(.no-interaction):active {
    transform: scale3D(1.05, 1.05, 1.05);
    color: var(--red);

    .visual {
      // background: var(--red);
      transform: scale3D(1.1,1.1,1.1);
      opacity: 1;
    }
  }

  // Horizontal Layout for Cases on Mobile
  @media (max-width: $bp-case-layout) {
    flex-direction: column !important;
    flex: 0 0 auto;
    width: 40%;
    max-width: none;
    margin-left: var(--m-spacing);

    &:last-child {
      padding-right: var(--m-spacing);
    }

    .visual {
      margin: 0 !important;
      width: 100%;
      max-width: none;
      margin-left: var(--m-spacing);
    }

    p {
      padding: var(--l-spacing) 3rem 3rem !important;
    }
  }

  @media (max-width: 700px) {
    width: 60%;
  }

  @media (max-width: $bp-mobile) {
    width: 80%;

    &:not(.no-interaction):hover,
    &:not(.no-interaction):active {
      transform: scale3D(1.01, 1.01, 1.01);
    }
  }
}

p {
  font-size: var(--small-font-size);
  padding-left: var(--l-spacing);
  margin-top: 0;

  & /deep/ strong {
    color: white !important;
  }
}

.visual {
  background: rgba(255,255,255,0.1);
  border-radius: 1px;
  height: 280px;
  width: 50%;
  max-width: 350px;
  flex: 0 0 auto;
  margin-left: calc(var(--l-spacing) * -1);
  background-size: cover;
  background-position: 50%;
  transition: background .2s ease, transform .6s cubic-bezier(0.25, 0, 0, 1);
}
</style>

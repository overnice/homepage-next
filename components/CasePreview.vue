<template>
  <nuxt-link to="/case" class="case">
    <!-- <transition name="test" mode="out-in"> -->
      <div class="visual" />
    <!-- </transition> -->
    <p v-html="copy" />
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    copy: String
  },
  computed: mapState(['page']),
  transition: {
    name: 'test',
    mode: 'out-in',
    duration: 300
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
      margin-right: -80px;
    }
    p {
      padding-left: 0;
      padding-right: 80px;
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
  font-size: 28px;
  padding-left: 80px;
  margin-top: 0;
}

.visual {
  background: rgba(255,255,255,0.1);
  border-radius: 1px;
  height: 280px;
  width: 350px;
  flex: 0 0 auto;
  margin-left: -80px;
  transition: background .2s ease, transform .6s cubic-bezier(0.25, 0, 0, 1);
}

// .visual-transition {
//   background-color: var(--red);
//   /* opacity: .1; */
//   pointer-events: none;
//   border-radius: 1px;
//   z-index: 2;
// }
</style>

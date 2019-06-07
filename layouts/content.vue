<template>
  <div class="content">
    <Close link="/" />
    <div class="content--inner">
      <nuxt />
    </div>
    <Controls />
  </div>
</template>
<script>
import Close from '~/components/Layout/Close.vue'
import Controls from '~/components/Layout/Controls.vue'

export default {
  components: { Close, Controls }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.content--inner {
  width: 100%;
  max-width: var(--content-max-width);
  padding: calc(var(--l-spacing) * 2) var(--l-spacing);
  margin: 0 auto;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: $bp-tablet) {
    padding-top: calc(var(--l-spacing) * 3);
  }

  @media (max-width: $bp-mobile) {
    padding-top: calc(var(--l-spacing) * 4);
  }
}

.content {
  color: var(--darkgray);

  & /deep/ {
    .logo-vertical {
      fill: var(--red);
      opacity: 1;
    }

    header p {
      font-size: var(--p-font-size);
      margin-top: 3rem;
    }

    header + figure.full {
      margin-bottom: var(--xl-spacing);
    }

    p {
      font-size: var(--small-font-size);
      margin-top: 3rem;
    }

    h2 {
      font-size: var(--p-font-size);
      font-weight: 600;
      margin-top: 6rem;
    }

    h3 {
      font-size: 28px;
      font-weight: 600;
      margin-top: 5rem;
      text-transform: uppercase;
      letter-spacing: 1px;

      + p {
        margin-top: 2rem;
      }
    }

    blockquote {
      font-size: var(--p-font-size);
      color: var(--red);
      margin: 5rem;
    }

    figure {
      margin-left: calc(var(--l-spacing) * -1);
      margin-right: calc(var(--l-spacing) * -1);
      // background: rgba($darkgray, 0.1);
      margin-top: 5rem;

      & + p {
        margin-top: 5rem;
      }

      @media (min-width: 520px) {
        &.left, &.right {
          width: 60%;
          margin-top: 3rem;
          margin-bottom: 3rem;

          & + p {
            margin-top: 3rem;
          }
        }

        &.left {
          float: left;
          margin-right: 4rem;
        }

        &.right {
          float: right;
          margin-left: 4rem;
        }
      }

      @media (min-width: $bp-tablet) {
        &.left, &.right {
          width: 50%;
        }
      }

      img {
        display: block;
        width: 100%;
        border-radius: 1px;
      }

      figcaption {
        font-size: var(--tiny-font-size);
        padding: 1rem;
        text-align: center;
      }
    }

    @media (max-width: $bp-tablet) {
      blockquote {
        margin-left: 3rem;
        margin-right: 3rem;
      }
    }
  }
}
</style>

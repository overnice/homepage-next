<template>
  <div class="content">
    <Close @click="goback" />
    <div class="content--inner">
      <nuxt />
    </div>
    <Controls />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Close from '~/components/Layout/Close.vue'
import Controls from '~/components/Layout/Controls.vue'

export default {
  components: { Close, Controls },
  methods: {
    goback() {
      if (!this.fromExtern) {
        this.$router.back()
      } else {
        this.$router.push('/')
      }
    }
  },
  computed: mapState({
    fromExtern: state => state.fromExtern
  })
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

  @media (max-width: $bp-desktop) {
    padding-top: calc(var(--l-spacing) * 2.5);
  }

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

    // Make H3 following H1 Abstract, put space after

    header {
      p {
        font-size: var(--p-font-size);
        margin-top: 3rem;
      }

      + figure  { // no need to filter for .left or .right images because they are wrapped in divs anyways
        margin-bottom: var(--xl-spacing);
      }
    }

    // h1 + * {
    //   margin-top: var(--xl-spacing) !important;
    // }

    // h1 + h3 {
      // font-size: var(--p-font-size);
      // font-weight: 400;
      // margin-top: 3rem !important;
      // text-transform: none;
      // letter-spacing: 0;

      // & + * {
      //   margin-top: var(--xl-spacing) !important;
      // }

    //   & + figure:not(.left):not(.right)  {
    //     margin-top: var(--xl-spacing);
    //     margin-bottom: var(--xl-spacing);
    //   }
    // }

    p, ul, ol {
      font-size: var(--small-font-size);
      margin-top: 3rem;
      max-width: 100%;
      // overflow: hidden;
    }

    ul, ol {
      padding-left: 4rem;

      li {
        position: relative;
        list-style-type: none;

        &:before {
          content: "•";
          position: absolute;
          left: -4rem;
          width: 2.5rem;
          top: 0.125rem;
          text-align: right;
          font-weight: bold;
          color: var(--red);
        }

        & + li {
          margin-top: 2rem;
        }
      }
    }

    ol {
      counter-reset: ordered-list;

      li {
        &:before {
          counter-increment: ordered-list;
          content: counter(ordered-list) ")";
          font-size: 70%;
          top: 1rem;
        }
      }
    }

    h2 {
      font-size: var(--p-font-size);
      font-weight: 600;
      margin-top: 6rem;
    }

    h3 {
      font-size: var(--small-font-size);
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

      p {
        font-size: var(--p-font-size);
        margin: 0;
      }
    }

    img {
      display: block;
      width: 100%;
      border-radius: 1px;
    }

    figure {
      margin-left: calc(var(--l-spacing) * -1);
      margin-right: calc(var(--l-spacing) * -1);
      // background: rgba($darkgray, 0.1);
      margin-top: 5rem;

      & + p {
        margin-top: 5rem;
      }

      iframe {
        display: block;
        width: 100%;
      }
    }

    figcaption {
      font-size: var(--tiny-font-size);
      padding: 1rem;
      text-align: center;
    }

    @media (min-width: 520px) {
      .left, .right {
        width: 60%;

        figure {
          margin-top: 3rem;
          margin-bottom: 3rem;
        }

        & + p {
          margin-top: 3rem;
        }
      }

      .left {
        float: left;
        figure {
          margin-right: 4rem;
        }
      }

      .right {
        float: right;
        figure {
          margin-left: 4rem;
        }
      }
    }

    @media (min-width: $bp-tablet) {
      .left, .right {
        width: 50%;
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

<template>
  <div class="container contt">
    <nuxt />
  </div>
</template>
<script>

export default {
  computed: {
    currentScript() {
      if (this.$i18n.locale === 'de') { return '../.' } else {
        return '.'
      }
    }
  },
  mounted() {
    this.$nextTick(this.toggleNav)
  },
  methods: {
    toggleNav() {
      let hiddenDuration = window.innerHeight + 600

      if (window.innerWidth < 450) {
        hiddenDuration = window.innerHeight * 0.9
      }

      const sceneHideNav = new this.$scrollmagic.Scene({ triggerElement: '#content', duration: hiddenDuration })
        .setClassToggle('#controls', 'invisible')
      this.$ksvuescr.$emit('addScene', 'hideNav', sceneHideNav)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';
.container {
  background: var(--darkgray);
  color: white;
  padding-bottom: 50vh; // used to compensate the 50vh at the top, removed on mobile

  & /deep/ {
    .controls {
      background: var(--darkgray);
      z-index: 2;
    }

    .logo-vertical {
      color: white;
    }

    p {
      a {
        text-shadow:
          -0.125rem -0.125rem 0 var(--darkgray),
          0.125rem -0.125rem 0 var(--darkgray),
          -0.125rem 0.125rem 0 var(--darkgray),
          0.125rem 0.125rem 0 var(--darkgray),
          0.125rem 0 0 var(--darkgray),
          -0.125rem 0 0 var(--darkgray),
          0 0.125rem 0 var(--darkgray),
          0 -0.125rem 0 var(--darkgray),

          -0.25rem -0.25rem 0 var(--darkgray),
          0.25rem -0.25rem 0 var(--darkgray),
          -0.25rem 0.25rem 0 var(--darkgray),
          0.25rem 0.25rem 0 var(--darkgray),
          0.25rem 0 0 var(--darkgray),
          -0.25rem 0 0 var(--darkgray),
          0 0.25rem 0 var(--darkgray),
          0 -0.25rem 0 var(--darkgray),

          -0.375rem -0.375rem 0 var(--darkgray),
          0.375rem -0.375rem 0 var(--darkgray),
          -0.375rem 0.375rem 0 var(--darkgray),
          0.375rem 0.375rem 0 var(--darkgray),
          0.375rem 0 0 var(--darkgray),
          -0.375rem 0 0 var(--darkgray),
          0 0.375rem 0 var(--darkgray),
          0 -0.375rem 0 var(--darkgray);
        transition: color .3s cubic-bezier(.25,0,0,1), transform .3s cubic-bezier(.25,0,0,1);

        &:before {
          background: rgba(#ff795f, .7);
        }

        &:hover,
        &:active,
        &:focus {
          color: white;

          &:before {
            background: rgba(255,255,255,.5);
          }
        }
      }
    }
  }

  @media (max-width: $bp-mobile) {
    padding-bottom: 0;
  }
}
</style>

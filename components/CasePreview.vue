<template>
  <div class="case" @click="animate()">
    <div
      :id="imageid"
      ref="caseImage"
      class="visual"
      :style="{ backgroundImage: `url(${visual})` }"
    />
    <p v-html="copy" />
  </div>
</template>

<script>
import { TimelineMax } from 'gsap'
export default {
  props: {
    copy: String,
    visual: String,
    param: String
  },
  computed: {
    imageid() {
      return this.param + '_preview'
    },
    path() {
      return this.localePath('case/' + this.param)
    },
    url() {
      return "'case/" + this.param + "'"
    }
  },
  methods: {
    goNavigate() {
      this.$nuxt.$router.push(this.localePath({ name: 'case-slug', params: { slug: this.param } }))
    },
    animate() {
      // store the current scroll position
      const visualData = this.$refs.caseImage.getBoundingClientRect()
      const node = document.createElement('div')
      const nodeOverlay = document.createElement('div')

      // append div to body
      document.body.appendChild(node)
      node.appendChild(nodeOverlay)

      node.classList += 'visual-transition'
      node.id = 'visual-transition'
      nodeOverlay.classList += 'visual-transition--overlay'
      nodeOverlay.id += 'visual-transition--overlay'

      const { visual, imageid } = this
      this.$store.commit('setPosition', { visualData, visual, imageid })

      node.setAttribute('style', `
        left: ${visualData.left}px;
        top: ${visualData.top}px;
        width: ${visualData.width}px;
        height: ${visualData.height}px;
        background-image: url(${visual}) !important;
      `)

      const pageTransition = new TimelineMax({
        onComplete: this.goNavigate
      })

      pageTransition.to('#visual-transition', 0.6, { top: '0', left: '0', width: '100vw', height: '100vh', ease: this.$gsap.Expo.easeInOut })
        .from('#visual-transition--overlay', 0.3, { autoAlpha: 0 }, '-=0.3')
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.case {
  position: relative;
  color: inherit;
  text-decoration: none;
  margin-top: 0;
  display: flex;
  align-items: center;
  transition: transform .6s cubic-bezier(0.25, 0, 0, 1), color .2s ease;
  cursor: pointer;
  padding-top: var(--m-spacing);

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

  // Hover & Active Styles
  &:not(.no-interaction):hover,
  &:not(.no-interaction):active,
  &:not(.no-interaction):focus {
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

<template>
  <div class="close" @click="close()" />
</template>

<script>
export default {
  props: {
    link: String
  },
  methods: {
    close() {
      const nodeBlend = document.createElement('div')
      document.body.appendChild(nodeBlend)

      nodeBlend.id = 'visual-transition-back'
      nodeBlend.classList += 'visual-transition-back'

      nodeBlend.setAttribute('style', `
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        position: fixed;
        background-color: #ffffff;
        opacity: 0;
      `)

      this.$gsap.TweenMax.to('#visual-transition-back', 0.2, { opacity: 1 })
      setTimeout(() => {
        this.$emit('click')
      }, 190)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.close {
  position: fixed;
  z-index: 7000;
  top: 0;
  right: 0;
  padding: 5rem;
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  outline: none;
  opacity: .4;
  transform: rotate(0deg) translateZ(0);
  transition: opacity .2s ease;

  > span {
    display: none
  }

  &:before, &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    height: 2px;
    width: 4.5rem;
    background: var(--darkgray);
  }

  &:before {
    transform: translate3D(-50%, -50%, 0) rotate(-45deg);
  }

  &:after {
    transform: translate3D(-50%, -50%, 0) rotate(45deg) translateZ(0);
  }

  &:hover,
  &:active,
  &:focus {
    transition: opacity .2s ease, transform .2s ease;
    transform: rotate(90deg);
    opacity: 1;
  }

  @media (max-width: $bp-tablet) {
    padding: 4rem;
  }
}
</style>

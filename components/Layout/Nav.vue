<template>
  <nav class="nav">
    <div class="top">
      <button id="brands-link">
        Brands
      </button>
      <button id="products-link">
        Products
      </button>
      <button id="creatives-link">
        Creatives
      </button>
    </div>
    <div class="bottom">
      <button id="about-link">
        About
      </button>
      <button id="contact-link">
        Contact
      </button>
    </div>
  </nav>
</template>

<script>

function offset(el) {
  const rect = el.getBoundingClientRect()
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return rect.top + scrollTop
}

if (process.browser) {
/* global ScrollMagic, controller */

  const targets = [
    'brands',
    'products',
    'creatives',
    'about',
    'contact'
  ]

  window.onNuxtReady(() => {
    targets.forEach((target) => {
      const targetNode = document.getElementById(target)
      const targetLink = document.getElementById(`${target}-link`)

      targetLink.addEventListener('click', () => {
        window.scrollTo({
          top: offset(targetNode),
          left: 0,
          behavior: 'smooth'
        })
      })

      new ScrollMagic.Scene({ triggerElement: `#${target}`, duration: targetNode.getBoundingClientRect().height })
        .setClassToggle(`#${target}-link`, 'active')
        // .addIndicators({ name: target })
        .addTo(controller)
    })
  })
}

export default {

}
</script>

<style lang="scss" scoped>
@import 'css/variables';

.nav {
  position: fixed;
  top: 0;
  left: 0;
  margin-top: calc(-10rem - var(--small-font-size));
  padding: 0 3.5rem;
  transform: rotate(90deg);
  display: flex;
  transform-origin: 0 100%;
  width: 100vh;
  box-sizing: border-box;
  margin-left: -4px; // compensate line height
  justify-content: space-between;

  .top, .bottom {
    display: flex;
  }

  button {
    font-size: var(--small-font-size);
    line-height: 1;
    color: white;
    padding: 5rem 1.5rem;
    text-decoration: none;
    font-weight: bold;
    display: block;
    background: none;
    outline: none;
    border: none;
    font-family: inherit;
    opacity: .15;
    cursor: pointer;
    transition: opacity .4s ease;

    &.active {
      opacity: .4;
    }

    &:hover,
    &:active,
    &:focus {
      opacity: 1 !important;
    }
  }

  @media (max-width: $bp-controls-layout) {
    display: none;
  }
}
</style>

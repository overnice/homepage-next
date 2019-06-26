<template>
  <div id="scroll-indicator" class="scroll-indicator">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 74">
      <path d="M15,1L15,1c7.7,0,14,6.3,14,14v14c0,7.7-6.3,14-14,14l0,0C7.3,43,1,36.7,1,29V15C1,7.3,7.3,1,15,1z" />
      <line x1="15" y1="11" x2="15" y2="21" />
      <polyline class="arrow" points="25,62 15,72 5,62 " />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
  .scroll-indicator {
    position: fixed;
    bottom: 10rem;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 74px;
    opacity: 0;
    transition: opacity .3s ease;

    svg {
      fill: none;
      stroke: black;
      stroke-width: 2;
      opacity: 0;
      overflow: visible;
      animation: fade-in 1s 2.25s forwards;
    }

    &.visible {
      opacity: 1;
    }
  }

  .arrow {
    transform: translate3D(0,-5px,0);
    animation: move-arrow 1.5s .75s ease infinite;
  }

  @keyframes move-arrow {
    0% {
      transform: translate3D(0,-5px,0);
    }
    50% {
      transform: translate3D(0,5px,0);
    }
    100% {
      transform: translate3D(0,-5px,0);
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: .25;
    }
  }
</style>

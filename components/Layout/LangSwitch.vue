<template>
  <div class="lang-switch">
    <svg v-if="lang === 'en'" class="flag-de" viewbox="0 0 64 48">
      <path class="flag-de-black" d="M0,0h64v16H0V0z" />
      <path class="flag-de-red" d="M0,16h64v16H0V16z" />
      <path class="flag-de-yellow" d="M0,32h64v16H0V32z" />
    </svg>
    <svg v-else class="flag-en" viewbox="0 0 64 48">
      <g class="flag-en-blue">
        <polygon points="0,32 0,34.63 5.27,32 " />
        <polygon points="0,13.37 0,16 5.27,16 " />
        <polygon points="24,0 0,0 0,2.63 24,14.63 " />
        <polygon points="0,45.37 0,48 24,48 24,33.37 " />
        <polygon points="64,16 64,13.37 58.73,16 " />
        <polygon points="40,48 64,48 64,45.37 40,33.37 " />
        <polygon points="40,0 40,14.63 64,2.63 64,0	" />
        <polygon points="64,34.63 64,32 58.73,32 " />
      </g>
      <g class="flag-en-red">
        <polygon points="48,16 64,8 64,4.42 40.85,16 	" />
        <polygon points="16,16 0,8 0,11.58 8.85,16 	" />
        <polygon points="64,28.8 64,19.2 36.8,19.2 36.8,0 27.2,0 27.2,19.2 0,19.2 0,28.8 27.2,28.8 27.2,48 36.8,48 36.8,28.8 	" />
        <polygon points="16,32 0,40 0,43.58 23.16,32 	" />
        <polygon points="48,32 64,40 64,36.42 55.16,32 	" />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    lang: String
  }
}
</script>

<style lang="scss" scoped>
  .lang-switch {
    position: fixed;
    top: 5rem;
    right: 5rem;
    border-radius: 3px;
    overflow: hidden;
    transition: background .3s ease;
    cursor: pointer;
    // opacity: .7;

    svg {
      display: block;
      width: 4rem;
      height: 3rem;

      g, path {
        transition: fill .3s ease;
      }
    }

    --flag-en-red: rgba(255, 255, 255, .35);
    --flag-en-blue: rgba(255, 255, 255, .25);
    --flag-de-black: rgba(255, 255, 255, .1);
    --flag-de-red: rgba(255, 255, 255, .25);
    --flag-de-yellow: rgba(255, 255, 255, .35);

    .flag-en-red {
      fill: var(--flag-en-red);
    }

    .flag-en-blue {
      fill: var(--flag-en-blue);
    }

    .flag-de-black {
      fill: var(--flag-de-black);
    }

    .flag-de-red {
      fill: var(--flag-de-red);
    }

    .flag-de-yellow {
      fill: var(--flag-de-yellow);
    }

    &:hover {
      background: white;
      --flag-en-red: #cc0000;
      --flag-en-blue: #000066;
      --flag-de-black: #000;
      --flag-de-red: #e30613;
      --flag-de-yellow: #ffcc00;

      // .flag-en-red {
      //   fill: var(--flag-en-red);
      // }
    }
  }
</style>

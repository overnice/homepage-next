<template>
  <nav class="nav">
    <div class="top">
      <a class="active" href="">Brands</a>
      <a href="">Products</a>
      <a href="">Creatives</a>
    </div>
    <div class="bottom">
      <a href="">About</a>
      <a href="">Contact</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
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

  a {
    font-size: var(--small-font-size);
    line-height: 1;
    color: white;
    padding: 5rem 1.5rem;
    text-decoration: none;
    font-weight: bold;
    display: block;
    opacity: .2;
    filter: blur(4px);
    transition: filter .4s ease, opacity .4s ease;

    &.active,
    &:hover {
      opacity: .3;
      filter: blur(0);
    }

    &:hover {
      opacity: 1;
    }
  }

  &:hover {
    a {
      filter: blur(0);
    }
  }
}
</style>

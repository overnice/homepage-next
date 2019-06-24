<template>
  <div class="container">
    <div>
      <h1 v-if="error.statusCode === 404">
        Page not found
      </h1>
      <h1 v-else>
        An error occurred
      </h1>
      <p>
        <nuxt-link to="/">
          Go to Home Page
        </nuxt-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style lang="scss" scoped>
@import 'css/variables';
.container {
  background: var(--darkgray);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0;
  text-align: center;

  h1 {
    margin-bottom: var(--m-spacing);
  }

  p a {
    color: var(--red);
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
      0 -0.375rem 0 var(--darkgray),

      -0.5rem -0.5rem 0 var(--darkgray),
      0.5rem -0.5rem 0 var(--darkgray),
      -0.5rem 0.5rem 0 var(--darkgray),
      0.5rem 0.5rem 0 var(--darkgray),
      0.5rem 0 0 var(--darkgray),
      -0.5rem 0 0 var(--darkgray),
      0 0.5rem 0 var(--darkgray),
      0 -0.5rem 0 var(--darkgray),

      -0.625rem -0.625rem 0 var(--darkgray),
      0.625rem -0.625rem 0 var(--darkgray),
      -0.625rem 0.625rem 0 var(--darkgray),
      0.625rem 0.625rem 0 var(--darkgray),
      0.625rem 0 0 var(--darkgray),
      -0.625rem 0 0 var(--darkgray),
      0 0.625rem 0 var(--darkgray),
      0 -0.625rem 0 var(--darkgray) !important;
  }
}
</style>

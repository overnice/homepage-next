<template>
  <div class="case">
    <div class="case--inner">
      <h1>Jungle Fever</h1>
      <nuxt-link to="/">
        Back
      </nuxt-link>
      <p>
        In 2017, we took off to Costa Rica to join a technological jungle adventure with Nimiq.
      </p>
      <p>
        Nimiq is an Inuit word for an object or force of connection and unification. Our client thought of Nimiq as a good name for an revolutionary idea: a entirely browser-based blockchain, written entirely in JavaScript.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'case',
  head() {
    return {
      title: 'Case'
    }
  // },
  // transition(to, from) {
  //   return ({
  //     name: 'zoom',
  //     duration: 1000
  //   })
  }
}
</script>

<style lang="scss" scoped>
.case {
  background: white;

  h1 {
    font-size: 70px;
    font-weight: bold;
  }

  p {
    font-size: 40px;
  }
}

.case--inner {
  width: 760px;
  padding: 100px 0;
  margin: 0 auto;
  min-height: 100vh;
}
</style>

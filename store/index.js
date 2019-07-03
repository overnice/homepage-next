export const state = () => ({
  lastPosition: 0
})

export const mutations = {
  setPosition(state) {
    console.log(window.scrollY)
    state.lastPosition = window.scrollY
  }
}

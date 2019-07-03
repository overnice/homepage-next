export const state = () => ({
  lastPosition: {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  },
  showBackAnimation: false
})

export const mutations = {
  setPosition(state, visualData) {
    state.lastPosition = visualData
    state.showBackAnimation = true
  }
}

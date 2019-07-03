export const state = () => ({
  lastPosition: {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  },
  showBackAnimation: false,
  animImage: ''
})

export const mutations = {
  setPosition(state, data) {
    const { visualData, visual } = data
    state.animImage = visual
    state.lastPosition = visualData
    state.showBackAnimation = true
  }
}

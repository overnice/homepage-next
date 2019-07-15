export const state = () => ({
  lastPosition: {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  },
  showBackAnimation: false,
  animImage: '',
  imageid: ''
})

export const mutations = {
  setPosition(state, data) {
    const { visualData, visual, imageid } = data
    state.animImage = visual
    state.lastPosition = visualData
    state.imageid = imageid
    state.showBackAnimation = true
  },
  resetAnimations(state) {
    state.imageid = ''
  }
}

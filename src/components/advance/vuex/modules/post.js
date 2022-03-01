export default {
  namespaced: true,
  state: {
    totalLike: 0,
  },
  // getters: {
  //   fakeLikesSet(state) {
  //     // ambil dari state
  //     return state.totalLike = 100
  //   }
  // },
  mutations: {
    addLike(state) {
      state.totalLike++
    },
  }
}
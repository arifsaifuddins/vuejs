export default {
  namespaced: true, // pembeda
  state: {
    userName: '',
    person: {}
  },
  mutations: {
    addUserName(state, value) {
      state.userName = value
    },
    addPerson(context, payload) {
      context.person = payload
    }
  },
  actions: {
    async getPerson({ commit }) {
      const dataName = await fetch('https://randomuser.me/api');
      const { results } = await dataName.json()

      commit('addPerson', results[0])
    }
  }
}
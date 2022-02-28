import { createStore } from 'vuex'

// // non modular
// const store = createStore({
//   state() {
//     return {
//       totalLike: 0,
//       userName: '',
//       person: {}
//     }
//   },
//   getters: {
//     fakeLikesSet(state) {
//       // ambil dari state
//       return state.totalLike = 100
//     }
//   },
//   mutations: {
//     addLike(state) {
//       state.totalLike++
//     },
//     addUserName(state, value) {
//       state.userName = value
//     },
//     addPerson(context, payload) {
//       context.person = payload
//     }
//   },
//   actions: {
//     async getPerson({ commit }) {
//       const dataName = await fetch('https://randomuser.me/api');
//       const { results } = await dataName.json()

//       commit('addPerson', results[0])
//     }
//   }
// })


// modular
import post from './modules/post';
import user from './modules/user';

const store = createStore({
  modules: {
    user,
    post
  }
})

export default store;
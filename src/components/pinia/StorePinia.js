import { defineStore } from "pinia";

export const setCountPinia = defineStore({
  id: 'countId',
  state: () => {
    return {
      counter: 2,
      user: {}
    }
  },
  getters: {
    doubleCounter: (state) => state.counter * 3
  },
  actions: {
    setRandomCounter() {
      this.counter = Math.round(Math.random() * 100)
    },
    async getRandomUser(val) {
      const res = await fetch('https://randomuser.me/api');

      const { results } = await res.json()
      this.user = {
        name: results[0].name.first + " " + results[0].name.last,
        city: results[0].location.city + ', ' + results[0].location.country,
        phone: results[0].phone,
        picture: results[0].picture.large
      }
      console.log(results[0].name.first)
    }
  }
})
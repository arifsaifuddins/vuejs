import { defineStore } from "pinia";

export const setCountPinia = defineStore('countId', {
  state: () => {
    return {
      counter: 2
    }
  }
})
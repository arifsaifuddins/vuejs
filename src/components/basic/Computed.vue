<template>
  <div class="computed">Computed</div>
  <hr />
  <!-- <h1>{{ total }}</h1> -->
  <h1>{{ discount }}</h1>
  <input type="number" v-model="num1" /><br />
  <input type="number" v-model="num2" /><br />
  <button @click="addCount">Discout 100</button>
</template>

<script>
  export default {
    data() {
      return {
        num1: 4,
        num2: 6
      };
    },
    computed: {
      // total() {
      //   return parseInt(this.num1) + parseInt(this.num2);
      // },

      // getter & setter
      discount: {
        get() {
          return parseInt(this.num1) + parseInt(this.num2);
        },
        set(value) {
          this.num1 -= value;
          this.num2 -= value;
        }
      }
    },
    methods: {
      addCount() {
        this.discount = 120;
      }
    }
  };
</script>

<style scoped>
  .computed {
    margin-top: 20px;
  }
</style>

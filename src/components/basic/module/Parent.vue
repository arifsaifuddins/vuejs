<template>
  <div class="parent">Props</div>
  <hr />
  <Child />
  <Child book="2" />
  <Child :text="food" />
  <h2>{{ message }}</h2>
  <hr />
  <h2 v-for="todo in todos" :key="todo" v-text="todo"></h2>
  <hr />
  <h5 v-for="tag in tags" :key="tag" v-html="tag"></h5>
</template>

<script>
  import Child from "./Child.vue";

  export default {
    components: {
      Child,
    },

    data() {
      return {
        message: "This is Parent Element",
        food: "Nasi Padang",
        todos: ["Kuliah", "Coding", "Sholat", "Makan", "Tidur"],
        tags: [
          "<i>Mobil</i>",
          "<i>Motor</i>",
          '<i style="color: blue;">Pesawat</i>',
          "<i>Kereta</i>",
          "<i>Kapal</i>",
        ],
      };
    },
  };
</script>

<style scoped>
  .parent {
    margin-top: 20px;
  }
</style>

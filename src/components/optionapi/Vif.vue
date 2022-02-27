<template>
  <div class="vif">Vif</div>
  <hr />
  <h1 v-if="status">{{ say }}</h1>
  <h1 v-else>{{ bye }}</h1>
  <button @click="toggleGreating">Toggle</button>
</template>

<script>
export default {
  data() {
    return {
      status: true,
      say: "Hello Vue!",
      bye: "Bye Bye",
    };
  },
  methods: {
    toggleGreating() {
      return (this.status = !this.status);
    },
  },
};
</script>

<style scoped>
.vif {
  margin-top: 20px;
}
</style>
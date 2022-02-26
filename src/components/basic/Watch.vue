<template>
  <div class="watch">Watch</div>
  <hr />

  <h1>{{ values }}</h1>
  <h2 v-text="values" :class="[colorRed, fontWeight, 'italic']"></h2>
  <input type="text" v-model="values" />
</template>

<script>
export default {
  data() {
    return {
      values: "Testing...",
      colorRed: "red",
      fontWeight: "bold",
    };
  },
  watch: {
    values(test) {
      console.log(`chaged on ${test}`);
    },
  },
};
</script>

<style scoped>
.watch {
  margin-top: 20px;
}

.red {
  color: red;
}

.bold {
  font-weight: 800;
}

.italic {
  font-style: italic;
}

.yellow {
  color: yellow;
}
</style>
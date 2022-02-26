<template>
  <div class="method">Method</div>
  <hr />
  <h1>{{ count }}</h1>
  <h2>{{ count1 }}</h2>
  <button @click="count++">Add 1</button>
  <button @click="addCount" class="count">Add 2</button>
  <button @click="add100" class="count">Add 100 Once</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      count1: 0,
    };
  },
  methods: {
    addCount() {
      this.count += 2;
    },
    add100() {
      this.count1 = 100;
    },
  },
};
</script>

<style scoped>
.count {
  margin-left: 5px;
}

.method {
  margin-top: 20px;
}
</style>
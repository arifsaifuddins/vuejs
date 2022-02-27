<template>
  <div class="alert alert-success my-3" role="alert">
    <h4 class="alert-heading">Computed</h4>
  </div>

  <h1 class="mb-3">Count : {{ count }}</h1>
  <div class="btn btn-danger" @click="Count">Add</div>
  <h2 class="my-3">Result : {{ res }}</h2>
</template>

<script>
  import { computed, toRefs, reactive, ref } from "vue";

  export default {
    setup() {
      const count = ref(0);

      const Count = () => {
        count.value++;
      };

      const num = reactive({
        count: 5,
      });

      // const res = computed(() => count.value + num.count);

      // get set
      const res = computed({
        get: () => count.value + num.count,
        set: (val) => (num.count = val),
      });

      return {
        count,
        Count,
        res,
      };
    },
  };
</script>

<style>
</style>
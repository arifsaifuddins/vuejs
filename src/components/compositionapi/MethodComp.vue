<template>
  <div class="alert alert-success my-3" role="alert">
    <h4 class="alert-heading">Method</h4>
  </div>

  <h1 class="mb-3">Count : {{ counter }}</h1>
  <div class="btn btn-secondary" @click="Add">Add Count</div>

  <h1 class="my-3">Count : {{ count }}</h1>
  <div class="btn btn-secondary" @click="Add1">Add Count</div>
</template>

<script>
  import { reactive, ref, toRefs } from "vue";

  export default {
    setup() {
      // ref
      const counter = ref(0);

      // reactive
      const counter1 = reactive({
        count: 0,
      });

      // method
      const Add = () => {
        // ref
        counter.value++;
      };

      const Add1 = () => {
        // reactive
        counter1.count += 10;
      };

      return {
        counter,
        Add,
        Add1,
        ...toRefs(counter1),
      };
    },
  };
</script>

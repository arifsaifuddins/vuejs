<template>
  <div class="alert alert-success my-3" role="alert">
    <h4 class="alert-heading">Ref Reactive toRef</h4>
  </div>

  <h1>{{ count }}</h1>
  <h2>{{ state1 }}</h2>
</template>

<script>
  import { reactive, toRefs, ref } from "vue";

  export default {
    setup() {
      const state = reactive({
        count: 0,
      });

      const state1 = ref(8);

      setInterval(() => {
        // init dengan value
        state1.value += 4;

        // init dengan objectnya
        state.count++;
      }, 6000);

      return {
        // toref digunakan kalo reactive
        ...toRefs(state),
        state1,
      };
    },
  };
</script>
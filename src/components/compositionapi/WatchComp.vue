<template>
  <div class="alert alert-success my-3" role="alert">
    <h4 class="alert-heading">Watch</h4>
  </div>

  <h1 class="my-3">{{ count }}</h1>
  <div class="btn btn-success my-3" @click="addOne">Counting</div>

  <h1 class="mb-3">{{ num }}</h1>
  <div class="btn btn-warning my-3" @click="addNum">Number</div>
</template>

<script>
  import { reactive, ref, toRefs } from "@vue/reactivity";
  import { watch, watchEffect } from "@vue/runtime-core";

  export default {
    setup() {
      const counting = reactive({
        count: 0,
        name: "Arief Saifuddien",
      });

      const num = ref(1);
      const num1 = ref(1);

      function addOne() {
        counting.count++;
      }

      watchEffect(
        () => {
          console.log(counting.name);
          console.log(counting.count);
        },

        // buat debugging
        {
          onTrack(e) {
            console.log(e);
          },
          onTrigger(e) {
            console.log(e);
          },
        }
      );

      function addNum() {
        num.value++;
      }

      watch([num, num1], (current, before) => {
        console.log(num.value);
        console.log(current);
        console.log(before);
      });

      return {
        ...toRefs(counting),
        addOne,
        num,
        addNum,
      };
    },
  };
</script>
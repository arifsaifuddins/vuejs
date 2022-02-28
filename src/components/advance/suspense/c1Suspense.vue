<template>
  <div class="text-center">
    <div class="m-2">This is from C1</div>
    <h1>{{ data }}</h1>
  </div>
</template>

<script>
  import { ref } from "@vue/reactivity";
  export default {
    async setup() {
      const data = ref(null);

      const getData = () =>
        new Promise((resolve) => {
          return setTimeout(() => {
            resolve((data.value = "Arief Saifuddien"));
          }, 3000);
        });

      await getData();

      return { data };
    },
  };
</script>
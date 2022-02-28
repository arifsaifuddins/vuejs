<template>
  <div class="container bg-primary text-center">
    <h1 class="p-3 text-white">Suspense</h1>
  </div>

  <div v-if="error" class="text-center" v-text="error"></div>

  <Suspense v-else>
    <template #default>
      <div>
        <c1SuspenseVue />
        <c2SuspenseVue />
      </div>
    </template>

    <template #fallback>
      <h3 class="text-center">Loading...</h3>
    </template>
  </Suspense>
</template>

<script>
  import { ref } from "@vue/reactivity";
  import { onErrorCaptured } from "@vue/runtime-core";
  import c1SuspenseVue from "./c1Suspense.vue";
  import c2SuspenseVue from "./c2Suspense.vue";

  export default {
    components: {
      c1SuspenseVue,
      c2SuspenseVue,
    },

    setup() {
      const error = ref(null);

      onErrorCaptured((e) => {
        error.value = e;
        return true;
      });

      return {
        error,
      };
    },
  };
</script>

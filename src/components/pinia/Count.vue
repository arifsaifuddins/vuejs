<template>
  <div class="col-lg-4 fw-bold mx-auto text-center fs-1 my-4">
    {{ countNum }} - {{ doubleCount }}
  </div>
</template>


<script setup>
  import { computed } from "@vue/runtime-core";
  import { setCountPinia } from "./StorePinia";

  const piniaCount = setCountPinia();
  // states
  const countNum = computed(() => piniaCount.counter);
  // getters
  const doubleCount = computed(() => piniaCount.doubleCounter);
</script>
<template>
  <div class="col-lg-4 fw-bold mx-auto text-center fs-1 my-4">
    {{ countNum }}
  </div>
</template>


<script setup>
  import { computed } from "@vue/runtime-core";
  import { setCountPinia } from "./StorePinia";

  const countNum = computed(() => setCountPinia().counter);
</script>
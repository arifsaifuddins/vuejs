<template>
  <div class="btn btn-danger mx-auto d-block col-lg-4" @click="addCount">
    Add Count Pinia
  </div>
  <div
    class="mt-3 btn btn-secondary mx-auto d-block col-lg-4"
    @click="minCount"
  >
    Min Count Pinia
  </div>
  <div class="my-3 btn btn-dark mx-auto d-block col-lg-4" @click="resetCount">
    reset Count Pinia
  </div>
</template>

<script setup>
  import { setCountPinia } from "./StorePinia";

  const count = setCountPinia();

  const addCount = () => {
    count.$patch((state) => {
      state.counter++;
    });
  };

  const minCount = () => {
    count.$patch((state) => {
      state.counter--;
    });
  };

  const resetCount = () => {
    count.$reset();
  };
</script>
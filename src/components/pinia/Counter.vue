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
  <div
    class="my-3 btn btn-warning mx-auto d-block col-lg-4"
    @click="randomCount"
  >
    Get Random Count Pinia
  </div>
  <div
    class="my-3 btn btn-success mx-auto d-block col-lg-4"
    @click="randomUser"
  >
    Get Random User Pinia
  </div>

  <div class="my-3 p-3 mx-auto col-lg-4 list-group-item">
    <img :src="userRandom.picture" class="w-100 mb-3" />
    <h3>Name : {{ userRandom.name }}</h3>
    <h3>City : {{ userRandom.city }}</h3>
    <h3>Phone : {{ userRandom.phone }}</h3>
  </div>
</template>

<script setup>
  import { computed, onMounted } from "@vue/runtime-core";
  import { setCountPinia } from "./StorePinia";

  const count = setCountPinia();

  const userRandom = computed(() => {
    return count.user;
  });

  onMounted(() => {
    return count.getRandomUser();
  });

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

  const randomCount = () => {
    count.setRandomCounter();
  };

  const randomUser = () => {
    count.getRandomUser();
  };
</script>
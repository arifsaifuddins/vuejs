<template>
  <div class="container bg-success p-2 mt-3">
    <h1 class="text-white text-center">Multi V-model</h1>
  </div>
  <h1 class="text-center">{{ name }} : {{ age }}</h1>
  <UserVue v-model:name="name" v-model:age="age" />
</template>

<script>
  import { ref } from "@vue/reactivity";
  import UserVue from "./User.vue";

  export default {
    components: {
      UserVue,
    },
    setup() {
      const name = ref("Arief");
      const age = ref(22);

      return {
        name,
        age,
      };
    },
  };
</script>


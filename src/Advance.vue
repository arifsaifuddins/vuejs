<template>
  <RouterVue />
  <!-- <SuspenseVue />
  <VmodelsVue /> -->
</template>

<script>
  // import VmodelsVue from "./components/advance/multi-vmodel/Vmodels.vue";
  // import SuspenseVue from "./components/advance/suspense/Suspense.vue";
  import RouterVue from "./components/advance/vue-router/Router.vue";

  export default {
    name: "Advance",
    components: {
      RouterVue,
      // SuspenseVue,
      // VmodelsVue,
    },
  };
</script>
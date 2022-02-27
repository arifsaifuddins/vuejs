<template>
  <RefReactiveToRef />
  <MethodCompVue />
  <ComputedCompVue />
  <WatchCompVue />
  <SlotEmitPropsVue />
</template>

<script>
  import ComputedCompVue from "./components/compositionapi/ComputedComp.vue";
  import MethodCompVue from "./components/compositionapi/MethodComp.vue";
  import RefReactiveToRef from "./components/compositionapi/RefReactiveToRef.vue";
  import SlotEmitPropsVue from "./components/compositionapi/SlotEmitProps.vue";
  import WatchCompVue from "./components/compositionapi/WatchComp.vue";

  export default {
    components: {
      RefReactiveToRef,
      MethodCompVue,
      ComputedCompVue,
      WatchCompVue,
      SlotEmitPropsVue,
    },
  };
</script>

<style>
  body {
    background: lightgreen;
    text-align: center;
  }
</style>
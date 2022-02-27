<template>
  <!-- <Hello /> -->
  <Declare />
  <Method />
  <Vmodel />
  <Vif />
  <Vfor />
  <Parent />
  <LifeCycle />
  <Computed />
  <Watch />
  <RefEmitVue />
  <ScopVue />
  <SlotVue />
  <ProvideVue />
  <HomeVue />
  <MixinsVue />
  <TeleportVue />
</template>

<script setup>
  // import Hello from "./components/HelloWorld.vue";
  import Declare from "./components/optionapi/Declare.vue";
  import Method from "./components/optionapi/Method.vue";
  import Vmodel from "./components/optionapi/Vmodel.vue";
  import Vif from "./components/optionapi/Vif.vue";
  import Vfor from "./components/optionapi/Vfor.vue";
  import LifeCycle from "./components/optionapi/LifeCycle.vue";
  import Computed from "./components/optionapi/Computed.vue";
  import Watch from "./components/optionapi/Watch.vue";
  import Parent from "./components/optionapi/module/Parent.vue";
  import RefEmitVue from "./components/optionapi/emit/RefEmit.vue";
  import ScopVue from "./components/optionapi/scop/Scop.vue";
  import SlotVue from "./components/optionapi/slot/Slot.vue";
  import ProvideVue from "./components/optionapi/provide/Provide.vue";
  import HomeVue from "./components/optionapi/tabs/Home.vue";
  import MixinsVue from "./components/optionapi/mixins/Mixins.vue";
  import TeleportVue from "./components/optionapi/teleport/Teleport.vue";
</script>

<style>
  /* @import "./assets/base.css"; */

  body {
    text-align: center;
  }

  html {
    background: gray;
  }
</style>

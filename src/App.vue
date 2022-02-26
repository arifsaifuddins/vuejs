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
  import Declare from "./components/basic/Declare.vue";
  import Method from "./components/basic/Method.vue";
  import Vmodel from "./components/basic/Vmodel.vue";
  import Vif from "./components/basic/Vif.vue";
  import Vfor from "./components/basic/Vfor.vue";
  import LifeCycle from "./components/basic/LifeCycle.vue";
  import Computed from "./components/basic/Computed.vue";
  import Watch from "./components/basic/Watch.vue";
  import Parent from "./components/basic/module/Parent.vue";
  import RefEmitVue from "./components/basic/emit/RefEmit.vue";
  import ScopVue from "./components/basic/scop/Scop.vue";
  import SlotVue from "./components/basic/slot/Slot.vue";
  import ProvideVue from "./components/basic/provide/Provide.vue";
  import HomeVue from "./components/basic/tabs/Home.vue";
  import MixinsVue from "./components/basic/mixins/Mixins.vue";
  import TeleportVue from "./components/basic/teleport/Teleport.vue";
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

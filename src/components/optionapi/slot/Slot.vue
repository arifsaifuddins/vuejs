<template>
  <div class="slot">Slot</div>
  <hr />
  <child-slot-vue>
    <!-- one slot -->
    <!-- <span>slot 1</span><br />
    <span>slot 2</span><br />
    <span>slot 3</span><br />
    <span>slot 4</span><br /> -->
    <template v-slot:default="{ data1 }">
      <span v-text="data1"></span>
    </template>

    <!-- multislot -->
    <template v-slot:slot1="{ data2 }">
      <span>Main : {{ data2 }}</span>
    </template>
    <template v-slot:slot2="{ data3 }">
      <span>Section : {{ data3 }}</span>
    </template>
    <template v-slot:slot3="{ data4 }">
      <span>Dir : {{ data4 }}</span>
    </template>
    <template v-slot:slot4="{ data5 }">
      <span>Footer : {{ data5 }}</span>
    </template>
  </child-slot-vue>

  <!-- global comp -->
  <child-component />
</template>

<script>
  import ChildSlotVue from "./ChildSlot.vue";
  export default {
    components: {
      ChildSlotVue,
    },
  };
</script>

<style scoped>
  .slot {
    margin-top: 20px;
  }
</style>
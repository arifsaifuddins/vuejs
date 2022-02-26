<template>
  <div class="scop">Scop</div>
  <hr />

  <div>{{ message }}</div>

  <!-- cara lama -->
  <!-- <input
    type="text"
    :model-value="message"
    @update:model-value="message = $event"
  /> -->
  <input type="text" v-model="message" />
</template>

<script>
  import ChildScopVue from "./ChildScop.vue";

  export default {
    components: { ChildScopVue },
    data() {
      return {
        message: "",
      };
    },
  };
</script>

<style scoped>
  .scop {
    margin-top: 20px;
  }
</style>
<template>
  <div class="refemit">Ref Emit</div>
  <hr />

  <child-ref-emit-vue ref="childComp" @click-child="onPress" />
  <button @click="clickSaya">Button Parent Emit</button>
</template>

<script>
  import ChildRefEmitVue from "../emit/ChildRefEmit.vue";

  export default {
    components: {
      ChildRefEmitVue,
    },
    methods: {
      // val dapat dari child
      onPress(val) {
        console.log(val);
      },
      clickSaya() {
        this.$refs.childComp.onClick(); // dari child
      },
    },
  };
</script>

<style scoped>
  .refemit {
    margin-top: 20px;
  }
</style>
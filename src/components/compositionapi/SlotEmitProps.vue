<template>
  <div class="alert alert-success my-3" role="alert">
    <h4 class="alert-heading">Slot Emit Props</h4>
  </div>

  <ChildSlodEmitPropsVue
    :num="num"
    :nama="nama"
    :mahasiswa="mahasiswa"
    @change-name="changeName"
    ariefAttr="arief saifuddien"
  >
    <!-- slot diantara child elementnya -->
    <template v-slot:header>
      <main>This is slot</main>
    </template>
    <!-- shorthand -->
    <template #default="slotProps">
      <main>This is slot default {{ slotProps.text }}</main>
    </template>
  </ChildSlodEmitPropsVue>
</template>

<script>
  import { reactive, ref } from "@vue/reactivity";
  import ChildSlodEmitPropsVue from "./ChildSlodEmitProps.vue";
  export default {
    components: {
      ChildSlodEmitPropsVue,
    },

    setup() {
      const num = ref(9);
      const nama = ref("Adi Aldian");
      const mahasiswa = reactive({
        name: "Arief Saifuddien",
        kuliah: "Islamic Studies",
        age: 22,
      });

      function changeName(val) {
        mahasiswa.name = val;
      }

      return {
        num,
        mahasiswa,
        changeName,
        nama,
      };
    },
  };
</script>
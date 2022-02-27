<template>
  <div class="text-start px-4 col-lg-6 mx-auto">
    <h1>Name : {{ mahasiswa.name }}</h1>
    <h1>Kuliah : {{ mahasiswa.kuliah }}</h1>
    <h1>Age : {{ mahasiswa.age }}</h1>
    <slot name="header" />

    <div class="btn btn-primary my-3" @click="change">Change Name</div>
    <div class="btn btn-warning mx-3">{{ nameChanged }} : {{ num }}</div>
    <slot :text="nama" />
  </div>
</template>

<script>
  import { toRefs } from "@vue/reactivity";
  import { computed } from "@vue/runtime-core";
  export default {
    props: {
      num: {
        type: Number,
        default: 0,
      },
      mahasiswa: {
        type: Object,
        default: () => {},
      },
      nama: {
        type: String,
        default: "",
      },
    },
    // dua param di setup
    setup(props, { attrs, slots, emit }) {
      console.log("props :", props);
      console.log("slots :", slots);
      console.log("attrs :", attrs);
      const { num, mahasiswa, nama } = toRefs(props);
      console.log("mahasiswa", mahasiswa.value);
      console.log("num", num.value);

      const change = () => {
        return emit("change-name", nama.value);
      };

      const nameChanged = computed(() => {
        return mahasiswa.value.name;
      });

      return {
        change,
        nameChanged,
      };
    },
  };
</script>
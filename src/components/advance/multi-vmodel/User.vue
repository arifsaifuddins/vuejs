<template>
  <div class="my-3 col-lg-6 mx-auto">
    <label for="name" class="form-label">Name :</label>
    <input type="text" class="form-control" id="name" v-model="name_up" />
    <label for="age" class="form-label">Age :</label>
    <input type="number" class="form-control" id="age" v-model="age_up" />
  </div>
</template>

<script>
  import { toRefs } from "@vue/reactivity";
  import { computed } from "@vue/runtime-core";

  export default {
    props: {
      name: {
        type: String,
        default: "",
      },
      age: {
        type: Number,
        default: 0,
      },
    },

    // set emits di truh di emit compted
    emits: ["update:name", "update:age"],
    setup(props, { emit }) {
      const { name, age } = toRefs(props);

      const name_up = computed({
        get: () => name.value,
        set: (val) => emit("update:name", val),
      });

      const age_up = computed({
        get: () => age.value,
        set: (val) => emit("update:age", parseInt(val)),
      });

      return {
        name_up,
        age_up,
      };
    },
  };
</script>
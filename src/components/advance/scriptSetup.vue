<template>
  <div class="col-lg-2 mx-auto my-5">
    <div
      class="btn btn-primary d-block mx-auto"
      @click="button('Jono Handoko')"
    >
      {{ props.nama }}
    </div>

    <div class="btn btn-secondary mt-3 d-block mx-auto" @click="buttonLike()">
      Add {{ props.text }} like for this page
    </div>

    <div
      class="btn btn-success my-3 d-block mx-auto"
      @click="myEmit('namaEmit', 'Arief Saifuddien')"
    >
      Emit
    </div>

    <div
      class="btn btn-info my-3 d-block mx-auto"
      @click="myEmit('changeBg', 'value')"
    >
      Change Background
    </div>
  </div>
</template>

<script setup>
  // // ngga butuh ini lagi
  // export default {
  //   setup() {
  //     return {};
  //   },
  // };

  import { useStore } from "vuex";

  const props = defineProps({
    nama: {
      type: String,
      default: "",
    },
    text: {
      type: Number,
      default: null,
    },
  });

  const myEmit = defineEmits(["namaEmit", "changeBg"]);

  const store = useStore();

  function button(val) {
    return store.commit("user/addUserName", val);
  }

  function buttonLike() {
    return store.commit("post/addLike");
  }
</script>
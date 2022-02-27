// masukin file js ke vue

<template>
  <div class="mixins">Mixins</div>
  <hr />

  <h6>{{ $data }}</h6>
</template>

<script>
  import compMixins from "./compMixins.js";
  import mergeMixins from "./mergeMixins.js";
  export default {
    mixins: [compMixins, mergeMixins],
    data() {
      return {
        nama: "Arief Saifuddien",
      };
    },
  };
</script>

<style>
  .mixins {
    margin-top: 20px;
  }
</style>
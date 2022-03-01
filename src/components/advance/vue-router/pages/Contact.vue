<template>
  <h1 class="text-center my-5">This is Contact Page</h1>

  <script-setup
    @namaEmit="Arief"
    @changeBg="changeBcg"
    nama="Change Username"
    :text="1"
  />
</template>

<script setup>
  import scriptSetup from "../../scriptSetup.vue";

  function Arief(val) {
    console.log(val);
  }

  const changeBcg = () => {
    document.body.classList.toggle("bg-secondary");
    document.body.classList.toggle("text-white");
  };
</script>

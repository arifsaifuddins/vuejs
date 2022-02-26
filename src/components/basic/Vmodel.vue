<template>
  <div class="vmodel">Vmodel</div>
  <hr />
  <h1>{{ say }}</h1>
  <input v-model="say" /><br />
  <!-- sama halnya dengan -->
  <input @input="say = $event.target.value" />
</template>

<script>
export default {
  data() {
    return {
      say: "Hi...",
    };
  },
};
</script>

<style scoped>
.vmodel {
  margin-top: 20px;
}

input {
  margin: 5px 0;
}
</style>
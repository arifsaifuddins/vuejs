<template>
  <div class="vfor">Vfor</div>
  <hr />
  <ul>
    <h1>Fruits :</h1>
    <li v-for="fruit in fruits" :key="fruit.id">
      <h3>{{ fruit.name }}</h3>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        { id: 1, name: "Apel" },
        { id: 2, name: "Jeruk" },
        { id: 3, name: "Mangga" },
        { id: 4, name: "Peer" },
        { id: 5, name: "Lemon" },
      ],
    };
  },
};
</script>

<style scoped>
.vfor {
  margin-top: 20px;
}

ul h1 {
  text-align: center;
}

ul {
  text-align: start;
}

li {
  list-style: none;
}
</style>
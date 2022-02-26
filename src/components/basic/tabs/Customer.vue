<script>
  export default {
    data() {
      return {
        apis: [],
      };
    },
    async created() {
      // const dataApi = await fetch("https://swapi.dev/api/planets");
      // const { results } = await dataApi.json();
      // this.apis = results;

      await fetch("https://swapi.dev/api/planets")
        .then((res) => res.json())
        .then((planet) => (this.apis = planet.results));
    },
  };
</script>

<template>
  <h3>Customer Page</h3>
  <h4 v-for="api in apis" :key="api" v-text="api.name"></h4>
</template>
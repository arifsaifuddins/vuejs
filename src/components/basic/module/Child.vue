<template>
  <h1>This Child Element</h1>
  <h2>{{ text }}</h2>
  <h2>{{ book }}</h2>
</template>

<script>
  export default {
    props: {
      text: "",
      book: Number, // String, Array, Object
    },
  };
</script>
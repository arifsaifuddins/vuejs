<template>
  <div class="provide">Provide</div>
  <hr />
  <InjectVue />
</template>

<script>
  import InjectVue from "./Inject.vue";
  export default {
    components: {
      InjectVue,
    },
    data() {
      return {
        author: "Arief Saifuddien",
      };
    },
    provide() {
      return {
        provideAuthor: this.author,
      };
    },
  };
</script>
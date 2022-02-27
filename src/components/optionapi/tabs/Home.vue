<template>
  <div class="tabs">Tabs</div>
  <hr />

  <nav>
    <button
      v-for="page in pages"
      :key="page"
      :class="['current-btn', { active: currentTab === page }]"
      @click="currentTab = page"
      v-text="page"
    ></button>
  </nav>

  <main class="page">
    <keep-alive>
      <component :is="pageNow" />
    </keep-alive>
  </main>
</template>

<script>
  import About from "./About.vue";
  import Contact from "./Contact.vue";
  import Customer from "./Customer.vue";

  export default {
    components: {
      About,
      Contact,
      Customer,
    },
    data() {
      return {
        currentTab: "",
        pages: ["About", "Contact", "Customer"],
      };
    },
    computed: {
      pageNow() {
        return this.currentTab.toLowerCase();
      },
    },
  };
</script>

<style scoped>
  .tabs {
    margin-top: 20px;
  }

  .current-btn {
    background-color: #f00;
  }

  .page {
    margin: 20px auto 100px auto;
  }
</style>
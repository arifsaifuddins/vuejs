<template>
  <Suspense>
    <template #default>
      <PostDetailVue />
    </template>
    <template #fallback>
      <h3 class="text-center">Loading...</h3>
    </template>
  </Suspense>

  <router-view />
</template>

<script>
  import PostDetailVue from "../PostDetail.vue";
  export default {
    components: {
      PostDetailVue,
    },
  };
</script>
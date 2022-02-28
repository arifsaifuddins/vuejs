<template>
  <Suspense>
    <template #default>
      <PostListVue />
    </template>
    <template #fallback>
      <h3 class="text-center">Loading...</h3>
    </template>
  </Suspense>

  <router-view />
</template>

<script>
  import PostListVue from "../PostList.vue";
  export default {
    components: {
      PostListVue,
    },
  };
</script>
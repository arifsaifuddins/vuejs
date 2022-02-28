<template>
  <ul class="col-lg-6 mx-auto my-2 mx-2 list-group" v-for="list in lists">
    <li class="list-group-item">
      <router-link :to="`/post/${list.id}`">{{ list.title }}</router-link>
    </li>
  </ul>
</template>

<script>
  import { reactive, toRefs } from "@vue/reactivity";
  export default {
    async setup() {
      const post = reactive({
        lists: [],
      });

      await fetch("http://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => (post.lists = data));

      return { ...toRefs(post) };
    },
  };
</script>
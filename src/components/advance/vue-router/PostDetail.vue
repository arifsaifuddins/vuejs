<template>
  <ul class="list-group col-lg-6 mx-auto mx-2 my-2">
    <li class="list-group-item">{{ lists.title }}</li>
    <li class="list-group-item">{{ lists.body }}</li>
  </ul>
</template>

<script>
  import { useRouter } from "vue-router";
  import { reactive, toRefs } from "@vue/reactivity";

  export default {
    async setup() {
      const post = reactive({
        lists: "",
      });

      const route = useRouter();
      const id = route.params.id;

      await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => (post.lists = data));

      return { ...toRefs(post) };
    },
  };
</script>
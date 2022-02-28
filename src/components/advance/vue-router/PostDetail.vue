<template>
  <ul class="list-group col-lg-6 mx-auto mx-2 my-2">
    <li class="list-group-item">{{ lists.title }}</li>
    <li class="list-group-item">{{ lists.body }}</li>
    <li class="list-group-item">
      <button class="btn btn-primary" @click="likePost">Like</button>
    </li>
  </ul>
</template>

<script>
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";
  import { reactive, toRefs } from "@vue/reactivity";

  export default {
    async setup() {
      const post = reactive({
        lists: "",
      });

      const route = useRoute();
      const store = useStore();

      const likePost = () => {
        store.commit("addLike");
      };

      const id = route.params.id;
      await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => (post.lists = data));

      return { ...toRefs(post), likePost };
    },
  };
</script>
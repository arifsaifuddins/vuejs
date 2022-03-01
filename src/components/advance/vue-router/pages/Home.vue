<template>
  <h1 class="text-center my-5">This is Home Page</h1>

  <!-- composition api without mapstate -->
  <!-- <h2 class="text-center">Hello {{ name }}!</h2> -->

  <!-- <div class="col-lg-4 mx-auto mb-5">
    <div class="btn-success text-center d-block btn mx-auto">
      You have likes : {{ likes }}
    </div>
    <div class="btn-info mt-2 text-center d-block btn mx-auto">
      You have fake likes : {{ fakeLikes }}
    </div>
  </div> -->

  <!-- option api with mapstate -->
  <h2 class="text-center">Hello {{ userName }}!</h2>

  <div class="col-lg-2 mx-auto my-5">
    <div class="btn-success text-center d-block btn mx-auto">
      You have likes : {{ totalLike }}
    </div>
    <!-- <div class="btn-info mt-2 text-center d-block btn mx-auto">
      You have fake likes : {{ fakeLikesSet }}
    </div> -->
  </div>

  <div class="col-lg-2 mx-auto mb-5">
    <div class="btn-danger text-center d-block btn mx-auto" @click="addLike">
      Add Like
    </div>
    <div
      class="btn-primary mt-2 text-center d-block btn mx-auto"
      @click="addUserName('Arief Saifuddien')"
    >
      Change Username
    </div>
  </div>
</template>

<script>
  import { computed, onMounted, ref } from "@vue/runtime-core";
  import { mapGetters, mapMutations, mapState, useStore } from "vuex";

  export default {
    setup() {
      const store = useStore();
      //   const name = ref("");

      onMounted(() => {
        store.dispatch("user/getPerson"); // modular
      });

      // const likes = computed(() => {
      //   return store.state.totalLike;
      // });

      //  onMounted(() => {
      //     store.dispatch("getPerson");
      //   });

      //   const fakeLikes = computed(() => {
      //     return store.getters.fakeLikesSet;
      //   });

      //   onMounted(() => {
      //     name.value = store.state.userName;
      //   });

      //   return { likes, name, fakeLikes };
    },

    // map helper hanya bisa di option api

    // // non modular
    // computed: {
    //   // sesuaikan nama di storenya state/ getter
    //   ...mapState(["totalLike", "userName"]),

    //   ...mapGetters(["fakeLikesSet"]),
    //   // // kalo mau ubah nama sesuai keinginan
    //   // ...mapState({
    //   //   likes: 'totalLike'
    //   // }),
    // },

    // methods: {
    //   // sesuaikamn nama di store mutation
    //   ...mapMutations(["addLike", "addUserName"]),
    // },

    // modular
    computed: {
      ...mapState({
        totalLike: (state) => state.post.totalLike,
        userName: (state) => state.user.userName,
      }),
      // ...mapGetters({
      //   fakeLikesSet: "post/fakeLikesSet",
      // }),
    },
    methods: {
      ...mapMutations({
        addLike: "post/addLike",
        addUserName: "user/addUserName",
      }),
    },
  };
</script>
<template>
  <h1 class="text-center my-4">
    {{ person.name.title }} {{ person.name.first }} {{ person.name.last }}
  </h1>

  <ul class="col-lg-6 mx-auto my-2 mx-2 list-group">
    <img :src="person.picture.large" class="w-50 mx-auto mb-5 rounded-circle" />
    <li class="list-group-item">
      Name : {{ person.name.title }} {{ person.name.first }}
      {{ person.name.last }}
    </li>
    <li class="list-group-item">Gender : {{ person.gender }}</li>
    <li class="list-group-item">Country : {{ person.location.country }}</li>
    <li class="list-group-item">Age : {{ person.dob.age }}</li>
    <li class="list-group-item">Email : {{ person.email }}</li>
    <li class="list-group-item">Phone : {{ person.phone }}</li>
  </ul>
  <div class="col-lg-4 mx-auto mb-5 mt-3">
    <div class="btn-success text-center d-block btn mx-auto" @click="getPerson">
      Generate New User
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  // import { computed, onMounted } from "@vue/runtime-core";
  // import { useStore } from "vuex";

  export default {
    // setup() {
    //   const store = useStore();
    //   const person = computed(() => {
    //     return store.state.person;
    //   });
    //   return {
    //     person,
    //   };
    // },

    // // map state di option api

    // // non modular
    // computed: {
    //   // sesuai nama di store
    //   ...mapState(["person"]),
    // },
    // methods: {
    //   ...mapActions(["getPerson"]),
    // },

    // modular
    computed: {
      ...mapState({
        person: (state) => state.user.person,
      }),
    },
    methods: {
      ...mapActions({
        getPerson: "user/getPerson",
      }),
    },
  };
</script>
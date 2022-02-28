<template>
  <div class="col-lg-6 mx-auto my-2">
    <h1 class="my-2 text-center">Login Page</h1>
    <div class="mb-3">
      <input
        type="email"
        class="form-control my-3"
        placeholder="Email..."
        v-model="username"
      />
      <input
        type="password"
        class="form-control my-3"
        placeholder="Password..."
      />
    </div>
    <div class="btn btn-secondary d-block text-center" @click="login">
      Submit
    </div>
  </div>
</template>

<script>
  import { ref } from "@vue/reactivity";
  import { useRouter } from "vue-router";
  import { useStore } from "vuex";

  export default {
    setup() {
      const username = ref("");
      const route = useRouter();
      const store = useStore();

      const login = () => {
        localStorage.setItem("auth", true);

        store.commit("addUserName", username.value);
        route.push("/");
      };

      return { login, username };
    },
  };
</script>
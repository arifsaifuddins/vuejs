<template>
  <div class="col-lg-6 mx-auto my-2">
    <h1 class="my-2 text-center">Login Page</h1>
    <div class="mb-3">
      <input type="email" class="form-control my-3" placeholder="Email..." />
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
  import { useRouter } from "vue-router";
  export default {
    setup() {
      const route = useRouter();
      const login = () => {
        localStorage.setItem("auth", true);
        route.push("/");
      };

      return { login };
    },
  };
</script>
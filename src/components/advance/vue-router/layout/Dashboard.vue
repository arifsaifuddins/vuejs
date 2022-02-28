<template>
  <ul
    class="nav nav-tabs border border-dark container"
    id="myTab"
    role="tablist"
  >
    <div class="p-2 mx-auto">
      <router-link to="/" class="nav-item btn btn-primary">Home </router-link>
      <router-link to="/post" class="nav-item btn btn-success mx-2"
        >Post
      </router-link>
      <router-link to="/about" class="nav-item btn btn-warning me-2"
        >About
      </router-link>
      <router-link :to="{ name: 'Contact' }" class="nav-item btn btn-info"
        >Contact
      </router-link>
      <div @click="logout" class="ms-2 nav-item btn btn-danger">Log Out</div>
    </div>
  </ul>

  <router-view />
</template>


<script>
  import { useRouter } from "vue-router";
  export default {
    setup() {
      const route = useRouter();

      const logout = () => {
        localStorage.setItem("auth", false);
        route.push("/login");
      };

      return {
        logout,
      };
    },
  };
</script>
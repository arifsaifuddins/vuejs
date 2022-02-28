<template>
  <div class="container bg-success p-2 mb-3">
    <h1 class="text-white text-center">Vue Router</h1>
  </div>

  <ul class="nav nav-tabs bg-danger container" id="myTab" role="tablist">
    <div class="p-2 mx-auto">
      <router-link to="/" class="nav-item btn btn-primary">Home </router-link>
      <router-link to="/about" class="nav-item btn btn-warning mx-3"
        >About
      </router-link>
      <router-link to="/contact" class="nav-item btn btn-info"
        >Contact
      </router-link>
    </div>
  </ul>

  <router-view />
</template>

<script>
  export default {};
</script>
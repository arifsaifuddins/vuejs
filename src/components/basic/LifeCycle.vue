<script>
export default {
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  Updated() {
    console.log("Updated");
  },
  beforeUnmounted() {
    console.log("beforeUnmounted");
  },
  Unmounted() {
    console.log("Unmounted");
  },
};
</script>
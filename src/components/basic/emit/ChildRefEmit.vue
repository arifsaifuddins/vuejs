<template>
  <div>
    <span>Child Comp</span><br />

    <button @click="onPress">Button Child</button>
  </div>
</template>

<script>
  export default {
    emits: ["click-child"],
    methods: {
      onClick() {
        console.log("child clicked");
      },
      onPress() {
        this.$emit("click-child", "value-child");
      },
    },
  };
</script>
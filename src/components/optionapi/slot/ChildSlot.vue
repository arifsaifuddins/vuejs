<template>
  <header>Header</header>
  <!-- slot one -->
  <slot :data1="header" />

  <!-- multislot -->
  <main>Main</main>
  <slot name="slot1" :data2="main" />
  <section>Section</section>
  <slot name="slot2" :data3="section" />
  <section>Dir</section>
  <slot name="slot3" :data4="dir" />
  <footer>Footer</footer>
  <slot name="slot4" :data5="footer" />
</template>

<script>
  export default {
    data() {
      return {
        header: "this is header",
        main: "this is main",
        section: "this is section",
        dir: "this is dir",
        footer: "this is footer",
      };
    },
  };
</script>
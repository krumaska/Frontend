<template>
  <div>
    <h1 class="header">{{ title }}</h1>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      title: String
    }
  };
</script>

<style scoped>
  .header {
    font-size: 2em;
    color:  rgb(82, 178, 207);
    margin-left: 1.0em;
  }
</style>
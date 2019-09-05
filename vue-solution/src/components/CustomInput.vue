<template>
  <input
    v-bind:value="value"
    v-on:input="value = $event.target.value"
  >
</template>

<script>
  export default {
    name: "CustomInput",
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<style scoped>

</style>
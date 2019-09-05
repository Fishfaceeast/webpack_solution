<template>
  <div class="container">
    <header>
      <slot v-bind:user="tester">
        {{ tester.lastName }}
      </slot>
    </header>
  </div>

</template>

<script>
  export default {
    name: "BaseLayout",
    data() {
      return {
        tester: {
          firstName: 'foo',
          lastName: 'bar',
        }
      }
    }
  }
</script>

<style scoped>

</style>
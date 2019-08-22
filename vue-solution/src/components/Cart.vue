<template>
  <div>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <ul>
      <li
        v-for="product in products"
      >
        {{ product }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Cart",
    props: {
      products: {
        type: Array,
        default: function () {
          return []
        }
      },
    },
    data() {
      return {
        rawHtml: '<a>hahaha</a>'
      };
    }
  }
</script>

<style scoped>

</style>
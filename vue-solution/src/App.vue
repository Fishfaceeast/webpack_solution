<template>
  <section>
    <div class="example">{{ msg }}</div>

    <Cart
      :products="products"
    />
  </section>
</template>

<script>
  import Cart from '@/components/Cart.vue'
  export default {
    name: "App",
    components: {
      Cart,
    },
    data() {
      return {
        msg: 'haha',
        products: ['mac', 'iPhone', 'airPods']
      }
    }
  };
</script>
<style lang="scss">
    @import "./app.scss";
</style>
<template>
  <section>
    <div
      class="example"
    >{{ msg }}</div>
    <BaseLayout>
      <template v-slot="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </BaseLayout>

    <table>
    <AlertBox outerProp="haha">
      Something bad happened.
      {{ user.name }}
    </AlertBox>
    </table>
    <Cart
      :product-list="productList"
      @change-event="doSomething"
    />
    <AsyncComponent></AsyncComponent>
  </section>
</template>

<script>
  import Cart from '@/components/Cart.vue'
  import AlertBox from '@/components/AlertBox.vue'
  import BaseLayout from '@/components/BaseLayout.vue'
  export default {
    name: "App",
    components: {
      Cart,
      AlertBox,
      BaseLayout,
      'AsyncComponent': () => import('@/components/AsyncComponent.vue')
    },
    data() {
      return {
        msg: 'haha',
        productList: ['mac', 'iPhone', 'airPods'],
        user: {
          name: 'kitty',
          gender: 'female',
        }
      }
    },
    methods: {
      doSomething(v) {
        console.log(v)
      }
    }
  };
</script>
<style lang="scss">
    @import "./app.scss";
</style>
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
      :tester="testerData"
      @change-event="doSomething"
    />
    <asyncCard></asyncCard>
    <MixinConsumer />
  </section>
</template>

<script>
  import Cart from '@/components/Cart.vue'
  import AlertBox from '@/components/AlertBox.vue'
  import BaseLayout from '@/components/BaseLayout.vue'
  import VuePlaceholder from '@/components/VuePlaceholder.vue'
  import MixinConsumer from '@/components/MixinConsumer.vue'

  const asyncCard = () => ({
    component: import('@/components/AsyncComponent.vue'),
    loading: VuePlaceholder,
    delay: 1
  })

  export default {
    name: "App",
    components: {
      Cart,
      AlertBox,
      BaseLayout,
      asyncCard,
      MixinConsumer
    },
    mounted() {
      const self = this;
      setTimeout(function() {
        self.testerData = '9999';
      }, 2000)
    },
    data() {
      return {
        msg: 'haha',
        productList: ['mac', 'iPhone', 'airPods'],
        testerData: '1111',
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
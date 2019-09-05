<template>
  <div>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <input v-model="searchText">
    <input
      :value="searchText2"
      v-on:input="searchText2 = $event.target.value"
    >
    <div>
      CustomInput:
      <CustomInput v-model="searchText3"></CustomInput>

    </div>

    <ul>
      <li
        v-for="product in productList"
        @click="handleClick(product)"
      >
        {{ product }}
      </li>
    </ul>
  </div>
</template>

<script>
  import CustomInput from '@/components/CustomInput.vue'

  export default {
    name: "Cart",
    components: {
      CustomInput
    },
    props: {
      productList: {
        type: Array,
        default: function () {
          return []
        }
      },
    },
    data() {
      return {
        rawHtml: '<a>hahaha</a>',
        searchText: '',
        searchText2: '',
        searchText3:''
      };
    },
    methods: {
      handleClick(item) {
        this.$emit('change-event', item)
      }
    }
  }
</script>

<style scoped>

</style>
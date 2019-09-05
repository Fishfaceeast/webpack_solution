<template>
  <div class="alert-box">
    <strong>Error!</strong>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "AlertBox"
  }
</script>

<style lang="scss" scoped>
.alert-box {
  color: #666;
}
</style>
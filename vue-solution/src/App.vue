<template>
    <div class="example">{{ msg }}</div>
</template>

<script>
    export default {
        name: "App",
        data: function(){
            return {msg: 'haha'}
        }
    };
</script>
<style lang="scss">
    @import "./app.scss";
</style>
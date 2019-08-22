import Vue from 'vue';
import App from './App.vue';

// Define a new component called button-counter
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
new Vue({
  el:'#app',
  render: h => h(App)
});


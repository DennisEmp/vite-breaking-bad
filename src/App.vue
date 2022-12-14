<script>
import HelloWorld from './components/HelloWorld.vue'

// import store
import { store } from './store.js'

export default {
  name: "App",
    data() {
      return {
        store,
      }
    },
}
</script>

<template>
  
  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss">
  @use './style/general.scss';
  main {
    padding-top: 20px;
  }
</style>

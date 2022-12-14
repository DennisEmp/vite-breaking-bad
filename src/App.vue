<script>
import axios from 'axios';
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue'
import CharacterList from './components/CharacterList.vue'

// import store
import { store } from './store.js'

export default {
  name: "App",
  components: {
    AppHeader,
    CharacterList
},
    data() {
      return {
        store,
      }
    },
    methods: {
      getCHaracters(){

        axios
      .get(store.apiURL)
      .then(res => {
        store.CharacterList = res.data.results
      })
      .catch(err => {
        console.log("Errori, err")
      });
      }
    },
    mounted(){
      this.getCHaracters();
    }
}
</script>

<template>
  <AppHeader :msg="store.titolo" />
  <main>
    <CharacterList />
  </main>
</template>

<style lang="scss">
  @use './style/general.scss';
  main {
    padding-top: 20px;
  }
</style>

<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import CharacterList from './components/CharacterList.vue'
import AppSearch from './components/AppSearch.vue'

// import store
import { store } from './store.js'

export default {
  name: "App",
  components: {
    AppHeader,
    CharacterList,
    AppSearch
},
    data() {
      return {
        store,
      }
    },
    methods: {
      getCHaracters(){

        let myUrl = store.apiURL;

        if(store.searchText !== "") {
          myUrl += `?${store.apiNameParameter}=${store.searchText}`;
        }

        axios
      .get(myUrl)
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
    <AppSearch @search="getCHaracters"/>
    <CharacterList />
  </main>
</template>

<style lang="scss">
  @use './style/general.scss';
  main {
    padding-top: 20px;
  }
</style>

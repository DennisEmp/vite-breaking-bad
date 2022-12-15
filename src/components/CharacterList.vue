<script>
import SingleCharacter from './SingleCharacter.vue';

import { store } from '../store.js';
export default {
    name: "CharacterList",
    components: {
        SingleCharacter
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section class="container">
        <div class="row">
            <div v-for="character in store.CharacterList" :key="character.id" class="col-6 com-md-4 col-lg-4 mb-5">
                <SingleCharacter :info="character" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
</style>
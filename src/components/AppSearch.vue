<script>

import { store } from '../store.js'


export default {
    name: "AppSearch",
    data() {
        return {
            store,
        }
    }
}
</script>


<template>
    <div class="container mb-3">
        <div class="row">
            <div class="col-12">
                <form class="row g-3 justify-content-center">
                    <div class="col-auto">
                        <label for="search-character" class="visually-hidden"> Search Character </label>
                        <input type="text" class="form-controll" id="search-character" placeholder="Search Character" v-model="store.searchText" />
                    </div>
                    <div class="col-auto">
                        <div class="row">
                            <div class="col-auto">
                                <button type="submit" class="btn btn primary mb-2" @click.prevent="$emit('search')"> Search </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>
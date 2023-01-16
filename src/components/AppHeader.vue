<script>
import { store } from '../store.js';
import AppSearch from './AppSearch.vue'
import axios from 'axios';

export default {
    name: 'AppHeader',
    components: {
        AppSearch
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getMovies(querySelected) {
            axios.get(`${store.apiUrl}/movie`, {
                params: {
                    api_key: store.myApiKey,
                    language: "it-IT",
                    query: querySelected
                }
            })
                .then((response) => {
                    this.store.moviesList = response.data.results;
                    console.log(response.data.results)
                })
        }
    },

}
</script>

<template>
    <AppSearch @searchMovies="getMovies" />
</template>

<style lang="scss" scoped>

</style>
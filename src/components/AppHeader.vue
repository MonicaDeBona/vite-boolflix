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
        getMovies(movieSelected) {
            axios.get(`${store.apiUrl}/movie`, {
                params: {
                    api_key: store.myApiKey,
                    language: "it-IT",
                    query: movieSelected
                }
            })
                .then((response) => {
                    this.store.moviesList = response.data.results;
                    console.log(response.data.results)
                })
        },
        getSeries(serieSelected) {
            axios.get(`${store.apiUrl}/tv`, {
                params: {
                    api_key: store.myApiKey,
                    language: "it-IT",
                    query: serieSelected
                }
            })
                .then((response) => {
                    this.store.seriesList = response.data.results;
                    console.log(response.data.results)
                })
        },
    },

}
</script>

<template>
    <AppSearch @searchMovies="getMovies" @searchSeries="getSeries" />
</template>

<style lang="scss" scoped>

</style>
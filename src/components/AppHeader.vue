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
        getMovies() {
            axios.get(`${store.apiUrl}/movie`, {
                params: {
                    api_key: store.myApiKey,
                    language: "it-IT",
                    query: this.store.searchText
                }
            })
                .then((response) => {
                    this.store.moviesList = response.data.results;
                    console.log(response.data.results)
                })
        },
        getSeries() {
            axios.get(`${store.apiUrl}/tv`, {
                params: {
                    api_key: this.store.myApiKey,
                    language: "it-IT",
                    query: this.store.searchText
                }
            })
                .then((response) => {
                    this.store.seriesList = response.data.results;
                    console.log(response.data.results)
                })
        },
        getItems() {
            this.getMovies()
            this.getSeries()
        }
    },

}
</script>

<template>
    <AppSearch @search="getItems" />
</template>

<style lang="scss" scoped>

</style>
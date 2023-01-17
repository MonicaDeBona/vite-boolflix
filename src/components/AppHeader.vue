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
                .catch(function (error) {
                    console.warn(error)
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
                .catch(function (error) {
                    console.warn(error)
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
    <nav class="d-flex align-items-center justify-content-beetween">
        <div class="logo">
            <img src="../assets/imgs/logo.svg" alt="">
        </div>
        <div class="nav-item">
            <ul class="d-flex justify-content-beetween">
                <li>
                    Home
                </li>
                <li>
                    Movies
                </li>
                <li>
                    Series
                </li>
                <li>
                    Podcast
                </li>
                <li>
                    More
                </li>
            </ul>
        </div>
        <div class="search">
            <AppSearch @search="getItems" />
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    height: 75px;
    background-color: rgb(109, 108, 108);
    padding: 1rem;
}

.logo {
    flex-basis: 35%;

    img {
        width: 150px;
    }
}

.nav-item {
    flex-basis: 30%;
    color: black
}

.search {
    flex-basis: 35%;
    text-align: end;
}
</style>
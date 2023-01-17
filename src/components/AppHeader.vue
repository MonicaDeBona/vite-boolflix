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
        getImagePath: function (img) {
            return new URL(`../assets/imgs/${img}.png`, import.meta.url).href;
        },
        getMovies() {
            axios.get(`${store.apiUrl}/movie`, {
                params: {
                    api_key: store.myApiKey,
                    language: "it-IT",
                    query: this.store.searchText
                }
            })
                .then((response) => {
                    this.store.cardsList = response.data.results;
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
                    this.store.cardsList = response.data.results;
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
    <nav>
        <div class="wrapper d-flex align-items-center justify-content-between">
            <div class="left-nav d-flex align-items-center">
                <div class="logo">
                    <img src="../assets/imgs/logo.svg" alt="">
                </div>
                <div class="nav-item">
                    <ul class="d-flex justify-content-between">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Movies</a>
                        </li>
                        <li>
                            <a href="#">Shows</a>
                        </li>
                        <li>
                            <a href="#">Podcast</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="search">
                <AppSearch @search="getItems" />
            </div>
        </div>
    </nav>
    <div class="jumbo">

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

nav {
    height: 75px;
    background-color: $nav-color;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    z-index: 1;
}

.logo img {
    width: 150px;
    margin-right: 2.5rem;
}

ul li {
    color: white;
    padding: 0 1rem;
    border-left: 2px solid white;
    text-transform: uppercase;
    font-size: .9rem;
    font-weight: bold;

    a {
        transition: color .4s;

        &:hover {
            color: $main-accent-color;
        }
    }
}

.jumbo {
    height: 800px;
    background-color: $main-bg-color;
    background-image: url('../assets/imgs/jumbo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>
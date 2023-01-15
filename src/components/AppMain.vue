<script>
import { store } from '../store.js';
import axios from 'axios';
import AppMovies from './AppMovies.vue';

export default {
    name: 'AppMain',
    components: {
        AppMovies,
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
                    query: 'query'
                }
            })
                .then((response) => {
                    this.store.moviesList = response.data.results;
                    console.log(response.data.results)
                })
        }
    },
    created() {
        this.getMovies();
    }
}
</script>

<template>
    <div class="container">
        <div class="movies-container">
            <AppMovies v-for="movieEl in store.moviesList" :movie="movieEl" :key="movieEl.id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    widows: 90%;
    margin: 0 auto;
}

.movies-container {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
}
</style>
<script>
import { store } from '../store.js';
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
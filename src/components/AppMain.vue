<script>
import { store } from '../store.js';
import AppMovies from './AppMovies.vue';
import AppSeries from './AppSeries.vue';

export default {
    name: 'AppMain',
    components: {
        AppMovies,
        AppSeries
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <div class="cards-container d-flex">
            <AppMovies v-for="movieEl in store.moviesList" :movie="movieEl" :key="movieEl.id" />
            <AppSeries v-for="serieEl in store.seriesList" :serie="serieEl" :key="serieEl.id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.cards-container {
    flex-wrap: wrap;
    padding: 2rem;
}
</style>
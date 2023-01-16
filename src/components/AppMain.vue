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
    <div class="container">
        <div class="cards-container">
            <AppMovies v-for="movieEl in store.moviesList" :movie="movieEl" :key="movieEl.id" />
            <AppSeries v-for="serieEl in store.seriesList" :serie="serieEl" :key="serieEl.id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    widows: 90%;
    margin: 0 auto;
}

.cards-container {
    display: flex;
    flex-wrap: wrap;
    padding: 2rem;
}
</style>
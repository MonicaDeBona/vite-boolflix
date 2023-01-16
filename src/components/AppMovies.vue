<script>
export default {
    name: 'AppMovies',
    props: {
        movie: {
            type: Object,
            required: true
        },
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/flagsImg/${img}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="movie-card">
        <h3>{{ movie.title }}</h3>
        <h3>{{ movie.original_title }}</h3>
        <div class="flag">
            <img v-if="movie.original_language === 'en'" :src="getImagePath(movie.original_language)"
                :alt="movie.original_language">
            <p v-else>{{ movie.original_language }}</p>
        </div>
        <p>{{ movie.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
.movie-card {
    display: flex;
    flex-direction: column;
    width: calc((100% / 5) - 1rem);
    margin: 1rem .5rem;
    text-align: center;

    .flag img {
        width: 20%;
    }
}
</style>
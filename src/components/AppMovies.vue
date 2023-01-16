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
    },
    data() {
        return {
            languagesList: ["en", "de", "fr", "it"],
            scaleRating: Math.ceil(this.movie.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="movie-card">
        <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" :alt="movie.title">
        <h3 v-if="movie.title != movie.original_title">{{ movie.title }}</h3>
        <h3 v-else>{{ movie.original_title }}</h3>
        <div class="flag">
            <img v-if="languagesList.includes(movie.original_language)" :src="getImagePath(movie.original_language)"
                :alt="movie.original_language">
            <p v-else>{{ movie.original_language }}</p>
        </div>
        <p>{{ scaleRating }}</p>
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
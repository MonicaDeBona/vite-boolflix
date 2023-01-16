<script>
export default {
    name: 'AppMovies',
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div class="movie-card">
        <h3>{{ movie.title }}</h3>
        <h3>{{ movie.original_title }}</h3>
        <p>{{ movie.original_language }}</p>
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
}
</style>
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
            return new URL(`../assets/imgs/${img}.png`, import.meta.url).href;
        }
    },
    data() {
        return {
            languagesList: ["en", "de", "fr", "it"],
            activeStars: Math.ceil(this.movie.vote_average / 2),
            showCardInfo: false
        }
    }
}
</script>

<template>
    <div class="movie-card">
        <img v-if="movie.poster_path != null" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`"
            :alt="movie.title" class="movie-img" @mouseover="showCardInfo = true" @mouseout="showCardInfo = false">
        <img v-else :src="getImagePath('poster-not-available')" :alt="movie.title" class="movie-img"
            @mouseover="showCardInfo = true" @mouseout="showCardInfo = false">
        <div class="card-info d-flex f-column" v-if="showCardInfo">
            <h3 v-if="movie.title != movie.original_title">
                Title: {{ movie.title }}
            </h3>
            <h3 v-else>
                Title: {{ movie.original_title }}
            </h3>
            <span>
                Rating: <i v-for="star in 5" :key="star"
                    :class="star < activeStars ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
            <p v-if="movie.overview != ''">
                Overview: {{ movie.overview }}
            </p>
            <div class="flag">
                <img v-if="languagesList.includes(movie.original_language)" :src="getImagePath(movie.original_language)"
                    :alt="movie.original_language">
                <p v-else>
                    {{ movie.original_language }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.movie-card {
    display: flex;
    position: relative;
    width: calc((100% / 5) - 2rem);
    margin: 1rem;
    overflow-y: auto;

    .flag img {
        width: 40px;
    }

    .movie-img {
        width: 100%;
        opacity: 1;
        transition: opacity .2s ease-in-out;
    }

    &:hover .movie-img {
        opacity: 0.2;
    }

    .card-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: white;


        h3 {
            font-size: 1.5rem;
        }
    }
}
</style>
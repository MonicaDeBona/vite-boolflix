<script>
export default {
    name: 'AppSeries',
    props: {
        serie: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/imgs/${img}.png`, import.meta.url).href;
        }
    },
    data() {
        return {
            languagesList: ["en", "de", "fr", "it"],
            activeStars: Math.ceil(this.serie.vote_average / 2),
            showCardInfo: false
        }
    }
}
</script>

<template>
    <div class="serie-card">
        <img v-if="serie.poster_path != null" :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`"
            :alt="serie.name" class="serie-img" @mouseover="showCardInfo = true" @mouseout="showCardInfo = false">
        <img v-else :src="getImagePath('poster-not-available')" :alt="serie.name" class="serie-img"
            @mouseover="showCardInfo = true" @mouseout="showCardInfo = false">
        <div class="card-info d-flex f-column justify-content-center align-content-center" v-if="showCardInfo">
            <h3 v-if="serie.name != serie.original_name">
                {{ serie.name }}
            </h3>
            <h3 v-else>
                {{ serie.original_name }}
            </h3>
            <div class="flag">
                <img v-if="languagesList.includes(serie.original_language)" :src="getImagePath(serie.original_language)"
                    :alt="serie.original_language">
                <p v-else>
                    {{ serie.original_language }}
                </p>
            </div>
            <span>
                <i v-for="star in 5" :key="star" :class="star < activeStars ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
            <p>
                {{ serie.overview }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.serie-card {
    display: flex;
    position: relative;
    width: calc((100% / 5) - 2rem);
    margin: 1rem;
    text-align: center;

    .flag img {
        width: 40px;
    }

    .serie-img {
        width: 100%;
        opacity: 1;
        transition: opacity .2s ease-in-out;
    }

    &:hover .serie-img {
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
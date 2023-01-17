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
            activeStars: Math.ceil(this.serie.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="serie-card">
        <img v-if="serie.poster_path != null" :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`"
            :alt="serie.name">
        <img v-else :src="getImagePath('poster-not-available')" :alt="serie.name">
        <!-- <h3 v-if="serie.name != serie.original_name">{{ serie.name }}</h3>
        <h3 v-else>{{ serie.original_name }}</h3>
        <div class="flag">
            <img v-if="languagesList.includes(serie.original_language)" :src="getImagePath(serie.original_language)"
                :alt="serie.original_language">
            <p v-else>{{ serie.original_language }}</p>
        </div>
        <div class="stars">
            <i v-for="star in 5" :key="star" :class="star < activeStars ? 'fas fa-star' : 'far fa-star'"></i>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
.serie-card {
    display: flex;
    flex-direction: column;
    width: calc((100% / 5) - 1rem);
    margin: 1rem .5rem;
    text-align: center;
}

.flag img {
    width: 20%;
}
</style>
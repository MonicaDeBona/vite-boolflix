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
            return new URL(`../assets/flagsImg/${img}.png`, import.meta.url).href;
        }
    },
    data() {
        return {
            languagesList: ["en", "de", "fr", "it"]
        }
    }
}
</script>

<template>
    <div class="serie-card">
        <img :src="`https://image.tmdb.org/t/p/w342/${serie.poster_path}`" :alt="serie.name">
        <h3 v-if="serie.name != serie.original_name">{{ serie.name }}</h3>
        <h3 v-else>{{ serie.original_name }}</h3>
        <div class="flag">
            <img v-if="languagesList.includes(serie.original_language)" :src="getImagePath(serie.original_language)"
                :alt="serie.original_language">
            <p v-else>{{ serie.original_language }}</p>
        </div>
        <p>{{ serie.vote_average }}</p>
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
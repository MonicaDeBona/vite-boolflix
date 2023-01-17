<script>
export default {
    name: 'AppCards',
    props: {
        card: {
            type: Object,
            required: true
        },
    },
    methods: {
        getImagePath: function (img) {
            return new URL(`../assets/imgs/${img}.png`, import.meta.url).href;
        },
        cardTitle() {
            if (this.card.title) {
                return this.card.title
            } else {
                return this.card.name
            }
        },
        cardOriginalTitle() {
            if (this.card.original_title) {
                return this.card.original_title
            } else {
                return this.card.original_name
            }
        }
    },
    data() {
        return {
            languagesList: ["en", "de", "fr", "it"],
            activeStars: Math.ceil(this.card.vote_average / 2),
            showCardInfo: false
        }
    }
}
</script>

<template>
    <div class="card" @mouseover="showCardInfo = true" @mouseout="showCardInfo = false">
        <img v-if="card.poster_path != null" :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`"
            :alt="cardTitle()" class="card-poster">
        <img v-else :src="getImagePath('poster-not-available')" :alt="cardTitle()" class="card-poster">
        <div class="card-info d-flex f-column" v-if="showCardInfo">
            <h3 v-if="cardTitle() != cardOriginalTitle()">
                TITLE: {{ cardTitle() }}
            </h3>
            <h3>
                ORIGINAL TITLE: {{ cardOriginalTitle() }}
            </h3>
            <span>
                RATING: <i v-for="star in 5" :key="star"
                    :class="star < activeStars ? 'fas fa-star' : 'far fa-star'"></i>
            </span>
            <p v-if="card.overview != ''">
                OVERVIEW: {{ card.overview }}
            </p>
            <div class="flag">
                <img v-if="languagesList.includes(card.original_language)" :src="getImagePath(card.original_language)"
                    alt="card.original_language">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    display: flex;
    position: relative;
    width: calc((100% / 5) - 2rem);
    margin: 1rem;
    overflow-y: auto;

    .flag img {
        width: 40px;
    }

    .card-poster {
        width: 100%;
        opacity: 1;
        transition: opacity .2s ease-in-out;
    }

    &:hover .card-poster {
        opacity: 0.2;
    }

    .card-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: white;
        padding: 1rem;


        h3 {
            padding-bottom: 1rem;
        }
    }
}
</style>
<script>
import { store } from '../store.js';
import AppCards from './AppCards.vue';

export default {
    name: 'AppMain',
    components: {
        AppCards,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="options wrapper d-flex justify-content-between">
        <div class="button">
            <button>Featured</button>
            <button>Movie</button>
            <button>Shows</button>
        </div>
        <select name="" id="prova">
            <option value="1">Prova</option>
            <option value="2">Prova</option>
        </select>
    </div>
    <div class="main-wrapper">

        <div class="cards-container d-flex">
            <AppCards v-for="cardEl in store.cardsList" :card="cardEl" :key="cardEl.id" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-wrapper {
    width: 90%;
    margin: auto;
}

button {
    background-color: transparent;
    border: 1px solid transparent;
    padding: 12px 20px;
    color: white;
    font-size: 1rem;
    transition: .4s;

    &:hover {
        background-color: $main-accent-color;
        border-color: $main-accent-color;
    }
}

#prova {
    padding: 12px 20px;
    border: 1px solid white;
    width: 80px;

    option {
        padding: 12px 20px;
    }
}

.cards-container {
    flex-wrap: wrap;
}
</style>
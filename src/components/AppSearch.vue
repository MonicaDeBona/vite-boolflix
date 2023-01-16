<script>
import { store } from '../store.js';

export default {
    name: 'AppSearch',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div>
        <input type="text" placeholder="Search..." v-model="store.searchText">
        <button @click="$emit('searchMovies', store.searchText)">Search</button>
    </div>
</template>

<style lang="scss" scoped>

</style>
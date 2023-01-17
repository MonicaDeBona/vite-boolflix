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
        <button @click="$emit('search')">Search</button>
    </div>
</template>

<style lang="scss" scoped>
input {
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid white;
}

button {
    background-color: white;
    border: 1px solid white;
    padding: 12px 20px;
    margin-left: 1rem;
    border-radius: 10px;
}
</style>
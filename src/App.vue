<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default{
    components: {
        AppHeader,
        AppMain,
    },
    
    data() {
        return {
            store,
        }
    }
}
</script>

<template>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;
</style>

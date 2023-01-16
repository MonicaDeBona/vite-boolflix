<script>
// import '../../node_modules/flag-icons/css/flag-icons.min.css';
export default {
    name: 'AppSeries',
    props: {
        serie: {
            type: Object,
            required: true
        }
    },
}
</script>

<template>
    <div class="serie-card">
        <h3>{{ serie.name }}</h3>
        <h3>{{ serie.original_name }}</h3>
        <p>{{ serie.original_language }}</p>
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
</style>
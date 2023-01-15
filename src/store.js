import { reactive } from 'vue';

export const store = reactive({
    moviesList: [],
    apiUrl: 'https://api.themoviedb.org/3/search',
    myApiKey: 'feef51781d8eb2b4266d6fec9014ec0d',
})
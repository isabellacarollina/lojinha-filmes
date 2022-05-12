<template>
<div class="mx-5">
<h2 class="mt-5 text-yellow-500 text-lg font-semibold">
    LANÇAMENTOS
</h2>
<div class="grid grid-cols-1 sm:grid-cols-3 md:cols-4 lg:grid-cols-4 gap-8">
    <Movieitem :key="movie.id" v-for="movie in movies" :movie="movie" />
</div>


</div>
</template>

<script>
import Movieitem from "./items/Movie-item";

export default {
    components: {
        Movieitem,
    }, 

    data: function() {
        
        return {
            movies: [],
        }
    },

    async mounted() {
        try{
        const response = await this.$http.get("/movie/popular");
        this.movies = response.data.results;
        console.log(response)
        } catch (error) {
        console.log(error);
        }
    },
};
</script>

<style></style>
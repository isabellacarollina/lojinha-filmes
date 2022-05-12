<template>

<div>
    
    <Navbar />
    <Popularmovies/>
    
</div>

</template>

<script>
import Navbar from "./header/Nav-bar";
import Popularmovies from "./Popular-movies"; 
export default {
    components: {
        Navbar,
        Popularmovies,
    },
};
</script>

<style>

</style>
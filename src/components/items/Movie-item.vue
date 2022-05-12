<template>
<div class="movie-details">
    <img 
    :src="posterPath" class="hover:opacity-75 transition easy-in-out duration-150"
    />
    <h3> {{movie.title}} </h3>
    

    <div> 
        <svg class="fill-current text-yellow-500 w-4 star-icon " viewBox="0 0 24 24" >
        <g data-name="layer 2">
            <path 
            d="M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z"
            data-name="star"
            
            />
       </g> </svg><span class="ml-2">65% | 2021-25-11 </span>
    </div> 
        <span class="text-sm text-gray-500">Animação, Família, Fantasia, Comédia</span>  
        <span class="ml-5 text-green-500" > R$100,00 </span>  
   <button id="botao" > adicionar</button>
</div>

</template>
    


<script>
export default {
    props: {
        movie: {
            required: true,
        },
    },

    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
        },
    },
};
</script>

<style>
#botao {
    transition-duration: 0.4s;
    background-color: #6558f5; 
  border-radius: 5px;
  color: white;
  width: 100%;
  /* padding: 15px 32px; */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
#botao:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.movie-details{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.star-icon{
    display: inline;
}

</style>
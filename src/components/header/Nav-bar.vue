<template>
  <div class="navbar-container">
    <img src="@/assets/images/logo1.png" alt="" />

        <form class="d-flex" style="background-color:white">
            <input class="form-control me-2 search-input" type="search" placeholder="Pesquisar" aria-label="Search">
            <button class="btn" type="submit"><img src="@/assets/images/search.png" alt="" class="h-5 " /></button>
        </form>
        <div class="icons-container">
            <img src="@/assets/images/heart.png" alt="" class="h-10 " />
            <img src="@/assets/images/cart.png" alt="" class="h-10 " />
    </div>

 </div>
</template>

<style>

.icons-container{
    display: flex;
    padding-right:40px ;

}

.navbar-container{
 display: flex;
 align-items: center;
width: 100%;
justify-content: space-between;
height: 100px;
background-color:#a4ebe4 ;
}

.search-input{
    border: none;
}

</style>
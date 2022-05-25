<template>
    <div>
        <form class="search-form">
            <input id="busca" type="text" name="busca" placeholder="Buscar produtos..." v-model="busca">
            <button @click.prevent="buscarProdutos" id="lupa" type="submit" value="Buscar"><mdicon class="icon" name="Magnify"/></button>
        </form>
    </div>
</template>

<script src="./Buscar.js"></script>

<style scoped>
    form{
        display: flex;
            height: 40px;
    }
    input{
        margin: 0;
        border: none;
        border-radius: 5px 0 0 5px;
        background-color: #fff;
        z-index: 9;
        color: gray;
        min-width: 200px;
    }

    input:focus{
        border:none;
        box-shadow:none;
    }

    button{
        display: flex;
        border: none;
        padding: 20px;
        border-radius: 0 5px 5px 0;
        background-color: #ec5466;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        max-width: 50px;
    }

    button:hover{
      background-color: #c74958;  
    }

    .mdi > svg{
        color:#fff
    }
</style>

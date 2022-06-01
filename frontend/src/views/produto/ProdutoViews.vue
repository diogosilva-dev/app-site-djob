<template>
  <section>
    <div class="content" v-if="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo">
        </li>
      </ul>
      <div class="info">
        <h1>{{produto.tituloProduto}}</h1>
        <p class="preco">{{produto.valorProduto | numeroPreco}}</p>
        <p class="descricao">{{produto.descricao}}</p>
        <transition mode="out-in" v-if="produto.vendido === 'false'">
          <button class="btn" v-if="!finalizar" @click="finalizar = true">Comprar</button>
          <FinalizarCompra v-else :produto="produto"/>
        </transition>
        <button v-else class="btn btn-disabled" disabled>Produto Vendido</button>
      </div>
    </div>
    <PaginaCarregando v-else/>
  </section>
</template>

<script src="./Produto.js"></script>

<style scoped>

    .content{
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .category-bar{
        color: #fff;
        font-weight: 500;
        background-color: #EC5466;
        font-size: 14px;
        border-radius: 0 10px 10px 0;
        text-transform: uppercase;
        padding: 20px;
        width: fit-content;
    }

    .produtos{
        width: 300px;
    }

    .favorite-btn{
        position: relative;
        border-radius: 100px;
        background-color: #EC5466;
        padding: 6px;
        top: 54px;
        left: 4px;
        color: #fff;
        cursor: pointer;
        width: 50px;
        height: 50px;
    }

    .cart-btn{
        position: relative;
        border-radius: 100px;
        background-color: #548F98;
        padding: 6px;
        top: 400px;
        left: 206px;
        color: #fff;
        cursor: pointer;
        width: 50px;
        height: 50px;
    }

    .box-produto{
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 12px 3px #c1c1c1;
        overflow: hidden;
        margin: 20px;
    }

    .box-image{
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 8px 10px #c1c1c1;
        overflow: hidden;
    }

    .color-bar{
        display: flex;
        justify-content: center;
        margin-top: -20px;
    }

    .color-bar ul {
        display: flex;
        background-color: #fff;
        box-shadow: 0 4px 24px #c1c1c1;
        align-items: center;
        border-radius: 10px;
        padding: 5px;
        justify-content: center;
    }

    .color-bar ul li {
        width: 15px;
        height: 15px;
        border-radius: 20px;
        box-shadow: 1px 2px 6px #666;
        margin: 4px;
    }

    .referency-bar{
        width: fit-content;
        padding: 10px 40px 10px 10px;
        background-color: #548F98;
        color: #fff;
        border-radius: 0 10px 10px 0;
        margin-top: 20px;
    }

    h2{
        font-weight: 400;
        color: gray;
    }

    h3{
        color: #fff;
        }

    .title-product{
        padding: 20px 30px;
    }
</style>
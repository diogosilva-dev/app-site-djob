<template>
    <div class="content" v-if="produtos && produtos.length">
        <div class="produtos" v-for="(produto, index) in produtos" :key="index">
            <div v-if="index < 8">
                <button class="favorite-btn"><mdicon class="icon" name="HeartOutline" /></button>
                <button class="cart-btn"><mdicon class="icon" name="CartArrowDown" /></button>
                <router-link :to="{name: 'Produto', params: {referencia: produto.ref}}">
                    <div class="box-produto">
                        <div class="box-image">
                            <img :src="produto.imagemProduto[0]" alt="">
                        </div>
                        <div class="color-bar" >
                            <ul>
                                <li v-for="cores in produto.cores" :key="cores" :style="{'background-color':cores}"></li>
                            </ul>
                        </div>
                        <div class="referency-bar">
                            <h3>{{produto.ref}}</h3>
                        </div>
                        <div class="title-product">
                            <h2>{{produto.titulo}}</h2>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script src="./Produtos.js"></script>

<style>

</style>script>

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
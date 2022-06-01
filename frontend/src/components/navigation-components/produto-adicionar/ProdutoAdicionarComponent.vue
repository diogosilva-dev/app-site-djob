<template>
  <form class="adicionar-produto">
    
    <label for="referenciaProduto">Referencia</label>
    <input id="referenciaProduto" name="referenciaProduto" type="text" placeholder="Digite a referencia do produto" v-model="produto.referenciaProduto">

    <label for="tituloProduto">Título</label>
    <input id="tituloProduto" name="tituloProduto" type="text" placeholder="Digite o título do produto" v-model="produto.tituloProduto">

    <label for="descricaoProduto">Descrição</label>
    <input id="descricaoProduto" name="descricaoProduto" type="text" placeholder="Digite a descrição do produto" v-model="produto.descricaoProduto">

    <label for="valorProduto">Preço (R$)</label>
    <input id="valorProduto" name="valorProduto" type="number" placeholder="Digite o valor do produto" v-model="produto.valorProduto">

    <label for="fotos">Imagens</label>
    <input id="fotos" name="fotos" type="file" multiple ref="fotos">

    <input class="btn" type="button" value="Adicionar Produto" @click.prevent="adicionarProduto">

  </form>
</template>

<script src="./ProdutoAdicionar.js"></script>

<style scoped>
.adicionar-produto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>

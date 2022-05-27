<template>
  <section>
    <h2>Endereço de Envio</h2>
    <ErroNotificacao :erros="erros"/>
    <UsuarioForm>
      <button class="btn" @click.prevent="finalizarCompra">Finalizar Compra</button>
    </UsuarioForm>
  </section>
</template>

<script src="./FinalizarCompra.js"></script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>

<template>
  <transition>
    <ul class="erro" v-if="erros.length > 0">
      <li v-for="(erro, index) in erros" :key="index" v-html="erro"></li>
    </ul>
  </transition>
</template>

<script src="./ErroNotificacao.js"></script>

<style scoped>
    .erro {
    margin: 20px auto;
    }

    .erro li {
    color: rgb(238, 0, 0);
    text-align: center;
    }
</style>

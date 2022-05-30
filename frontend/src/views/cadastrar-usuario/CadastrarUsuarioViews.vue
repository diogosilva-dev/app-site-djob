<template>
  <section class="container">
    <div class="logo">
        <router-link to="/"><img src="@/assets/logo-djob-verde.svg" alt=""></router-link>
      </div>
      <h1>SUA CONTA PARA TUDO DA D.JOB</h1>
    <!-- <ErroNotificacao :erros="erros"/> -->
    <transition mode="out-in">
      <UsuarioFormComponent ref="UsuarioFormComponent"> 
        <button class="btn btn-form" @click.prevent="criarUsuario">Criar Usuário</button>
      </UsuarioFormComponent>
    </transition>
  </section>
</template>

<script src="./LoginCriar.js"></script>

<style scoped>
  .container{
    display: grid;
    padding: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .logo{
    text-align: center;
    width: 200px;
    justify-self: center;
    margin: 20px;
  }

  .inscreva-se{
    display: flex;
    align-items: center;
  }


  p{
    font-size: 14px;
    margin: 20px;
  }

  a{
    text-decoration: underline;
    font-weight: bold;
    color: #666;
    transition: all 0.5s;
  }

   a:hover{
    text-decoration: underline;
    font-weight: bold;
    color: #6DADB7;
    transition: all 0.5s;
  }
</style>

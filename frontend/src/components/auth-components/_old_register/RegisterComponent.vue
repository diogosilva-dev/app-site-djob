<template>
  <div class="container">
      <div class="logo">
        <router-link to="/"><img src="@/assets/logo-djob-verde.svg" alt=""></router-link>
      </div>
      <h1>SUA CONTA PARA TUDO DA D.JOB</h1>

      <div>
        <form
          v-on:submit.prevent="registerSubmitUserForm()"
        >
          <!--INÍCIO BLOCO: nome-->
          <div class="form-group">
            <label for="nome">
              <input
                type="text"
                id="nome"
                nome="nome"
                placeholder="Nome completo:"
                v-model="registerForm.nome"
                :class="{
                  'is-invalid': isSubmitted && $v.registerForm.nome.$error,
                }"
              />
            </label>
            <div
              v-if="isSubmitted && !$v.registerForm.nome.required"
              class="invalid-feedback"
            >
              O campo nome é obrigatório!
            </div>
          </div>
          <!--FIM BLOCO: nome-->

          <!--INÍCIO BLOCO: Email-->
          <div class="form-group">
            <label for="email">
              <input
                type="text"
                id="email"
                email="nome"
                placeholder="E-mail:"
                v-model="registerForm.email"
                :class="{
                  'is-invalid': isSubmitted && $v.registerForm.email.$error,
                }"
              />
            </label>
            <div
              v-if="isSubmitted && !$v.registerForm.email.required"
              class="invalid-feedback"
            >
              O campo nome é obrigatório!
            </div>
          </div>
          <!--FIM BLOCO: Nome-->



          <!--INÍCIO BLOCO: senha-->
          <div class="form-group">
            <label for="senha">
              <input
                type="senha"
                id="senha"
                name="senha"
                class=""
                placeholder="Senha:"
                v-model="registerForm.senha"
                :class="{
                  'is-invalid': isSubmitted && $v.registerForm.senha.$error,
                }"
              />
            </label>
            <div
              v-if="isSubmitted && $v.registerForm.senha.$error"
              class="invalid-feedback"
            >
              <span v-if="!$v.registerForm.senha.required"
                >O campo senha é obrigatório!</span
              >
              <span v-if="!$v.registerForm.senha.minLength"
                >A senha deve conter pelo menos 6 caracteres!</span
              >
            </div>
          </div>
          <!--FIM BLOCO: senha-->
          <div class="inscreva-se">
            <input type="checkbox" name="inscreva" id="inscreva">
            <p>Inscreva-se para receber e-mails de novidades da D.JOB
              e seus parceiros sobre produtos, ofertas e seus benefícios para membros.
            </p>
          </div>
          <p>
            Ao criar uma conta, você concorda com a
            <router-link to="/politica-privacidade">Política de privacidade</router-link>
            e com os <router-link to="/termo-uso">
            Termos de uso </router-link>da djob.com.br.</p>
          <!--INÍCIO BLOCO: Botão-->
            <button
              @click="submitRegisterUser"
              class="btn btn-primary btn-block w-75 my-4"
            >
              CADSTRAR
            </button>
             <p class="center">
            Já possui um login cadastrado?   <router-link to="/login">
              Faça o Login Aqui</router-link
            >
          </p>
          <!--FIM BLOCO: Botão-->
        </form>
      </div>
  </div>
</template>

<script src="./Register.js"></script>

<style scoped>
  .container{
    display: grid;
    padding: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  form{
    max-width: 400px;
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

  .inscreva-se p{
    text-align: left ;
  }

  .inscreva-se input{
    border-radius: 5px;
    width: 50px;
    height: 50px;
    margin-left: 20px;
}

  p{
    font-size: 14px;
    margin: 10px;
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

  .invalid-feedback{
    color: red;
    font-size: 12px;
  }
</style>

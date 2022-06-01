<template>
  <section class="container">
    <div class="logo">
      <router-link to="/"><img src="@/assets/logo-djob-verde.svg" alt=""></router-link>
    </div>
    <h1>SUA CONTA PARA TUDO DA D.JOB</h1>
    <form>

      <div class="form-group">
        <label for="email">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail:"
            v-model="login.email"
            :class="{
              'is-invalid': isSubmitted && $v.login.email.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.login.email.required"
          class="invalid-feedback"
        >
          O campo e-mail é obrigatório!
        </div>
      </div>

      <div class="form-group">
            <label for="password">
              <input
                type="password"
                id="password"
                name="password"
                class=""
                placeholder="Senha:"
                v-model="login.senha"
                :class="{
                  'is-invalid': isSubmitted && $v.login.senha.$error,
                }"
              />
            </label>
            <div
              v-if="isSubmitted && !$v.login.senha.required"
              class="invalid-feedback"
            >
              O campo password é obrigatório!
            </div>
          </div>
            <p class="perdeu">
              Perdeu a senha?
              <a
                href="https://api.djob.com.br/wp-login.php?action=lostpassword"
                target="_blank"
              >Clique aqui.</a>
            </p>
            <button
              @click.prevent="logar"
            >
              Entrar
            </button>
            <!--FIM BLOCO: Password-->
            <p class="center">
              Não tem uma conta cadastrada?<router-link to="/cadastro">
                Junte-se a nós</router-link
              >
            </p>
            <!-- <ErroNotificacao :erros="erros"/> -->
    </form>
  </section>
</template>

<script src="./Login.js"></script>

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

  .invalid-feedback{
    color: red;
    font-size: 12px;
  }
</style>
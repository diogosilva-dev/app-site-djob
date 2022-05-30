<template>
<div class="container">
  <div class="usuario" v-if="mostrarDadosLogin">
    <form>
      <div class="form-group">
        <label for="nome">
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome:"
            v-model="nome"
            :class="{
              'is-invalid': isSubmitted && $v.nome.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.nome.required"
          class="invalid-feedback"
        >
          O campo nome é obrigatório!
        </div>
      </div>

      <div class="form-group">
        <label for="email">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail:"
            v-model="email"
            :class="{
              'is-invalid': isSubmitted && $v.email.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.email.required"
          class="invalid-feedback"
        >
          O campo e-mail é obrigatório!
        </div>
      </div>

      <div class="form-group">
        <label for="senha">
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha:"
            v-model="senha"
            :class="{
              'is-invalid': isSubmitted && $v.senha.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.senha.required"
          class="invalid-feedback"
        >
          O campo senha é obrigatório!
        </div>
      </div>

      <div class="form-group">
        <label for="cep">
          <input
            type="text"
            id="cep"
            name="cep"
            placeholder="CEP:"
            @keyup="preencherCep"
            v-model="cep"
            :class="{
              'is-invalid': isSubmitted && $v.cep.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.cep.required"
          class="invalid-feedback"
        >
          O campo e-mail é obrigatório!
        </div>
      </div>

      <div class="form-group">
        <label for="rua">
          <input
            type="text"
            id="rua"
            name="rua"
            placeholder="Rua:"
            v-model="rua"
            :class="{
              'is-invalid': isSubmitted && $v.rua.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.rua.required"
          class="invalid-feedback"
        >
          O campo rua é obrigatório!
        </div>
      </div>

      <div class="form-group">
        <label for="numero">
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder="numero:"
            v-model="numero"
            :class="{
              'is-invalid': isSubmitted && $v.numero.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.numero.required"
          class="invalid-feedback"
        >
          O campo e-mail é obrigatório!
        </div>
      </div>

      <div class="form-group">
        <label for="bairro">
          <input
            type="text"
            id="bairro"
            name="bairro"
            placeholder="Bairro:"
            v-model="bairro"
            :class="{
              'is-invalid': isSubmitted && $v.bairro.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.bairro.required"
          class="invalid-feedback"
        >
          O campo e-mail é obrigatório!
        </div>
      </div>

      <div class="form-group">
        <label for="cidade">
          <input
            type="text"
            id="cidade"
            name="cidade"
            placeholder="Cidade:"
            v-model="cidade"
            :class="{
              'is-invalid': isSubmitted && $v.cidade.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.cidade.required"
          class="invalid-feedback"
        >
          O campo e-mail é obrigatório!
        </div>
      </div>

      <div class="form-group">
        <label for="estado">
          <input
            type="text"
            id="estado"
            name="estado"
            placeholder="Estado:"
            v-model="estado"
            :class="{
              'is-invalid': isSubmitted && $v.estado.$error,
            }"
          />
        </label>
        <div
          v-if="isSubmitted && !$v.estado.required"
          class="invalid-feedback"
        >
          O campo estado é obrigatório!
        </div>
      </div>
      <p>
        Ao criar uma conta, você concorda com a
        <router-link to="/politica-privacidade">
        Política de privacidade
        </router-link> e com os
        <router-link to="/termo-uso"> Termos de uso</router-link>
        da djob.com.br.
      </p>
      <div class="button">
        <slot></slot>
      </div>
      <p class="center">
              Já tem uma conta cadastrada?<router-link to="/login">
                Entre com seu login</router-link
              >
            </p>
    </form>
  </div>
</div>
</template>

<script src="./UsuarioForm.js"></script>

<style scoped>
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

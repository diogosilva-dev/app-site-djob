<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">Atualizar Usuário</button>
    </UsuarioForm>
    <ErroNotificacao :erros="erros"/>
  </section>
</template>

<script>
import UsuarioForm from "@/components/auth-components/usuario-form/UsuarioFormComponent.vue";
import { api } from "@/services/Api.js";

export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm
  },
  data() {
    return {
      erros: []
    };
  },
  methods: {
    atualizarUsuario() {
      this.erros = [];
      api
        .put("/usuario", this.$store.state.usuario)
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch(error => {
          this.erros.push(error.response.data.message);
        });
    }
  }
};
</script>

<style>
</style>

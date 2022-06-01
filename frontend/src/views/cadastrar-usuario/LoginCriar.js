import UsuarioFormComponent from "@/components/auth-components/usuario-form/UsuarioFormComponent.vue";

export default {
  name: "LoginCriar",
  components: {
    UsuarioFormComponent,
  },
  data() {
    return {
      criar: false,
      erros: []
    };
  },
  methods: {
    async criarUsuario(event) {
        this.$refs.UsuarioFormComponent.validarForm();
        this.erros = [];
        const button = event.currentTarget;
        button.value = "Criando...";
        button.setAttribute("disabled", "");
        try {
            await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
            await this.$store.dispatch("logarUsuario", this.$store.state.usuario);
            await this.$store.dispatch("getUsuario");
            this.$router.push({ name: "usuario" });
        } catch (error) {
            button.removeAttribute("disabled");
            button.value = "Criar Usuário";
            this.erros.push(error.response.data.message);
        }
    }
  }
};
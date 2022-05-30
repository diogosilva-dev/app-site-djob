import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import LoginCriar from "@/components/auth-components/login/LoginCriarComponent.vue";

export default {
  name: "Login",
  components: {
    LoginCriar
  },
  data() {
    return {
      login: {
        email: "",
        senha: ""
      },
      erros: [],
      isSubmitted: false,
    };
  },
  validations: {
    login: {
      email: { required },
      senha: { required },
    },
  },
  methods: {
    async logar() {
      this.isSubmitted = true;
      this.erros = [];

      this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }


      await this.$store
        .dispatch("logarUsuario", this.login)
        .then(response => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch(error => {
          this.erros.push(error.response.data.message);
          swal({
            title: 'Usuário ou senha incorreta!',
            text: 'Digite usuário e senha cadastrada!',
            icon: 'error',
          });
        });
    }
  }
};
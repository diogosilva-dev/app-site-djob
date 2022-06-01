import { mapFields } from "@/helpers.js";
import { getCep } from "@/services/BuscaCep";
import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';

export default {
  data(){
    return {
      isSubmitted: false,
    }
  },
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "rua",
        "cep",
        "numero",
        "bairro",
        "cidade",
        "estado"
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO"
    }),
    mostrarDadosLogin() {
      return !this.$store.state.login || this.$route.name === "usuario-editar";
    }
  },
  validations: {
    nome : { required },
    email : { required },
    senha : { required },
    rua : { required },
    cep : { required },
    numero : { required },
    bairro : { required },
    cidade : { required },
    estado : { required }
  },
  methods: {
    async validarForm(){
      try {
        this.isSubmitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          swal({
            title: 'Oops!',
            text: 'Você precisa incluir todos os campos obrigatórios!',
            icon: 'error',
          });
          return;
        }
      } catch (error) {
        swal({
          title: 'Usuário ou senha incorreta!',
          text: 'Digite usuário e senha cadastrada!',
          icon: 'error',
        });
      }
    },
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then(response => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.estado = response.data.uf;
          this.cidade = response.data.localidade;
        });
      }
    }
  }
};
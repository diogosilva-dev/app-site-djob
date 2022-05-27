import swal from 'sweetalert';
import { minLength, required } from 'vuelidate/lib/validators';
import RegisterService from '@/services/RegisterService';

export default {
  name: 'RegisterComponent',
  data() {
    return {
      registerForm: {
        email: null,
        senha: null,
        nome: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    registerForm: {
      nome: {required},
      email: {required},
      senha: { required, minLength: minLength(6) },
    },
  },
  methods: {
    registerSubmitUserForm() {},

    async submitRegisterUser() {
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
        await RegisterService.registerNewUser(this.registerForm);
        console.log('registrou', this.registerForm);
        this.$router.push('/homeUser');
      } catch (error) {
        swal({
          title: 'Oops!',
          text: 'Alguma coisa deu errado aqui! no register',
          icon: 'error',
        });
      }
    },
  },
};

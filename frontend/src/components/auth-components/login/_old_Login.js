import swal from 'sweetalert';
import { required } from 'vuelidate/lib/validators';
import LoginService from '@/services/LoginService';

export default {
  name: 'LoginComponent',
  data() {
    return {
      loginForm: {
        username: null,
        password: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    loginForm: {
      username: { required },
      password: { required },
    },
  },
  methods: {
    loginSubmitUserForm() {},

    async submitLoginUser() {
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

        await LoginService.loginUser(this.loginForm);
        this.$router.push('/homeUser');
      } catch (error) {
        swal({
          title: 'Usuário ou senha incorreta!',
          text: 'Digite usuário e senha cadastrada!',
          icon: 'error',
        });
      }
    },
  },
};

import VueJwtDEcode from 'vue-jwt-decode';
import Api from '../../../services/Api';

export default {
  name: 'HomeComponent',
  data() {
    return {
      formUser: {
        name: '',
        email: '',
      },
    };
  },
  methods: {
    getUser() {
      const token = localStorage.getItem('jwt');
      const tokenDecode = VueJwtDEcode.decode(token);
      this.formUser = tokenDecode;
    },
    logOutUser() {
      localStorage.removeItem('jwt');
      this.$router.push('/');
    },
  },
  created() {
    this.getUser();
  },
};

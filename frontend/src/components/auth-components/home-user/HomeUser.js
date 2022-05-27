import { api } from '@/services/Api';

export default {
  name: 'HomeUserComponent',
  data() {
    return {
      formUser: {
        name: '',
        email: '',
      },
    };
  },
  methods: {
    async getUser() {
      const response = await api.get('/usuario')
      console.log(response);
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

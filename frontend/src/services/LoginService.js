import swal from 'sweetalert';
import { api } from './Api';

export default {
  /**
    * Método responsável por criar um novo Registro de Usuário (new Register User)
    * (POST): localhost:3000/api/v1/register
    */
  async loginUser(user) {
    try {
      const response = await api.post('/login', user);
      const { token } = response.data;
      localStorage.setItem('jwt', token);
      if (token) {
        swal({
          title: 'Excelente!',
          text: 'Usuário(a) logado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Erro ao logar no sistema',
        icon: 'error',
      });
      this.$router.push('/');
    }
  },
};

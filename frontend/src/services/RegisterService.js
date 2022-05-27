import swal from 'sweetalert';
import { api } from './Api';

export default {
  async registerNewUser(newUser) {
    try {
      const response = await api.post('/usuario', newUser);
      console.log('resposta', response);
      const { token } = response.data;
      if (token) {
        localStorage.setItem('jwt', token);
        swal({
          title: 'Excelente!',
          text: 'Usuário(a) cadastrado com sucesso!',
          icon: 'success',
        });
      }
    } catch (error) {
      swal({
        title: 'Oops!',
        text: 'Alguma coisa deu errado aqui no register service!',
        icon: 'error',
      });
    }
  },
};

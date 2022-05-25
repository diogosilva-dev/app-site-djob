export default {
    name: 'BuscarComponent',
    data() {
      return {
        busca:""
      };
    },
    methods: {
        buscarProdutos(){
            this.$router.push({query: {q: this.busca}})
        },
    } 
  };
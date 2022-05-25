import { api } from '@/services/Api';
import { serialize } from '@/helpers.js'
import Paginacao from '@/components/navigation-components/paginacao/PaginacaoComponent.vue'

export default {
    name: 'ProdutosComponent',
    components:{
      Paginacao
    },
    data() {
      return {
        produtos: null,
        produtosPorPagina: 2,
        produtosTotal: 0,
      };
    },
    methods:{
      getProdutos(){
          api.get('/products')
          .then(response => {
              this.produtosTotal = Number(response.headers["x-total-count"])
              this.produtos = response.data
          })
      }
  },

  computed:{
    url(){
      const query = serialize(this.$route.query)
      return `/produtos?_limit=${this.produtosPorPagina}${query}`
    }
  },

  watch:{
      url(){
          this.getProdutos()
      }
  },

  created(){
      this.getProdutos()
  }
}
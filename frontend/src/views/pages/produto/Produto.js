import { api } from "@/services/Api.js";
import FinalizarCompra from "@/components/navigation-components/finalizar-compra/FinalizarCompraComponent.vue";

export default {
  name: "Produtos",
  props: ["id"],
  components: {
    FinalizarCompra
  },
  data() {
    return {
      produto: null,
      finalizar: false
    };
  },
  methods: {
    getProduto() {
      api.get(`/produto/${this.id}`).then(response => {
        this.produto = response.data;
      });
    }
  },
  created() {
    this.getProduto();
  }
};
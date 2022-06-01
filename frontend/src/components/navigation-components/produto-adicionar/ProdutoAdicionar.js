import { api } from "@/services/Api.js";

export default {
  name: "ProdutoAdicionar",
  data() {
    return {
      produto: {
        referenciaProduto: "",
        tituloProduto: "",
        descricaoProduto: "",
        valorProduto: "",
        fotos: null,
        vendido: "false"
      }
    };
  },
  methods: {
    formatarProduto() {
      const form = new FormData();

      const files = this.$refs.fotos.files;
      for (let i = 0; i < files.length; i++) {
        form.append(files[i].name, files[i]);
      }
      
      form.append("referenciaProduto", this.produto.referenciaProduto);
      form.append("tituloProduto", this.produto.tituloProduto);
      form.append("descricaoProduto", this.produto.descricaoProduto);
      form.append("valorProduto", this.produto.valorProduto);
      form.append("vendido", this.produto.vendido = false);
      form.append("usuario_id", this.$store.state.usuario.id);

      return form;
    },
    async adicionarProduto(event) {
      const produto = this.formatarProduto();
      console.log(produto);

      const button = event.currentTarget;
      button.value = "Adicionando...";
      button.setAttribute("disabled", "");

      await api.post("/produto", produto);
      await this.$store.dispatch("getUsuarioProdutos");

      button.removeAttribute("disabled");
      button.value = "Adicionar Produto";
    }
  }
};
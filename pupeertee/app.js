const app = {
    data(){
        return{
            busca: ""
        }
    },
    methods:{
        buscarProdutos(){
           // this.$router.push({query:{q: this.busca}})
        }
    }
};

Vue.createApp(app).mount('#app')
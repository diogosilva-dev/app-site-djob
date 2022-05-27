export default {
    props:{
        produtosPorPagina:{
            type: Number,
            default: 1
        },
        produtosTotal:{
            type: Number,
            default: 1
        }
    },
    methods:{
        paginas(){
            const paginaAtual = Number(this.$route.query._page)
            const range = 9
            const offset = Math.ceil(range / 2)
            const total = this.paginasTotal
            const pagesArray = []

            for(let i = 1; i <= total; i++){
                pagesArray.push(i)
            }
            pagesArray.splice(0, paginaAtual - offset)
            pagesArray.splice(range, total)

            return pagesArray

        },
        query(pagina){
            return{
                ...this.$route.query,
                _page: pagina
            }
        }
    },
    computed:{
        paginasTotal(){
            const total = this.produtosTotal / this.produtosPorPagina
            return (total !== Infinity) ? Math.ceil(total) : 0;
        }
    },
}
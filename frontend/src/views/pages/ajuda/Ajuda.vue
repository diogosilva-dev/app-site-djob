<template>
<div class="content">
    <h1>PERGUNTAS FREQUENTES</h1>
    <p>Encontre facilmente as respostas para nossas perguntas mais frequentes.</p>
    <div class="main">
        <section>
            <article>
                <h3>Produtos</h3>
                <router-link to="">Como faço para encontrar o produto que estou procurando?</router-link>
                <router-link to="">O que posso fazer se o produto chegar danificado ou defeituoso?</router-link>
                <router-link to="">Porque produtos do mesmo modelo podem ter preços diferentes?</router-link>
                <router-link to="">Posso personalizar os produtos Nike?</router-link>
                <router-link to="">Como posso lavar os produtos produzidos pela D.JOB?</router-link>
                <router-link to="">Como eu posso encontrar um produto que não está disponível na loja online D.JOB?</router-link>
            </article>
        </section>
        <section>
            <article>
                <h3>Pagamentos</h3>
                <router-link to="">Quais são as opções de pagamento disponíveis na D.JOB?</router-link>
                <router-link to="">Posso pagar meu pedido com dois cartões?</router-link>
                <router-link to="">Porque produtos do mesmo modelo podem ter preços diferentes?</router-link>
                <router-link to="">Qual o prazo de aprovação do meu pedido?</router-link>
                <router-link to="">Meu boleto venceu. Como devo proceder?</router-link>
            </article>
        </section>
        <section>
            <article>
                <h3>Corporativo</h3>
                <router-link to="">Posso usar materiais de propaganda da D.JOB, como por exemplo imagens, logos ou marca?</router-link>
                <router-link to="">Posso pagar meu pedido com dois cartões?</router-link>
                <router-link to="">Atualização das Políticas de Privacidade e Termos de Uso para a D.JOB</router-link>
                <router-link to="">Qual o prazo de aprovação do meu pedido?</router-link>
                <router-link to="">Meu boleto venceu. Como devo proceder?</router-link>
            </article>
        </section>
        <section>
            <article>
                <h3>Dúvidas Gerais</h3>
                <router-link to="">Como posso utilizar o meu cupom de descontos?</router-link>
                <router-link to="">Como posso excluir os endereços cadastrados em minha conta?</router-link>
                <router-link to="">Como faço para receber novidades e promoções da D.JOB?</router-link>
                <router-link to="">Não lembro o e-mail da minha conta. Como devo proceder?</router-link>
                <router-link to="">Como realizar uma compra na D.JOB?</router-link>
                <router-link to="">Como solicito a segunda via do DANFE (Documento Auxiliar da Nota Fiscal Eletrônica)?</router-link>
                <router-link to="">Não lembro a senha da minha conta. Como devo proceder?</router-link>
            </article>
        </section>
        <section>
            <article>
                <h3>Encontre seu Tamanho</h3>
                <router-link to="">Feminino</router-link>
                <router-link to="">Masculino</router-link>
                <router-link to="">Unissex</router-link>
                <router-link to="">Infantil</router-link>
                <router-link to="">Como identificar o meu tamanho</router-link>
            </article>
        </section>
        <section>
            <article>
                <h3>Serviços</h3>
                <router-link to="">Suporte a Vendas</router-link>
            </article>
        </section>
        <section>
            <article>
                <h3>Termos de Serviço</h3>
                <router-link to="">Termos de Serviço</router-link>
            </article>
        </section>
        <section>
            <article>
                <h3>Política de Privacidade</h3>
                <router-link to="">Política de Privacidade</router-link>
            </article>
        </section>
    </div>
    <NaoEncontrouComponent />
</div>
</template>
<script>
import NaoEncontrouComponent from "@/components/navigation-components/nao-encontrou/NaoEncontrouComponent.vue"

export default {
    name: 'Ajuda',
    data(){
        return {

        };
    },
    components:{
        NaoEncontrouComponent
    },
    methods: {
    },
}
</script>
<style scoped>
    .content{
        margin: 50px;
        display: grid;
        justify-items: center;
    }

    .main{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 40px;
        margin: 50px 20px;
        max-width: 1400px;
    }
        a{
        display: flex;
        margin: 10px 0;
        color: gray;
    }

    a:hover{
        color: #000;
    }
</style>
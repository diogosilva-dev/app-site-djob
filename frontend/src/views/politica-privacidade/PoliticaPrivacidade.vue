<template>
<div>
    <div class="content">
       <h1>Política de privacidade</h1>
       <p>
           A Política de Privacidade Online foi criada
           para reafirmar o nosso compromisso com a sua
           segurança e privacidade. Como esta política pode
           ser atualizada, recomendamos que ela seja consultada
           periodicamente. Você pode visitar nosso site e
           conhecer os produtos, conferir nossas promoções, ler
           matérias e textos em geral, sem precisar fornecer nenhuma
           informação pessoal. Mas, caso exista essa necessidade, esta
           política procura esclarecer como coletamos e tratamos seus dados.
        </p>
        <p>
            1. Qualquer informação fornecida pelos usuários será coletada e
            guardada de acordo com os mais rígidos padrões de segurança e confiabilidade;
        </p>
        <p>
            2. Todas as informações coletadas dos usuários trafegam utilizando
            processo de criptografia padrão da Internet;
        </p>
        <p>
            3. As informações pessoais que nos forem fornecidas pelos usuários serão
            coletadas por meios éticos e legais. Essa coleta poderá ter um ou mais propósitos,
            sobre os quais nossos usuários serão informados;
        </p>
        <p>
            4. Os usuários serão avisados sobre a coleta dos dados e sobre as consequências
            de sua decisão, ficando ao seu critério fornecê-los ou não;
        </p>
        <p>
            5. A menos que tenhamos determinação legal ou judicial, as informações dos usuários
            jamais serão transferidas a terceiros ou usadas para finalidades diferentes daquelas
            para as quais foram coletadas;
        </p>
        <p>
            6. O acesso às informações coletadas está restrito a funcionários autorizados, para o
            uso adequado desses dados. Os funcionários que se utilizarem indevidamente dessas informações,
            ferindo nossa Política de Privacidade, estarão sujeitos às penalidades previstas em
            nosso processo disciplinar;
        </p>
        <p>
            7. Manteremos a integridade das informações que nos forem fornecidas;
        </p>
        <p>
            8. Nossos sites contêm links para outros sites externos, cujos conteúdos e políticas de
            privacidade não são de responsabilidade da Newmission. Nós não temos acesso às
            informações coletadas por "cookies" (*) presentes nesses sites;
        </p>
        <p>
            9. Será exigida, de toda organização contratada para prover serviços de apoio,
            o cumprimento aos nossos padrões de privacidade e segurança da informação;
        </p>
        <p>
            10. Para fins de operações de crédito e gerenciamento de riscos, poderemos trocar
            informações sobre nossos clientes com fontes respeitáveis de referência,
            órgãos reguladores e serviços de compensação;
        </p>
        <p>
            11. Eventualmente, poderemos utilizar cookies (*) para confirmar identidade do cliente,
            personalizar o acesso e acompanhar a utilização de nosso website, visando o
            aprimoramento da navegação e funcionalidade;
        </p>
        <p>
            12. Colocamos à disposição de nossos usuários canais de atendimento ao cliente,
            para esclarecer qualquer dúvida que possa surgir;
        </p>
        <p>
            (*)Cookies não armazenam informações pessoais sem que o usuário as tenha
            fornecido e não coletam informações registradas em seu computador.
        </p>
        <p>
            A maioria dos browsers possibilita que o usuário, a qualquer instante, ative
            mecanismos para informá-lo quando os cookies estiverem acionados, ou para
            evitar seu acionamento, embora isso possa afetar a utilização de algumas funções dos sites.
        </p>
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
    }
}
</script>


<style scoped>
div{
    display: grid;
    justify-content: center;
}
 .content{
        margin: 50px;
        display: grid;
        max-width: 1400px;
    }
    h1{
        margin: 20px 0;
        text-transform: uppercase;
        text-align: center;
    }
    p{
        margin: 20px;
        text-align: left;
    }
</style>
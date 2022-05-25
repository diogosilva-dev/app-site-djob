<template>
    <div class="content">
        <section class="historia">
            <article>
                <h1>“Simples é o melhor”, <br> dizem. De fato, é!</h1>
                <p>
                    Na DJOB, colocamos uma forte ênfase na simplicidade,
                    qualidade e utilidade dos produtos sobre outros fatores.
                    Nossos itens nunca ficam desatualizados. Eles não são de
                    curta duração. Além disso, com mais de 8 anos de atuação
                    neste campo, nossa equipe sabe melhor o que nossos clientes
                    estão procurando e traz exatamente o que eles precisam com estilo.
                </p>
            </article>
        </section>
        <section>
            <article class="razoes">
                <h1><span>5</span> razões para você escolher a D.JOB</h1>
                <div class="razoes-content">
                    <div>
                        <div class="icon-geral">
                            <mdicon class="icon" name="TruckFastOutline" />
                            <h1>01</h1>
                        </div>
                        <h2>Entrega rápida</h2>
                        <p>Entregamos em todo território nacional independete da quantidade</p>
                    </div>
                    <div>
                        <div class="icon-geral">
                            <mdicon class="icon" name="CheckDecagramOutline" />
                            <h1>02</h1>
                        </div>
                        <h2>Qualidade garantida</h2>
                        <p>Controle de qualidade do inicio ao fim, verificação em cada etapa da produção</p>
                    </div>
                    <div>
                        <div class="icon-geral">
                            <mdicon class="icon" name="History" />
                            <h1>03</h1>
                        </div>
                        <h2>Tempo no seu tempo</h2>
                        <p>O seu tempo é a nossa previsão, fazemos de tudo para que seu produto seja produzido no menor prazo possível</p>
                    </div>
                    <div>
                        <div class="icon-geral">
                            <mdicon class="icon" name="CheckboxMarkedCirclePlusOutline" />
                            <h1>04</h1>
                        </div>
                        <h2>Quantidade faz diferença!</h2>
                        <p>Contamos com mais de 3 mil produtos em nosso catálogo, de caneta a relógios com cristais, de camisetas a Blazer’s finos</p>
                    </div>
                    <div>
                        <div class="icon-geral">
                            <mdicon class="icon" name="StarCogOutline" />
                            <h1>05</h1>
                        </div>
                        <h2>Atendimento personalizado</h2>
                        <p>Tentamos sempre atender cada cliente de uma forma diferenciada, fazendo sempre o possível para atender melhor suas necessidades</p>
                    </div>
                </div>
            </article>
        </section>
        <section class="carinho">
            <article>
                <div class="titulo">
                    <h1>Atendemos você com o mesmo carinho<br>
                        que cuidamos da nossa empresa.
                    </h1>
                    <mdicon class="icon" name="CardsHeartOutline" />
                </div>
                <div class="fotos">
                   <div class="foto-vivi">
                       <legend>
                            <span>Viviane Rocha</span><br>
                            Diretora de Atendimento<br><br>
                            vivianerocha@djob.com.br
                       </legend>
                   </div>
                   <div class="foto-diogo">
                       <legend>
                            <span>Diogo Silva</span><br>
                            Diretor geral de negócios<br><br>
                            diogosilva@djob.com.br
                       </legend>
                   </div>
                </div>
            </article>
        </section>
        <section class="clientes">
            <article>
                <div class="titulo">
                    <h1>Com orgulho que temos dos nossos clientes,<br>
                        fazemos questão de mostra-los aqui.
                    </h1>
                    <mdicon class="icon" name="StarOutline" />
                </div>
                <div class="clientes-logos">
                    <img  v-for="cliente in clientes" :key="cliente.nome" :src="cliente.url" :alt="cliente.nomeCliente">
                </div>
            </article>
        </section>
    </div>
</template>

<script src="./Sobre.js"></script>

<style scoped>


.clientes .titulo{
    padding: 50px;
    position: relative;
}

.clientes .titulo h1{
    text-align: right;
}

.clientes .titulo .mdi > svg{
    width: 300px;
    height: 300px;
    color: #548F98;
}

.clientes .titulo .icon{
    position: absolute;
    top: -100px;
    left: -10px;
}

.clientes-logos{
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    padding: 50px;
    align-items: center;
    grid-gap: 50px;
}

.carinho,
.clientes{
    margin: 0 20px;  
}

.carinho .titulo{
    background-color: #EC5466;
    padding: 50px;
    position: relative;
}

.carinho .fotos{
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 500px;
}

.carinho .titulo .icon{
    position: absolute;
    top: -60px;
    right: -10px;
}

.carinho .titulo .mdi > svg{
    width: 300px;
    height: 300px;
}

.carinho .titulo h1{
    color: #fff;
}

.foto-vivi{
    background-image: url('@/assets/images-sobre/foto-vivi.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0 0 20px 0;
}

.foto-diogo{
    background-image: url('@/assets/images-sobre/foto-diogo.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0 0 20px 0;
}

legend{
    background-color: #EC5466;
    padding: 20px;
    color: #fff;
    font-weight: 300;
}

legend span{
    font-weight: bold;
}

.historia{
    overflow: hidden;
    margin: -40px 20px 0 20px;
    background-image: url('@/assets/images-sobre/01.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
}

.historia article{
    background-color: #548F98;
    width: 500px;
    padding: 40px;
    margin: 40px;
    border-radius: 10px;
    color: #fff;
}

.historia article h1{
    color:#fff;
    margin-bottom: 10px;
}
.historia p{
    color: #fff;
}

.razoes{
    text-align: center;
    background-color: #548F98;
    margin: 0 20px;
    padding: 50px;
}

.razoes-content{
    display: flex;
    column-gap: 40px;
}

.razoes h1{
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.razoes h2,
.razoes p{
    color: #fff;
}

.razoes h1 span{
    font-size: 50px;
    margin-right: 10px;
}


.icon-geral{
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-geral h1{
    font-size: 80px;
    margin-right: 10px;
    color: #AAC7CC;
    margin-left: -20px;
}

.icon{
    z-index: 9;
}

.mdi>svg{
    color: #fff;
    width: 50px;
    height: 50px;
}

@media (max-width: 1200px)
{
    .clientes-logos{
        display: grid;
        grid-template-columns: repeat(5 ,1fr);
        padding: 50px;
        align-items: center;
        grid-gap: 50px;
    }

}
    
</style>
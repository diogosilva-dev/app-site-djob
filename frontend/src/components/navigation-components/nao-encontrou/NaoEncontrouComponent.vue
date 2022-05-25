<template>
    <div class="content-nao-encontrou">
        <div class="form-duvidas">
            <h1>NÃO ENCONTROU O QUE PROCURAVA?</h1>
            <form>
                <input type="text" placeholder="Nome completo">
                <input type="email" placeholder="E-mail">
                <input type="phone" placeholder="Telefone para contato">
                <textarea placeholder="Conte-nos a sua dúvida"></textarea>
                <button>ENVIAR</button>
            </form>
        </div>
        <div class="receba-novidades">
            <mdicon class="icon" name="EmailEditOutline" />
            <h1>RECEBA AS NOVIDADES DA D.JOB</h1>
            <h3>Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.</h3>
            <button @click="$router.push('/register')">CADASTRE-SE</button>
        </div>
    </div>
</template>

<script src="./NaoEncontrou.js"></script>

<style scoped>
.content-nao-encontrou{
    display: grid;
    margin: 50px 20px;
    max-width: 1400px;
    justify-items: center;
}
.form-duvidas h1{
        margin: 40px 0;
    }

    .form-duvidas button{
        margin-top: 10px;
    }

    h3{
        color: gray;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    a{
        display: flex;
        margin: 10px 0;
        color: gray;
    }

    a:hover{
        color: #000;
    }

    .form-duvidas,
    .receba-novidades{
        text-align: center;
        max-width: 600px;
        margin-bottom: 40px;
    }

    .mdi > svg{
        width: 80px;
        height: 80px;
        margin: 20px;
        color: #548F98;
    }
</style>
<template>
    <section class="newslatter">
        <div class="form-newslatter">
            <button class="close" @click="fecharNewslatter">X</button>
            <mdicon class="icon" name="EmailEditOutline" />
            <h1>Assine nossa newslater e fique por dentro dos lançamentos e descontos</h1>
            <input type="email" placeholder="E-mail">
            <button class="enviar">ENVIAR</button>
            <p class="center">
              Não tem uma conta cadastrada?<router-link to="/register">
                Junte-se a nós</router-link
              >
            </p>
        </div>
    </section>
</template>

<script src="./Newslatter.js"></script>

<style scoped>
.center{
    margin: 10px 0;
}

  p{
    font-size: 14px;
    margin: 10px;
  }

    a{
    text-decoration: underline;
    font-weight: bold;
    color: #666;
    transition: all 0.5s;
  }

  
.newslatter{
    position: absolute;
    display: grid;
    width: 100%;
    height: 100vh;
    background-color: #548f98e8;
    z-index: 999;
    top: 0;
    left: 0;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s;
}

.form-newslatter{
    width: 600px;
    height: 400px;
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0px 7px 14px 1px #375559;
    text-align: center;
}

input,
button{
    width: 80%;
}

.close{
    position: relative;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 100px;
    color: #0078a8;
    font-weight: bold;
    cursor: pointer;
    top: -105px;
    right: -330px;
    box-shadow: 0px 2px 4px 0px #375559;
    padding: 0;
}

.mdi > svg{
    width: 50px;
    height: 50px;
    color: #548f98e8;
    margin-bottom: 20px;
}
</style>
<template>
    <header key="header">
        <div class="header-superior" key="header-superior">
            <p>FRETE GRÁTIS PARA O DF EM TODOS OS PEDIDOS ACIMA DE R$ 500</p>
            <div class="redes-sociais">
                <a href=" https://wa.me/5561998148954?text=Olá,%20fui%20redirecionado(a)%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
                    alt="whatsapp"
                    target="_blank">
                    <mdicon class="icon" name="Whatsapp" />
                </a>
                <a href="mailto: comercial@djob.com.br"
                    alt="email"
                    target="_blank">
                    <mdicon class="icon" name="EmailMarkAsUnread" />
                </a>
                    <a href="https://www.facebook.com/djobtextil"
                    alt="facebook"
                    target="_blank">
                    <mdicon class="icon" name="Facebook" />
                </a>
                    <a href="https://www.instagram.com/djobtextil/"
                    alt="instagran"
                    target="_blank">
                    <mdicon class="icon" name="Instagram" />
                </a>
                    <a href="https://www.linkedin.com/in/diogo-silva-174b36213/"
                    alt="linkedin"
                    target="_blank">
                    <mdicon class="icon" name="Linkedin" />
                </a>
                <a href="tel:+556135349139"
                    alt="telefone"
                    target="_blank">
                    <mdicon class="icon" name="PhoneInTalk" />
                </a>
            </div>
    
            <div class="btns-contatos" key="btn-contatos">
                <a @click="handleClick">NEWSLATTER</a>
                <router-link to="/contato">CONTATO</router-link>
                <router-link to="/ajuda">AJUDA</router-link>
            </div>
        </div>
        <div class="header-centro" key="header-centro">
            <BuscarComponent class="search-bar" />
            <NewslatterComponent ref="NewslatterComponent"/>
            <div class="btns-conta">
                <router-link to="/login"><mdicon class="icon" name="AccountLockOpenOutline" /></router-link>
                <router-link to="/"><mdicon class="icon" name="BookHeartOutline" /></router-link>
                <router-link to="/"><mdicon class="icon" name="CartHeart" /> </router-link>
            </div>
        </div>
        <div class="detalhe-header" key="detalhe-header">
            <router-link to="/" class="logo"><img src="@/assets/logo-djob.svg" alt="Logo Djob"></router-link>
        </div>
    </header>
</template>

<script src="./Header.js"></script>

<style scoped>

header{
    font-size: 12px;
    border-radius: 10px;
    margin: 20px;
    overflow: hidden;
}

.header-superior{
    display: grid;
    width: 100%;
    height: 40px;
    background-color: #548F98;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    text-align: center;
}

p{
    color: #fff;
}

.redes-sociais{
    justify-self: right;
    margin-right: 10px;
}

.redes-sociais .mdi > svg{
    width: 20px;
    height: 20px;
    margin: 5px;
    color: #fff;
}


.btns-contatos a{
    border-left: 0.5px solid #fff;
    color: #fff;
    padding: 10px;
    height: 40px;
    box-sizing: border-box;
}

.btns-contatos a:last-child{
    border-right: 0.5px solid #fff;
}

.header-centro{
    display: grid;
    width: 100%;
    height: 100px;
    background-color: #6DADB7;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    border-bottom: 20px solid #548F98;
    box-sizing: content-box;
}

.btns-conta{
    grid-column-start: 3;
}

.logo{
    width: 150px;
    position: absolute;
    top: -65px;
    right: 0;
    left: 0;
    margin: 0 auto;
}


.btns-conta a{
    margin: 0 20px;
}

.btns-conta .mdi > svg{
    width: 30px;
    height: 30px;
    color: #fff;
}

.detalhe-header{
    position: relative;
    width: 200px;
    height: 40px;
    margin: -20px auto 0 auto;
    background-color: #6DADB7;
    border-radius: 0 0 20px 20px;
    z-index: 2;
}

.detalhe-header::before {
    content: "";
    position: absolute;
    background-color: #548F98;
    height: 20px;
    width: 50px;
    left: -50px;
    border-top-right-radius: 25px;
    box-shadow: 25px 0 0 0 #6DADB7;
}

.detalhe-header::after {
    content: "";
    position: absolute;
    background-color: #548F98;
    height: 20px;
    width: 50px;
    left: 200px;
    border-top-left-radius: 25px;
    box-shadow: -25px 0 0 0 #6DADB7;
}

a{
    cursor: pointer;
}


</style>

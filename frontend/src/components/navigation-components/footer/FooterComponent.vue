<template>
    <footer class="footer">
        <div class="uteis">
            <h2>ÚTEIS</h2>
            <div class="line"></div>
            <router-link to="/sobre">Sobre a D.JOB</router-link>
            <router-link to="/revendedor">Seja um revendedor</router-link>
            <router-link to="/politica-privacidade">Política de privacidade</router-link>
            <router-link to="/ajuda">Ajuda</router-link>
        </div>
        <div class="contato">
            <h2>CONTATO</h2>
            <div class="line"></div>
            <router-link to="">
                <mdicon class="icon" name="MapMarker" />
                Rua 02, módulo 07, lote 10,
                condomínio Privê, Ceilândia-DF    
            </router-link>
            <a href=" https://wa.me/5561998148954?text=Olá,%20fui%20redirecionado(a)%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
                alt="whatsapp"
                target="_blank">
                <mdicon class="icon" name="Whatsapp" />
                61 99814-8954
            </a>
            <a href="tel:+556135349139"
                alt="telefone"
                target="_blank">
                <mdicon class="icon" name="PhoneInTalk" />
                61 3534-9139
            </a>
            <a href="mailto: comercial@djob.com.br"
                alt="email"
                target="_blank">
                <mdicon class="icon" name="EmailMarkAsUnread" />
                comercial@djob.com.br
            </a>
        </div>
        <div class="formas-pagamentos">
            <h2>PAGAMENTOS</h2>
            <div class="line"></div>
            <div class="cartoes">
                <div><img src="@/assets/images-footer/visa.jpg" alt="cartão visa"></div>
                <div><img src="@/assets/images-footer/mastercard.jpg" alt="cartão mastercard"></div>
                <div><img src="@/assets/images-footer/elo.jpg" alt="cartão elo"></div>
                <div><img src="@/assets/images-footer/bancobrasil.jpg" alt="banco do brasil"></div>
                <div><img src="@/assets/images-footer/boleto.jpg" alt="boleto"></div>
            </div>
            <div><img src="@/assets/images-footer/pagseguro.jpg" alt="pagseguro"></div>
        </div>
        <div class="sociais">
            <h2>REDES SOCIAIS</h2>
            <div class="line"></div>
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
        </div>
    </footer>   
</template>

<script src="./Footer.js"></script>

<style scoped>
    h2{
        color: #fff;
    }

    .footer{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        background-color: #548F98;
        border-top: 5px solid #EC5466;
        color: #fff;
        padding: 40px;
        margin: 20px;
        border-radius: 0 0 20px 20px;
    }

    .footer a{
        color: #fff;
    }

    .uteis,
    .contato{
        display: flex;
        flex-direction: column;
    }

    .uteis a,
    .contato a{
        margin: 10px 0;
    }

    .formas-pagamentos div{
        border-radius: 8px;
        overflow: hidden;
    }

    .cartoes{
        display: flex;
    }

    .cartoes div{
        margin: 5px;
    }

    .line{
        width: 100%;
        border-top: solid 1px #fff;
        margin: 10px 0;
    }

    .sociais a{
        margin: 0 10px;
    }
</style>
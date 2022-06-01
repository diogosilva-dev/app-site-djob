  <template>
  <div class="content">
    <div class="map">
        <l-map
        v-if="showMap"
        :zoom="zoom"
        :center="center"
        :options="{scrollWheelZoom: false}"
        style="height: 80%"
        @update:center="centerUpdate"
        @update:zoom="zoomUpdate"
        >
        <l-tile-layer
            :url="url"
            :attribution="attribution"
        />
        <l-marker :lat-lng="withPopup">
            <l-popup>
            <div>
                Rua 02,
                Módulo 07,
                Lote 10,
                <br>
                Cond. Privê -
                Ceilândia/DF
                <br>
                CEP: 72280-164
            </div>
            </l-popup>
        </l-marker>
        </l-map>
    </div>
    <div class="main">
        <div>
            <h1>CONTATO</h1>
            <p>Sentimos imenso prazer em ter você em nosso site. Conte-nos sobre o que precisa e tiraremos todas suas dúvidas.
            </p>
        </div>
        <form>
            <label for="nome">
                <input type="text" id="nome" placeholder="Nome:" autocomplete="on">
            </label>
            <label for="e-mail">
                <input type="email" id="e-mail" placeholder="E-mail::" autocomplete="on">
            </label>
            <label for="telefone">
                <input type="tel" id="telefone" placeholder="Telefone:" autocomplete="on">
            </label>
            <label for="mensagem">
                <textarea type="text" id="mensagem" placeholder="Menssagem:"></textarea>
            </label>
            <button>ENVIAR</button>
        </form>
        <div class="dados">
            <div class="dados-intrerna">
                <mdicon class="icon" name="MapMarker" />
                <div>
                    <h4>ENDEREÇO</h4>
                     <div class="line"></div>
                    <p>
                        Rua 02, módulo 07, lote 10,
                        <br>
                        Condomínio Privê - Ceilândia/DF
                    </p>
                </div>
            </div>
            <div class="dados-intrerna">
                <mdicon class="icon" name="PhoneInTalk" />
                <div>
                    <h4>TELEFONES</h4>
                     <div class="line"></div>
                    <p>61 3435-9139<br>61 998148954</p>
                </div>
            </div>
            <div class="dados-intrerna">
                <mdicon class="icon" name="EmailFast" />
                <div>
                    <h4>EMAIL</h4>
                     <div class="line"></div>
                    <p>comercial@djob.com.br</p>
                </div>
            </div>
            <div class="dados-intrerna">
                <mdicon class="icon" name="CalendarRange" />
                <div>
                    <h4>FUNCIONAMENTO</h4>
                    <div class="line"></div>
                    <p>Segunda a Sexta-feira<br>8h às 18h</p>
                </div>
            </div>
            <div class="sociais">
                <a href=" https://wa.me/5561998148954?text=Olá,%20fui%20redirecionado(a)%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
                    alt="whatsapp"
                    target="_blank">
                    <mdicon class="icon" name="Whatsapp" />
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
            </div>
        </div>
    </div>
</div>
</template>

<script src="./Contato.js"></script>  

<style scoped>
 .map{
    height: 500px;
    margin: -40px 20px 40px 20px;
 }

 .vue2leaflet-map{
     z-index: 1;
 }

 .main{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 4fr;
    grid-gap: 40px;
    justify-content: center;
    align-items: center;
    margin: -100px 20% 100px 20%;
 }

 .main div:first-child{
     grid-column-start: 1;
     grid-column-end: 3;
     grid-row-start: 1;
     grid-row-end: 2;
 }

textarea{
    height: 150px;
}


.dados-intrerna{
    display: grid;
    grid-template-columns: 50px 1fr;
    margin-bottom: 20px;
}

.mdi > svg{
    color: #6DADB7;
    margin-right: 10px;
    width: 40px;
    height: 40px;
}

h2{
    color: #6DADB7;
    font-weight: bold;
}

.line{
    width: 100%;
    border-bottom: #6DADB7 solid 1px;
    margin: 5px;
}

.sociais{
    text-align: center;
}
</style>
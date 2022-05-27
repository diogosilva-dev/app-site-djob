<template>
  <div id="app">
    <HeaderComponent v-if="$route.path !== '/login' && $route.path !== '/register'"/>
    <router-view></router-view>
    <FooterComponent v-if="$route.path !== '/login' && $route.path !== '/register'"/>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/navigation-components/header/HeaderComponent.vue";
  import FooterComponent from '@/components/navigation-components/footer/FooterComponent.vue';
  import 'vueperslides/dist/vueperslides.css'
  import { api } from "@/services/Api.js";
  
  export default {
    data(){
      return{
        show: true
      }
    },
    components:{
      HeaderComponent,
      FooterComponent
    },
    created() {
      if (window.localStorage.token) {
        api
          .validateToken()
          .then(() => {
            this.$store.dispatch("getUsuario");
          })
          .catch(() => {
            window.localStorage.removeItem("token");
          });
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600&display=swap');
  

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  body {
    background-color: #F4F4F4;
  }

  textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 


 ul, li, h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    padding: 0;
  }

  h1,
  .swal-title{
    font-size: 22px;
    font-weight: bold;
    color: #6DADB7;
  }

  h2{
    font-size: 20px;
    color: #6DADB7;
  }

  h3{
    font-size: 18px;
    color: #6DADB7;
  }

  h4{
    font-size: 16px;
    color: #6DADB7;
  }
  
  h5{
    font-size: 14px;
    color: #6DADB7;
  }
  
  h6{
    font-size: 12px;
    color: #6DADB7;
  }

  p,
  .swal-text{
    font-size: 18px;
    font-weight: 300;
    color: gray;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    max-width: 100%;
    display: block;
  }

.vueperslides__arrow,
.vueperslides__bullet,
.vueperslides__bullet:hover,
.vueperslides__arrow:hover {
    background-color: transparent;
    border: none;
    width: inherit;
    box-shadow: none;;
}


  .swal-button,
  button{
    font-size: 16px;
    color: #fff;
    padding: 15px 40px;
    background-color: #6DADB7;
    border-radius: 8px;
    text-transform: uppercase;
    border: none;
    box-shadow: 1px 1px 4px 0px #98bdc2;
    cursor: pointer;
    transition: all 0.5s;
    width: 100%;
  }

.swal-button:not([disabled]):hover,
  button:hover{
    background-color: #548F98;
    transition: all 0.5s;
  }

  input, textarea{
    font-size: 16px;
    font-weight: 300;
    padding: 15px 20px;
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid lightgray;
    color: lightgray;
    margin: 10px 0;
    width: 100%;
  }

   textarea:focus,
   input:focus{
    border: 0.5px solid #548F98;
    box-shadow: 1px 1px 4px 0px #98bdc2;
  }

  input::placeholder{
      color: gray;
  }

  #app{
    max-width: 100%;
    margin: 0 auto;
    top: 0;
    left: 0;
  }
</style>

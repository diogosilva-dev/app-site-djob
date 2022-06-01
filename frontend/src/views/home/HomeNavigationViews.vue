<template>
    <div class="home">
        <SliderHeaderComponent />
        <div class="btn-links-category">
          <router-link to="" class="anuncios">
            <img src="@/assets/images-home/botao-kits.jpg" alt="">
          </router-link>
          <router-link to="" class="anuncios">
            <img src="@/assets/images-home/botao-atacado.jpg" alt="">
          </router-link>
          <router-link to="" class="anuncios">
            <img src="@/assets/images-home/botao-kits.jpg" alt="">
          </router-link>
        </div>
        <div class="main">
          <ProdutosLista/>
        </div>
    </div>
</template>

<script>
import SliderHeaderComponent from '@/components/navigation-components/slider-header/SliderHeaderComponent.vue'
import ProdutosLista from "@/components/navigation-components/produtos-lista/ProdutosListaComponent.vue";


export default {
  name: "home",
  components: {
    SliderHeaderComponent,
    ProdutosLista
  },
};
</script>


<style scoped>
  .btn-links-category{
    margin: 50px 20px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }

  .btn-links-category a{
    border-radius: 10px;
    margin: 20px;
    overflow: hidden;
    min-width: 200px;
  }


</style>

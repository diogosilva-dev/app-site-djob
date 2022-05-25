<template>
    <section>
        <div class="content" v-if="produto">
          <vueper-slides
          class="no-shadow"
            ref="vueperslides1"
            :touchable="false"
            fade
            :autoplay="false"
            :bullets="false"
            @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
            fixed-height="400px">
            <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :image="slide.image">
            </vueper-slide>
          </vueper-slides>
          <div class="dados-produto">
            <h1>{{produto.ref}}</h1>
            <h2>{{produto.titulo}}</h2>
            <p>{{produto.descricao}}</p>
          </div>
          <vueper-slides
            class="no-shadow thumbnails"
            ref="vueperslides2"
            @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
            :visible-slides= 8
            fixed-height="60px"
            :bullets="false"
            :touchable="false"
            :gap="1"
            :arrows="true">
            <vueper-slide
              v-for="(slide, i) in slides"
              :key="i"
              :image="slide.image"
              @click.native="$refs.vueperslides2.goToSlide(i)">
            </vueper-slide>
          </vueper-slides>
        </div>
    </section>
</template>
<script>

import { api } from '@/services/Api';
import { VueperSlides, VueperSlide } from 'vueperslides'


export default {
  name: "Produto",
  props: ["referencia"],
  components: { VueperSlides, VueperSlide },
  data() {
    return {
        produto: null,
        slides:[]
    };
  },
  methods: {
    getProduto() {
      api.get(`/singleProduct/${this.referencia}`)
        .then(response => {
        this.produto = response.data
        document.title = this.produto.titulo;
        this.produto.imagemProduto.map(image => {
          this.slides.push({image})
        })
      });
    }
  },
  created() {
    this.getProduto();
  }
};
</script>

<style scoped>

.content{
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 20px;
  column-gap: 20px;
  row-gap: 20px;
  justify-content: center;
  grid-template-columns: minmax(300px, 600px) minmax(300px, 600px);
}

.dados-produto{
  text-align: right;
}

.thumbnails {
    height: 75px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
}

.vueperslide{
  background-size: cover!important;;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 0.5px solid #a2c8ce;
  transition: 0.3s ease-in-out;
  opacity: 0.8;
  cursor: pointer;
  border-radius: 5px;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #6DADB7;
}
</style>
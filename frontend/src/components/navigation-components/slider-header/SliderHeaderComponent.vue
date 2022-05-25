<template>
    <div class="slide">
        <vueper-slides :infinite="false" :dragging-distance="50" autoplay progress>
        <vueper-slide
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
            :title="slide.title"
            :content="slide.content"
            :link="slide.link" 
        />
        </vueper-slides>
    </div>
</template>

<script src="./SliderHeader.js"></script>

<style scoped>
.vueperslides__progress {
  background: rgba(173, 173, 173, 0.9);
  color: #ec5466;
}

.vueperslides {
    top: -20px;
    z-index: 0;
}

.vueperslides{
    border-bottom: solid 10px #548F98;
    margin: -20px 20px;
}
</style>
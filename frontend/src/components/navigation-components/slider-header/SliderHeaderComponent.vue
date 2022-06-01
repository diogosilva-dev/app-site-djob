<template>
    <div class="slide">
        <vueper-slides
            :infinite="true"
            :dragging-distance="50"
            autoplay
            progress
            :alwaysRefreshClones="true"
        >
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


.vueperslides {
    top: -20px;
    z-index: 0;
}

.vueperslides{
    border-bottom: solid 10px #548F98;
    margin: -20px 20px;
}
</style>
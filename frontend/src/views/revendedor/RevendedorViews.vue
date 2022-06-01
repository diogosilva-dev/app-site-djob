<template>
<div>
    <div class="content">
       <h1>Seja um de nossos revendedores</h1>
    </div>
    <NaoEncontrouComponent />
</div>
</template>

<script>
import NaoEncontrouComponent from "@/components/navigation-components/nao-encontrou/NaoEncontrouComponent.vue"
export default {
    name: 'Ajuda',
    data(){
        return {

        };
    },
    components:{
        NaoEncontrouComponent
    }
}
</script>


<style scoped>
div{
    display: grid;
    justify-content: center;
}
 .content{
        margin: 50px;
        display: grid;
        max-width: 1400px;
    }
    h1{
        margin: 20px 0;
        text-transform: uppercase;
        text-align: center;
    }
    p{
        margin: 20px;
        text-align: left;
    }
</style>
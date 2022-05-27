<template>
<div>
    <ul v-if="paginasTotal > 1">
        <li v-for="pagina in paginas()" :key="pagina">
            <router-link :to="{query: query(pagina)}">{{pagina}}</router-link>
        </li>
    </ul>
</div>
</template>
<script src="./ProdutoPaginar.js"></script>
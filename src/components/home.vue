<template>
    <div>
       <v-text-field
      v-model="search"
      label="Busqueda"
    ></v-text-field>
        <button @click="buscar">Buscar</button>

    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "search", 
    data:()=>({
        search: " "
    })
    ,methods:{buscar(){
        this.$router.push({
        name: "Search",
        params: { search: this.search, offset: '0' },
      });
    }}
    })


</script>
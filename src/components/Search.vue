<template>
  <v-card max-width="1000px" class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" :cols="3">
          <v-card dark @click="itemSelection">
            <v-img :src="item.thumbnail" height="200px">
              <v-card-title v-text="item.price"></v-card-title>
            </v-img>
            <div>
              <v-card-subtitle v-text="item.title"></v-card-subtitle>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import {Mercadolibreservice} from "../../services/mercadolibre.service";
export default Vue.extend({
    name: "search", 
    data:()=>({
        items: []
    })
    , created(){
        const mercadolibreservices = new Mercadolibreservice()
        mercadolibreservices.getConsult(this.$route.params.search, this.$route.params.offset).then((result) => {
            this.items = result.data.results
            console.log(result.data);   
            
        })
    }
})
</script>
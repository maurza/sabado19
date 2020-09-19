<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="400"
  >
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title  @click= "metodo()">MercadoFree</v-toolbar-title>
    </v-app-bar>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
    }),
    methods:{
        metodo: () =>{
            console.log("hello budu")
        }
    } 
  }
</script>
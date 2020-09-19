<template>
  <v-app>
    <v-main>
      <Toolbar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from './components/Toolbar.vue';
export default Vue.extend({
  name: 'App',

  components: {
    Toolbar
  },

  data: () => ({
    //
  }),
});
</script>

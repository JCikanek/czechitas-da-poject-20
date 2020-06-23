<template>
  <v-app>
    <hlavicka />
    <v-main>
      <v-container class="grey lighten-5">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Paticka from "@/components/Paticka.vue";
import Hlavicka from "@/components/Hlavicka.vue";

export default {
  name: "App",

  components: {
    paticka: Paticka,
    hlavicka: Hlavicka
  }
  
};
</script>

<style scoped>


</style>

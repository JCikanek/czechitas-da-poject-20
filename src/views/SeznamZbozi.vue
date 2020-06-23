<template>
  <v-row>
    
    <zbozi v-for="produkt in zobrazZbozi" v-bind:produkt="produkt" v-bind:key="produkt.id" />
  </v-row>
</template>

<script>
import Zbozi from "@/components/Zbozi.vue";
import Data from "@/assets/Data.js";


export default {
  props: ["zbozi", "id"],
  components: {
    zbozi: Zbozi
  },
  data() {
    return {
      products: Data.products
    };
  },
  computed: {
    zobrazZbozi: function() {
      let zbozi = this.products.filter(product => (product.kategorie === parseInt(this.id)));
      return zbozi;
    }
  }
};

</script>

<style>
.v-card img {
  width: 100%;
}
</style>
<template>
  <div>
    
    <seznamKategorie v-bind:kategorie="kategorie"/>
    
   
  </div>
</template>

<script>


import Data from "@/assets/Data.js";
import SeznamKategorie from "@/components/SeznamKategorie.vue";

export default {
  name: "Home",
  components: {
    seznamKategorie: SeznamKategorie
  },

  data() {
    return {
      majitel: Data.majitel,
      kategorie: Data.kategorie
    };
  }
};
</script>

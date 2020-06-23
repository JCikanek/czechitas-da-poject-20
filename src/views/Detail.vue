<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img v-bind:src="`/fotky_projekt_DA/${zobrazPolozku.images}`" height="200px"></v-img>
        <v-card-title class="headline" v-text="zobrazPolozku.nazev"></v-card-title>
        <v-card-subtitle>
          {{ zobrazPolozku.cena }} Kč/den
          <br />
          Majitel: {{ zobrazMajitele.jmeno }}
        <br />
        {{ zobrazPolozku.mesto }}
        </v-card-subtitle>
        <v-card-actions class="d-flex justify-center">
          <v-btn v-on:click="proclick" flat color="orange white--text">Půjčit</v-btn>
        </v-card-actions>
        <v-card-text>{{ zobrazPolozku.popis }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
​
<script>
import Data from "@/assets/Data.js";
import Formular from "@/views/Formular.vue";

export default {
  props: ["id", "majitelId"],
  data() {
    return {
      products: Data.products,
      majitel: Data.majitel
    };
  },
  methods: {
    proclick: function() {
      this.$router.push({ name: `Formular`, params: { id: this.id } });
    }
  },

  computed: {
    zobrazPolozku: function() {
      return this.products.filter(
        product => product.id === parseInt(this.id)
      )[0];
    },
    zobrazMajitele: function() {
      const majitelId = this.zobrazPolozku.majitel;
      return this.majitel.filter(
        majitel => majitel.id === parseInt(majitelId)
      )[0];
    }
  }
};
</script>
<style>
.v-card img {
  width: 100%;
}
</style>
<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Jméno"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      :error-messages="emailErrors"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="mobil"
      :error-messages="nameErrors"
      :counter="10"
      label="Mobil"
      required
    ></v-text-field>
    <a href="/fotky_projekt_DA/GDPR.pdf" target="_blank" rel="noopener noreferrer">Podmínky a GDPR</a>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Souhlasím s podmínkami"
      required
    ></v-checkbox>


    <v-card-actions class="d-flex justify-center">
      <v-btn v-bind:disabled="!checkbox" v-on:click="odklikni" class="mr-4" flat color="orange white--text ">Půjčit</v-btn>
      
    </v-card-actions>
  </v-form>
</template>

<script>
import Data from "@/assets/Data.js";
export default {
  props: ["id"],
  data() {
    return {
      products: Data.products,
      valid: false,
      name: "",
      nameErrors: "",
      mobil: "",
      email: "",
      emailErrors: "",
      checkbox: false,
      checkboxErrors: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    odklikni: function() {
      alert("Požadavek byl odeslán majiteli");
      this.$router.push({ name: `Home` });
    }
  },
  computed: {
    zobrazPolozku: function() {
      return this.products.filter(
        product => product.id === parseInt(this.id)
      )[0];
    }
  }
};
</script>
<style>
</style>

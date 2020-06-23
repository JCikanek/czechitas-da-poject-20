<template>
    <v-app-bar
    app
      color="primary"
      dense
      dark
  
    > 
    <v-btn icon v-on:click="click" >
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-toolbar-title>Půjč si</v-toolbar-title>
     
    </v-app-bar>
</template>

<script>
export default {
  methods: {
    click: function() {
     this.$router.push( { name: `Home` } )
    }
  }

}
</script>

<style>

</style>
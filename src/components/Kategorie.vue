<template>
  <v-col class="col-6">
    <v-card v-bind:color="polozka.barva" dark v-on:click="click">
      <div class="vyska">
        <div class="d-flex justify-center">
          <v-avatar class="ma-3 justify-center" tile>
            <img v-bind:src="require(`./../assets/images/groups/${polozka.image}`)" />
          </v-avatar>
        </div>
        <div class="d-flex justify-center">
          <v-card-title class="sm-text" v-text="polozka.name"></v-card-title>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["polozka"],
  methods: {
    click: function() {
      this.$router.push({ name: `Zbozi`, params: { id: this.polozka.id } });
    }
  }
};
</script>

<style>
.vyska {
  flex: box;
  flex-direction: column;
}

.headline {
  font-size: 5px;
  padding: 5px;
}
</style>
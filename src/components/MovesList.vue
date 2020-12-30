<template>
  <b-row>
    <b-col v-show="showMoves" class="moves">
      <h3>{{ pokemonName | capitalize }} movimentos</h3>
      <br />
      <div class="moves-list">
        <p v-for="(move, index) in movesList" :key="index">
          {{ move.move.name }}
        </p>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "MovesList",
  props: {
    showMoves: Boolean,
    pokemonName: String,
    movesList: Array,
  },
};
</script>

<style scoped>
.moves {
  margin: 10px 0px;
  background-color: #e9e9e9;
  border-radius: 5px;
  padding: 20px 0px;
}

.moves-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
</style>
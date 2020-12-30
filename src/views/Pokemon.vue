<template>
  <div class="pokemon-details">
    <b-container>
      <b-row>
        <b-col>
          <div v-if="isLoading"><h1>Carregando...</h1></div>
          <div v-else>
            <h1>
              {{ apiResponse.name | capitalize }}
            </h1>
            
            <pokemon-card :apiResponse="apiResponse" />

            <b-row>
              <b-col md="3" offset-md="9">
                <b-button
                  class="mt-3"
                  variant="primary"
                  block
                  @click="showMovesList"
                  >{{ showMoves ? "Ocultar lista" : "Ver lista de movimentos" }}
                </b-button>
              </b-col>
            </b-row>

            <moves-list
              :pokemonName="apiResponse.name"
              :movesList="apiResponse.moves"
              :showMoves="showMoves"
            />

            <br />
            <b-row>
              <b-col cols="4" offset="4"
                ><b-button variant="primary" @click="goBack" block
                  >Voltar</b-button
                ></b-col
              >
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ApiServices from "../api/server";
import PokemonCard from "../components/PokemonCard.vue";
import MovesList from "../components/MovesList.vue";

export default {
  components: { PokemonCard, MovesList },
  name: "Pokemon",
  data() {
    return {
      apiResponse: null,
      showMoves: false,
      isLoading: true,
    };
  },
  methods: {
    showMovesList() {
      this.showMoves = !this.showMoves;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  mounted() {
    const pokemonId = this.$route.params.id;
    ApiServices.getPokemon(`pokemon/${pokemonId}`, (response) => {
      this.apiResponse = response.data;
    });

    this.isLoading = false;
  },
};
</script>

<style scoped>
</style>
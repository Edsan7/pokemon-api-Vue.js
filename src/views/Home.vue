<template>
  <div class="home">
    <b-container>
      <h1>Lista de Pokemons</h1>
      <div v-if="isLoading"><p>Carregando...</p></div>
      <div v-else>
        <p>{{ apiResponse.count }} pokemons</p>

        <b-form-input
          id="input-1"
          v-model="search"
          type="text"
          placeholder="Busca por nome..."
          required
        ></b-form-input>

        <div class="pokemon">
          <div v-for="(pokemon, index) in searchPokemon" :key="index">
            <router-link :to="`${pokemon.url.substring(26)}`">{{
              pokemon.name | capitalize
            }}</router-link>
          </div>
        </div>
        <b-row>
          <b-col>
            <b-button
              variant="danger"
              :disabled="page === 1"
              @click="fetchPreviousPage"
            >
              <strong>Página Anterior</strong>
            </b-button>
          </b-col>
          <b-col
            ><strong style="line-height: 40px"
              >Página: {{ page }}</strong
            ></b-col
          >
          <b-col>
            <b-button
              variant="success"
              :disabled="apiResponse.next === null"
              @click="fetchNextPage"
            >
              <strong>Próxima Página</strong>
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import ApiServices from "../api/server";

export default {
  name: "Home",
  data() {
    return {
      page: 1,
      apiResponse: null,
      isLoading: false,
      search: "",
    };
  },
  methods: {
    fetchNextPage() {
      this.isLoading = true;
      const nextPage = this.apiResponse.next.substring(26);

      ApiServices.getPokemon(nextPage, (apiResponse) => {
        this.apiResponse = apiResponse;
      });

      this.page++;
      this.isLoading = false;
    },
    fetchPreviousPage() {
      this.isLoading = true;
      const previousPage = this.apiResponse.previous.substring(26);

      ApiServices.getPokemon(
        previousPage,
        (apiResponse) => (this.apiResponse = apiResponse)
      );

      this.page--;
      this.isLoading = false;
    },
  },
  computed: {
    searchPokemon: function () {
      return this.apiResponse.results.filter((pokemon) =>
        pokemon.name.includes(this.search.toLowerCase().trim())
      );
    },
  },
  mounted() {
    this.isLoading = true;
    
    ApiServices.getPokemon("pokemon/", (apiResponse) => {
      this.apiResponse = apiResponse;
    });

    this.isLoading = false;
  },
};
</script>

<style scoped>
.home {
  margin: 50px;
  padding: 10px 5px;
}

.pokemon {
  font-size: 18px;
  background-color: rgb(241, 241, 241);
  border-radius: 5px;
  padding: 20px 0px;
  margin: 10px 5px 30px;
  display: grid;
  grid-template-columns: 2fr 2fr;
}

.pokemon a:hover {
  text-decoration: none;
  color: rgb(90, 90, 90);
}
</style>

<template>
  <b-row>
    <b-col class="pokemon-card">
      <b-row>
        <b-col sm="12" md="3">
          <div class="pokemon-card-images">
            <b-row>
              <img :src="apiResponse.sprites.front_default" />
              <img :src="apiResponse.sprites.back_default" />
            </b-row>
            <b-row>
              <img
                :src="
                  apiResponse.sprites.other['official-artwork'].front_default
                "
                width="120px"
              />
            </b-row>
          </div>
        </b-col>
        <b-col cols="9">
          <b-row style="height: 100%">
            <b-col
              sm="12"
              md="6"
              style="border-right: 2px solid rgb(223, 223, 223)"
            >
              <div class="pokemon-card-specs">
                <h4 style="text-align: center">Informações</h4>
                <p>
                  <strong> Altura: </strong>
                  {{ apiResponse.height / 10 }} metros.
                </p>
                <p>
                  <strong>Peso:</strong>
                  {{ apiResponse.weight / 10 }} quilogramas.
                </p>

                <p><strong>Ordem:</strong> {{ apiResponse.order }}.</p>

                <div style="display: flex">
                  <p><strong> Tipo: </strong></p>
                  <span
                    v-for="(typeObject, index) in apiResponse.types"
                    :key="index"
                  >
                    {{ typeObject.type.name }}.
                  </span>
                </div>

                <p>
                  <strong>Experiência base:</strong>
                  {{ apiResponse.base_experience }} pontos.
                </p>
              </div>
            </b-col>
            <b-col sm="12" md="6">
              <div class="pokemon-card-specs">
                <h4 style="text-align: center">Habilidades</h4>
                <ul>
                  <li
                    v-for="(abilityObject, index) in apiResponse.abilities"
                    :key="index"
                  >
                    <strong>
                      {{ abilityObject.ability.name | capitalize }}
                    </strong>
                    {{
                      abilityObject.is_hidden ? " - oculta." : " - não oculta."
                    }}
                  </li>
                </ul>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "PokemonCard",
  props: {
    apiResponse: Object,
  },
};
</script>

<style scoped>
.pokemon-card {
  border-radius: 5px;
  background-color: rgb(241, 241, 241);
}
.pokemon-card-images {
  height: 100%;
  border-right: 2px solid rgb(223, 223, 223);
}
.pokemon-card-images img {
  margin: 0px auto 10px;
}
.pokemon-card-specs {
  text-align: left;
  margin-top: 20px;
  height: 100%;
}
.pokemon-details {
  margin: 100px 30px;
}
</style>
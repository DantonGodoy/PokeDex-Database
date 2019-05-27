<template>
  
  <section class="pokemons">

    <input type="search" class="filter-field" v-model="searchText" placeholder="Encontre seu Pokémon favorito aqui">

    <ul class="pokemons__list">
      <li class="pokemons__items pkm" v-for="pokemon in filteredPokemon">
        <p class="pkm__name" v-text="pokemon.name"><span></span></p>
        <a class="pkm__reference" href="" v-text="pokemon.url"></a>
      </li>
    </ul>

    <button class="button button--prev" v-if="api.previous" @click="prevPage"></button>
    <button class="button button--next" v-if="api.next" @click="nextPage"></button>

  </section>

</template>

<script>

import Axios from 'axios';

export default {

  data () {

    return {
      api: {},
      searchText: '',
      pokemons: {}
    }
  },

  created() {

    this.fetchPokemons();
    console.warn(`Componente Pokémon criado com sucesso.`);
  },

  computed: {

    filteredPokemon () {
      if (this.searchText) {

        let splittedSearch = this.searchText.split('').join('.*')
            , exp = new RegExp('(' + [splittedSearch] + ')', 'gi');

        return this.api.results.filter( pokemon => exp.test(pokemon.name));
      }
      else {
        return this.api.results;
      }
    }
  },

  methods: {

    fetchPokemons (url = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=964') {
      Axios.get(url)
        .then(({ data }) => this.api = data)
        .catch((error) => {
          console.error(error);
        })
    },

    nextPage () {
      this.fetchPokemons(this.api.next);
    },

    prevPage () {
      this.fetchPokemons(this.api.previous);
    }
  }
}

</script>

<style lang="scss" scoped>

@import './../../assets/scss/variables/_var-colors';

.pokemons {
  position: relative;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__items {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 50%;
    margin: 16px 0;
    border-radius: 2px;
    padding: 8px;
    line-height: 16px;
    background: $white;
    border: 1px solid $white;
    box-shadow: 0 1px 0 1px $black,
                inset 0 1px 0 1px $black,
                0 0 0 1px $black,
                inset 0 0 0 1px $black,
                0 0 10px 5px #ccc;

    &:after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      float: right;
      margin-top: 40px;
      border: 5px solid transparent;
      border-top-color: $black;
      animation: bounce 0.5s;
      animation-direction: alternate;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(.5,0.05,1,.5);
    }

    .pkm {
      &__name {
        text-transform: capitalize;
        font-size: 24px;
        line-height: 1.2;
        font-weight: 600;
      }

      &__reference {}
    }

    @keyframes bounce {
      from { transform: translateY(0px); }
      to { transform: translateY(3px); }
    }
  }

  & .button {
    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    width: 120px;
    height: 120px;
    border: none;
    background-color: transparent;
    background-image: url('./../../assets/images/pokeball_btn.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }

    &:focus {
      outline: none;
    }

    &:after {
      content: '';
      transform: translateY(30px);
      font-size: 24px;
      font-weight: 700;

      @media (max-width: 768px) {
      font-size: 18px;
    }
    }

    &--next {
      right: 10px;

      &:after {
        content: '+ 150';
      }
    }

    &--prev {
      left: 10px;

      &:after {
        content: '- 150';
      }
    }
  }

  & .filter-field {
    display: block;
    width: 60%;
    margin: 50px auto 34px;
    padding: 15px 10px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid $red;
  }
}

</style>

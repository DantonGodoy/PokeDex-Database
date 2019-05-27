<template>

  <header class="header">
    <h1 class="header__main-title">{{ pageTitle }}</h1>
    <img src="./../../assets/images/pokemon_logo.png" alt="">
  </header>

</template>

<script>

export default {
  
  data () {

    return {
      pageTitle : 'Welcome to the Pokedéx Search Database!'
    }
  },

  created() {
    console.warn(`Componente Header criado com sucesso.`);
  }
}

</script>

<style lang="scss" scoped>

@import './../../assets/scss/variables/_var-colors';

.header {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__main-title {
    width: 100%;
    margin-bottom: 40px;
    padding: 30px 0;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: $white;
    text-shadow: 3px 4px 3px $black;
    background-color: $red;
    border-bottom: 5px solid $black;
  }
}

</style>

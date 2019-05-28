<template>

  <div>

    <pokemon-header></pokemon-header>

    <main class="container">
    
      <pokemon></pokemon>

    </main>

  </div>

</template>

<script>

import Header from './components/header/Header';
import Pokemon from './components/pokemon/Pokemon';

export default {
  name: 'app',
  components: {
    'pokemon-header' : Header,
    Pokemon
  },

  created() {
    console.warn(`Componente App criado com sucesso.`);
  }
}

</script>

<style lang="scss">

@import url("https://fonts.googleapis.com/css?family=Titillium+Web");
@import './assets/scss/style';

body * {
  font-family: "Titillium Web", sans-serif;
}

.container {
  width: 95vw;
  margin: 0 auto;
}

</style>

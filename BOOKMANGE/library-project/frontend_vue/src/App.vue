<template>
  <div id="app">
    <NavBar />
    <HomePage/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import HomePage from './components/HomePage.vue'; // Importa diretamente o Home.vue

export default {
  components: {
    NavBar,
    HomePage,
  },
};
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>

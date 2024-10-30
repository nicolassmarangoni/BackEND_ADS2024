<template>
  <div id="app">
    <NavBar />
    <ImageCarousel />
    <div class="container text-light mt-4">
      <h2>LIVROS EM ALTA</h2>
      <BookGrid :books="trendingBooks" />
    </div>
    <div class="container text-light mt-4">
      <h2>ULTIMOS ADICIONADOS</h2>
      <BookGrid :books="newBooks" />
    </div>
    <div class="container text-light mt-4">
      <h2>MAIS LIDOS DA SEMANA</h2>
      <BookGrid :books="popularBooks" />
    </div>
    <SiteFooter />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import ImageCarousel from './components/ImageCarousel.vue';
import BookGrid from './components/BookGrid.vue';
import SiteFooter from './components/SiteFooter.vue';

const trendingBooks = [
  { src: require('./fotos/marcal_livro.jpg'), link: 'livro1.html', alt: 'Capa do livro Marcal' },
  { src: require('./fotos/casey_livro.jpg'), link: 'livro2.html', alt: 'Capa do livro Casey' },
  { src: require('./fotos/marcal_livro.jpg'), link: 'livro3.html', alt: 'Capa do livro Francisco' },
  { src: require('./fotos/markus_livro.jpg'), link: 'livro4.html', alt: 'Capa do livro Markus' }
];

const newBooks = [...trendingBooks]; // Exemplo de livros novos
const popularBooks = [...trendingBooks]; // Exemplo de livros populares
</script>

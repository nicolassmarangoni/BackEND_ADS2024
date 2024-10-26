<template>
  <div>
    <!-- Carousel -->
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="fotos/Car Wash and Detailing 2.PNG" class="d-block w-100" alt="Car Wash and Detailing">
        </div>
        <div class="carousel-item">
          <img src="fotos/banner.jpg" class="d-block w-100" alt="Banner">
        </div>
        <div class="carousel-item">
          <img src="fotos/outra-imagem.jpg" class="d-block w-100" alt="Outra Imagem">
        </div>
      </div>
    </div>

    <!-- Seções de Livros -->
    <BookSection
      title="LIVROS EM ALTA"
      :books="highRatedBooks"
    />
    <BookSection
      title="ÚLTIMOS ADICIONADOS"
      :books="recentlyAddedBooks"
    />
    <BookSection
      title="MAIS LIDOS DA SEMANA"
      :books="mostReadBooks"
    />

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3 mt-5">
      <div class="container">
        <p class="mb-0">© 2024 BIBLIOTECH. Todos os direitos reservados.</p>
        <p>
          <a href="#" class="text-white">Termos de Serviço</a> | 
          <a href="#" class="text-white">Política de Privacidade</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import BookSection from './BookSection.vue';

export default {
  name: 'HomePage',
  components: {
    BookSection,
  },
  data() {
    return {
      highRatedBooks: [
        { id: 1, title: 'Marcal', image: '', link: 'livro1.html' },
        { id: 2, title: 'Casey', image: 'fotos/casey_livro.jpg', link: 'livro2.html' },
        { id: 3, title: 'Francisco', image: 'fotos/francisco_livro.JPG', link: 'livro3.html' },
        { id: 4, title: 'Markus', image: 'fotos/markus_livro.jpg', link: 'livro4.html' },
      ],
        recentlyAddedBooks: [
          { id: 5, title: 'Marcal livro', image: '...as', link: 'link-para-pagina-do-livro-5.html' },
          { id: 6, title: 'Casey', image: 'fotos/casey_livro.jpg', link: 'link-para-pagina-do-livro-6.html' },
          { id: 7, title: 'Francisco', image: 'fotos/francisco_livro.JPG', link: 'link-para-pagina-do-livro-7.html' },
          { id: 8, title: 'Markus', image: 'fotos/markus_livro.jpg', link: 'link-para-pagina-do-livro-8.html' },
        ],
      mostReadBooks: [
        { id: 9, title: 'Marcal', image: 'fotos/marcal_livro.jpg', link: 'link-para-pagina-do-livro-9.html' },
        { id: 10, title: 'Casey', image: 'fotos/casey_livro.jpg', link: 'link-para-pagina-do-livro-10.html' },
        { id: 11, title: 'Francisco', image: 'fotos/francisco_livro.JPG', link: 'link-para-pagina-do-livro-11.html' },
        { id: 12, title: 'Markus', image: 'fotos/markus_livro.jpg', link: 'link-para-pagina-do-livro-12.html' },
      ],
    };
  },
};
</script>

<style scoped>
@import '~bootstrap/dist/css/bootstrap.min.css';
@import url(C:\Users\dsadm\Desktop\aaaaaaaaaaa\BackEND_ADS2024\BOOKMANGE\library-project\frontend_vue\src\assets\styles.css);
</style>

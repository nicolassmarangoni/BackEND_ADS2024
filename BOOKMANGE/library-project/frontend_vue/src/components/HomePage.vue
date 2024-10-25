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

    <!-- Livros em Alta -->
    <div class="container text-light mt-4">
      <h2>LIVROS EM ALTA</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <a href="livro1.html">
             <img :src="require(img)" class="img-fluid" alt="Capa do livro Marcal">
          </a>
        </div>
        <div class="col-md-3">
          <a href="livro2.html">
            <img src="fotos/casey_livro.jpg" class="img-fluid" alt="Capa do livro Casey">
          </a>
        </div>
        <div class="col-md-3">
          <a href="livro3.html">
            <img src="fotos/francisco_livro.JPG" class="img-fluid" alt="Capa do livro Francisco">
          </a>
        </div>
        <div class="col-md-3">
          <a href="livro4.html">
            <img src="fotos/markus_livro.jpg" class="img-fluid" alt="Capa do livro Markus">
          </a>
        </div>
      </div>
    </div>

    <br><br>
    <!-- Últimos Adicionados -->
    <div class="container text-light">
      <h2>ULTIMOS ADICIONADOS</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <a href="link-para-pagina-do-livro-5.html">
            <img src="fotos/marcal_livro.jpg" class="img-fluid" alt="Capa do livro Marcal">
          </a>
        </div>
        <div class="col-md-3">
          <a href="link-para-pagina-do-livro-6.html">
            <img src="fotos/casey_livro.jpg" class="img-fluid" alt="Capa do livro Casey">
          </a>
        </div>
        <div class="col-md-3">
          <a href="link-para-pagina-do-livro-7.html">
            <img src="fotos/francisco_livro.JPG" class="img-fluid" alt="Capa do livro Francisco">
          </a>
        </div>
        <div class="col-md-3">
          <a href="link-para-pagina-do-livro-8.html">
            <img src="fotos/markus_livro.jpg" class="img-fluid" alt="Capa do livro Markus">
          </a>
        </div>
      </div>
    </div>

    <br><br>
    <!-- Mais Lidos da Semana -->
    <div class="container text-light">
      <h2>MAIS LIDOS DA SEMANA</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <a href="link-para-pagina-do-livro-9.html">
            <img src="fotos/marcal_livro.jpg" class="img-fluid" alt="Capa do livro Marcal">
          </a>
        </div>
        <div class="col-md-3">
          <a href="link-para-pagina-do-livro-10.html">
            <img src="fotos/casey_livro.jpg" class="img-fluid" alt="Capa do livro Casey">
          </a>
        </div>
        <div class="col-md-3">
          <a href="link-para-pagina-do-livro-11.html">
            <img src="/library-project/frontend_vue/src/assets/fotos/marcal_livro.jpg" class="img-fluid" alt="Capa do livro Francisco">
          </a>
        </div>
        <div class="col-md-3">
          <a href="link-para-pagina-do-livro-12.html">
            <img src="fotos/markus_livro.jpg" class="img-fluid" alt="Capa do livro Markus">
          </a>
        </div>
      </div>
    </div>

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
export default {
  name: 'HomePage', // Nome do componente multi-palavra
  data() {
    return {
      img: '@/assets/fotos/marcal_livro.jpg' // ou o caminho relativo correto
    };
  }
}   

</script>
<style scoped>
</style>

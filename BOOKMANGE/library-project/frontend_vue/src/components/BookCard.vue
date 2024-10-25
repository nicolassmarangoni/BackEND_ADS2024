<template>
  <div class="col-md-4">
    <img :src="book.image" class="img-fluid" :alt="book.title">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text">{{ book.description }}</p>
        <h6>Avaliação:</h6>
        <div>
          <span class="star" v-for="star in 4" :key="star">&#9733;</span>
          <span class="star">&#9734;</span> <!-- Estrela vazia -->
          <span>(4/5)</span>
        </div>
        <a href="#" class="btn btn-primary mt-3">Reservar Livro</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
  },
};
</script>

<style scoped>
@import './assets/styles.css';
</style>

<template>
    <div class="container text-light">
      <h2>{{ title }}</h2>
      <div class="row">
        <div class="col-md-3" v-for="(book, index) in books" :key="index">
          <a :href="book.link">
            <img :src="book.image" class="img-fluid" :alt="book.alt">
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      books: Array,
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos personalizados se necessário */
  </style>
  
<template>
    <div class="container">
      <div class="row">
        <!-- Utilizando diretamente `books` definido pelo `defineProps` no v-for -->
        <div v-for="(book, index) in books" :key="index" class="col-md-3">
          <a :href="book.link">
            <img :src="book.src" class="img-fluid" :alt="book.alt" />
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Definindo as propriedades sem atribuir a `props`
  defineProps({
    books: {
      type: Array,
      required: true
    }
  });
  </script>
  
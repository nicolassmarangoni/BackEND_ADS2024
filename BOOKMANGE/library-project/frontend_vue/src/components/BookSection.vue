<template>
  <div class="container">
    <div class="container text-light">
      <h2>{{ title }}</h2>
    </div>
    <div class="row">
      <BookCard
        v-for="book in books"
        :key="book.id"
        :title="book.title"
        :image="book.image"
        :link="book.link"
      />
    </div>
  </div>
</template>

<script>
import BookCard from './BookCard.vue';

export default {
  components: {
    BookCard,
  },
  props: {
    title: String,
    books: Array,
  },
};
</script>

<style scoped>
@import '~bootstrap/dist/css/bootstrap.min.css';
@import url(C:\Users\dsadm\Desktop\aaaaaaaaaaa\BackEND_ADS2024\BOOKMANGE\library-project\frontend_vue\src\assets\styles.css);
</style>

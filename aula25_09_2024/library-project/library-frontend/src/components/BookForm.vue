<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="book.title" placeholder="Título" required />
    <input v-model="book.author" placeholder="Autor" required />
    <input v-model="book.year" placeholder="Ano" required />
    <button type="submit">{{ book._id ? "Atualizar" : "Adicionar" }}</button>
  </form>
</template>

<script>
// Importa o serviço API para fazer requisições
import api from "../services/api.js"; // Use a importação ES6 para melhor clareza

export default {
  props: ["bookToEdit"], // Recebe o livro a ser editado como uma prop
  data() {
    return {
      book: this.bookToEdit || { title: "", author: "", year: null }, // Inicializa o livro
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.book._id) {
          // Verifica se o livro está sendo editado
          await api.updateBook(this.book._id, this.book);
          this.$emit("book-updated"); // Emite um evento quando o livro é atualizado
        } else {
          // Se o livro não está sendo editado, é um novo livro
          await api.addBook(this.book);
          this.$emit("book-added"); // Emite um evento quando um novo livro é adicionado
        }
        // Opcional: Limpar o formulário após a operação
        this.book = { title: "", author: "", year: null };
      } catch (error) {
        console.error(error);
        alert("Erro ao salvar livro."); // Exibe uma mensagem de erro
      }
    },
  },
};
</script>

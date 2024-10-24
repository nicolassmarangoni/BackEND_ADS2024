<script>
import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/books",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  name: "apiNode",
  methods: {
    getBooks() {
      return apiClient.get("/");
    },
    addBook(book) {
      return apiClient.post("/", book);
    },
    updateBook(id, book) {
      return apiClient.put(`/${id}`, book);
    },
    deleteBook(id) {
      return apiClient.delete(`/${id}`);
    },
  },
};
</script>

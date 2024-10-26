const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number },
    image: { type: String }, // Adicione um campo para a imagem
});

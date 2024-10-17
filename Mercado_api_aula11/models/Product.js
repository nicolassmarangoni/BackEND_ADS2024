const mongoose = require('mongoose'); // Variável mongoose que irá armazenar a conexão futura com o MongoDB

// Define a estrutura para salvar o produto no banco de dados
const ProductSchema = new mongoose.Schema({
    // nome, tipo string, required indica que o parâmetro é obrigatório
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    dataValidade: {
        type: String,
        required: true
    }
});

// Exportando o modelo para salvar os produtos
module.exports = mongoose.model('Product', ProductSchema);


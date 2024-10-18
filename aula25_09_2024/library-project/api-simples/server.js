// arquivo principal da api
// inicia o servidor

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// inicialização do app
const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect('mongodb+srv://nicolasmpontes:12345@cluster0.fpy2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar no MongoDB', err));

// Importação das rotas
const bookRoutes = require('../api-simples/routes/books');
app.use('/api/books', bookRoutes); // Corrigido para incluir a barra inicial

// Define a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});

// Tratamento de erro global (opcional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});
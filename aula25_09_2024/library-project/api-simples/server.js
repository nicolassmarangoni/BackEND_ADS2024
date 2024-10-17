// arquivo principal da api
// inicia o servidor

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// inicialização do app

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o mongo db

mongoose.connect('mongodb+srv://nicolasmpontes:12345@cluster0.fpy2o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
   
    ,{
    useNewUrlParser:true,useUnifiedTopology:true
    
}).then(()=>console.log('Mongodb conectado')).catch(err=>console.error('Erro ao conectar no mongo',err));

// Importação das rotas
const bookRoutes = require('../api-simples/routes/books');
app.use('api/books',bookRoutes); // irá retornar a rota dos livros
// Define a porta do servidor
app.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
});
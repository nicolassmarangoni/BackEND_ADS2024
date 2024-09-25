const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


let produtos = [];
let clientes = [];


app.get('/', (req, res) => {
    res.send('Bem vindo a Api - Senai Market v 1.0');
});


app.route('/produtos')
    .post((req, res) => {
        const { nome, qtde, valor } = req.body;
        produtos.push({ nome, qtde, valor });
        res.status(201).send('Produto cadastrado com sucesso!');
    })
    .get((req, res) => {
        res.json(produtos);
    });


app.route('/clientes')
    .post((req, res) => {
        const { login, senha } = req.body;
        clientes.push({ login, senha });
        res.status(201).send('Cliente cadastrado com sucesso!');
    })
    .get((req, res) => {
        res.json(clientes);
    });


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
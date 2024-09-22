
let pessoas = [
    {
        nome: "Nicolas",
        idade: 21,
        cidade: "Campinas"
    },
    {
        nome: "Marco",
        idade: 19,
        cidade: "Matão"  
    },
    {
        nome: "Victor",
        idade: 18,
        cidade: "Campinas"
    },
    {
        nome: "Pedro",
        idade: 19,
        cidade: "Campinas"
    }
];

console.log("Lista de Pessoas:");
pessoas.forEach(pessoa => {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
});

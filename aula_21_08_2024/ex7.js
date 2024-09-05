class Livros {
    constructor(nome, quantidade, preco, autor, edicao) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.autor = autor;
        this.edicao = edicao;

    }
    emprestar(quantidade){

        if (this.quantidade <= 0) {
            console.log('Sem livro disponível');
        } else{ 
            this.quantidade -= quantidade
            console.log('Livro Emprestado');
        }
        
    }
    devolver(quantidade){
        this.quantidade += quantidade
        console.log('Livro Devolvido');

    }
}   
const meuLivro = new Livros ('Senhor dos Anéis',1,100,'joazinho',1);
console.log(meuLivro)
meuLivro.emprestar(1)
console.log(meuLivro)
meuLivro.devolver(2)
console.log(meuLivro)
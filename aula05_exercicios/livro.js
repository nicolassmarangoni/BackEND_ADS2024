//exercicio5
let livro = {
    titulo : "O Pequeno Principe",
    autor : "Antoine de Saint-Exupéry",
    ano: 1998,
    genero: "fantasia",
}
console.log(livro);

let dataobj = new Date();
let anoAtual = dataobj.getFullYear();
let publicacao = 1998

//exercicio6
let livro2 = {
    titulo : "O Pequeno Principe",
    autor : "Antoine de Saint-Exupéry",
    publicacao: livro.publicacao,
    idadePublicacao : anoAtual - publicacao,
    genero: "fantasia",
    
}
console.log(livro2);

//exercicio7

let livro3 = {
    titulo : "O Pequeno Principe",
    autor : "Antoine de Saint-Exupéry",
    publicacao: livro.publicacao,
    idadePublicacao : anoAtual - publicacao,
    genero: "fantasia",
    
}
console.log(livro3.titulo)

//exercicio8

let livro4 = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    avaliacao: null,
  }
  
  function avaliar(novaAvaliacao) {
    if (livro4.avaliacao == null) {
      livro4.avaliacao = novaAvaliacao;
      console.log(`Nova avaliação adicionada: ${livro4.avaliacao}`);
    } else {
      console.log("O livro já possui alguma avaliação.");
    }
  }
  
  avaliar(4);


//exercicio9
let livro5 = {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943,  
    genero: "Fantasia",   
    idadePublicacao : anoAtual - publicacao,
};

console.log("Livro original:", livro5);

livro5.genero = "Aventura";

console.log("Livro após alteração:", livro5);

//exercicio10

let livro6 = {
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  anoPublicacao: 1943,  
  genero: "Fantasia",   
  idadePublicacao : anoAtual - publicacao,
};

delete livro6.avaliacao;

console.log("Livro após exclusão da avaliação:", livro6);


//exercicio11
let livro7 = {
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  anoPublicacao: 1943,  
  genero: "Fantasia",   
  idadePublicacao : anoAtual - publicacao,
};

console.log("Livro original:", livro7);

livro7.genero = "Aventura";

console.log("Livro após alteração:", livro7);


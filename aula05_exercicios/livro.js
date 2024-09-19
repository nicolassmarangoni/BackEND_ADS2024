
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
c
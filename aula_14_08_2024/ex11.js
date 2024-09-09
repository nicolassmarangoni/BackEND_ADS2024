const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function saudacao(nomePessoa) {
  return `Olá, ${nomePessoa}! Seja bem-vindo(a)!`;
}

rl.question('Digite seu nome: ', (nomePessoa) => {
  const mensagem = saudacao(nomePessoa); 
  console.log(mensagem);
  rl.close(); 
});

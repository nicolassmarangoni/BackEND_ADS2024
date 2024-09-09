const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function verificaridade(idade) {
    if (idade >=18 ){
        return console.log('voce já é maior de 18');
    }  
 }


 rl.question('Digite sua idade: ', (entrada) => {
    const idade = parseInt(entrada, 10); // Converte a entrada para um número inteiro
    if (isNaN(idade)) {
      console.log('Por favor, digite um número válido.');
    } else {
      const mensagem = verificaridade(idade); // Chama a função com a idade fornecida
      console.log(mensagem); // Exibe a mensagem no console
    }
    rl.close(); // Fecha a interface de leitura
  });
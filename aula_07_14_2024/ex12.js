const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quantos litros foram abastecidos?', (litrosInput) => {
    var litros = parseFloat(litrosInput); // 

        function valoraPagar() {
            var result = litros * 5.50
            return result;
        }

        console.log('O valor a pagar é R$', valoraPagar());
        rl.close();
    });

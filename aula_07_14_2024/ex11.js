const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o salário bruto', (salarioInput) => {
    var salario = parseFloat(salarioInput); // 

        function novoSalario() {
            var result = salario * 0.80
            return result;
        }

        console.log('O salário Liquido é', novoSalario());
        rl.close();
    });

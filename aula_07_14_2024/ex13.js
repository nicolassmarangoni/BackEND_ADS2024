const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quantos dias a maquina fica ligada?', (diasInput) => {
    var dias = parseFloat(diasInput); 
    
    rl.question('Quantas horas a maquina fica ligada?', (horasInput) => {
        var horas = parseFloat(horasInput); 

        function valoraPagar() {
            var result = (dias * horas) * 1750 * 0.75
            return result;
        }

        console.log('O valor a pagar é R$', valoraPagar());
        rl.close();
    });
});
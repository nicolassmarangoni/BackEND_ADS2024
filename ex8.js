const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o primeiro valor da base: ', (baseInput) => {
    var base = parseFloat(baseInput); // 
    
    rl.question('Digite o valor da altura: ', (alturaInput) => {
        var altura = parseFloat(alturaInput); 
        
        function area() {
            var result = (base * altura) / 2;
            return result;
        }

        console.log('A área do triângulo é:', area());
        rl.close();
    });
});

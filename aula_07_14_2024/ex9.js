const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o raio ', (raioInput) => {
    var raio = parseFloat(raioInput); // 
    
        function area() {
            var result = (raio*2)*3.14;
            return result;
        }

        console.log('A área do seu circulo', area());
        rl.close();
    });

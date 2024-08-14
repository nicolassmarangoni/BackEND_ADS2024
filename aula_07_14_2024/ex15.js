const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual sua altura em metros? ', (alturaInput) => {
    const altura = parseFloat(alturaInput);

    rl.question('Qual seu peso em quilogramas? ', (pesoInput) => {
        const peso = parseFloat(pesoInput);

        function calcularIMC() {
            return peso / (altura * altura);
        }

        const imc = calcularIMC();

        if (imc < 18.5) {
            console.log("Abaixo do peso");
        } else if (imc >= 18.5 && imc < 24.9) {
            console.log("Peso normal");
        } else if (imc >= 25 && imc < 29.9) {
            console.log("Sobrepeso");
        } else if (imc >= 30 && imc < 34.9) {
            console.log("Obesidade grau 1");
        } else if (imc >= 35 && imc < 39.9) {
            console.log("Obesidade grau 2");
        } else if (imc >= 40) {
            console.log("Obesidade grau 3");
        }

        rl.close();
    });
});

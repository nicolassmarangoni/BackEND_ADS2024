// Criação do objeto calculadora
const calculadora = {
    // Método para soma
    soma: function(a, b) {
        return a + b;
    },

    // Método para subtração
    subtracao: function(a, b) {
        return a - b;
    },

    // Método para multiplicação
    multiplicacao: function(a, b) {
        return a * b;
    },

    // Método para divisão
    divisao: function(a, b) {
        if (b === 0) {
            return "Erro: Divisão por zero não é permitida.";
        }
        return a / b;
    },

    // Método para calcular média
    calcularMedia: function(numeros) {
        const somaTotal = numeros.reduce((acc, num) => acc + num, 0);
        return somaTotal / numeros.length;
    }
};

// a) Chamando cada função e imprimindo os resultados
console.log("Soma: ", calculadora.soma(10, 5));                 // 15
console.log("Subtração: ", calculadora.subtracao(10, 5));      // 5
console.log("Multiplicação: ", calculadora.multiplicacao(10, 5)); // 50
console.log("Divisão: ", calculadora.divisao(10, 5));           // 2
console.log("Divisão por zero: ", calculadora.divisao(10, 0));  // Erro: Divisão por zero não é permitida.

// b) Chamando a função calcularMedia
const numeros = [10, 20, 30, 40, 50];
console.log("Média: ", calculadora.calcularMedia(numeros));      // 30

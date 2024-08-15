const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quanto o aluno tirou na primeira prova? ', (nota1Input) => {
    const nota1 = parseFloat(nota1Input);

    rl.question('Quanto o aluno tirou na segunda prova? ', (nota2Input) => {
        const nota2 = parseFloat(nota2Input);

        rl.question('Quanto o aluno tirou na terceira prova? ', (nota3Input) => {
            const nota3 = parseFloat(nota3Input);

            function media() {
                return (nota1 + nota2 + nota3) / 3;
            }

            const resultadoMedia = media();

            if (resultadoMedia > 6) {
                console.log("Aprovado");
            } else if (resultadoMedia >= 4 && resultadoMedia <= 5) {
                console.log("Exame");
            } else {
                console.log("Reprovado");
            }

            rl.close();
        });
    });
});


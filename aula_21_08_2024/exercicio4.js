const readline = require('readline');

class Cliente {
    constructor(nome,profissao,saldo) {
        this.nome = nome;
        this.profissao = profissao;
        this.saldo = saldo;
    }
   

    realizar_pix(valor){
        if(valor<=0 ){
            console.log('Valor Incorreto');
        } else if (valor > this.saldo){
            console.log ('Sem saldo');
        } else {
            this.saldo -=valor
            }
        }
    realizar_emprestimo(valor){
        if(valor<=0){
            console.log('valor incorreto');
        } else if ( valor > this.saldo) {
            console.log ('Sem saldo');
        } else {
            this.saldo += valor;
            console.log ('Empréstimo Realizado')
        }
        
    }
    realizar_saque(valor){
        if(saldo<=0 ){
            console.log('Sem SALDO');
        } else {
            this.saldo -=valor
            console.log ('Saque Realizado');

        }
    }
    realizar_extrato(){
        console.log(`seu saldo é ${this.saldo}`)
    }
}
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let cliente = null;

const iniciarPrograma = () => {
    if (cliente === null) {
        r1.question('Qual é o seu nome? ', (nome) => {
            r1.question('Qual é a sua profissão? ', (profissao) => {
                r1.question('Qual é o seu saldo inicial? ', (saldo) => {
                    saldo = parseFloat(saldo);
                    if (isNaN(saldo)) {
                        console.log('Saldo inválido.');
                        r1.close();
                        return;
                    }
                    cliente = new Cliente(nome, profissao, saldo);
                    menu();
                });
            });
        });
    } else {
        menu();
    }
};

const menu = () => {
    console.log('\nEscolha uma opção:');
    console.log('1. Realizar PIX');
    console.log('2. Realizar Empréstimo');
    console.log('3. Realizar Saque');
    console.log('4. Ver Extrato');
    console.log('5. Sair');

    r1.question('Digite o número da opção desejada: ', (opcao) => {
        switch (opcao) {
            case '1':
                r1.question('Digite o valor do PIX: ', (valor) => {
                    valor = parseFloat(valor);
                    if (isNaN(valor)) {
                        console.log('Valor inválido.');
                    } else {
                        cliente.realizar_pix(valor);
                    }
                    menu();
                });
                break;
            case '2':
                r1.question('Digite o valor do empréstimo: ', (valor) => {
                    valor = parseFloat(valor);
                    if (isNaN(valor)) {
                        console.log('Valor inválido.');
                    } else {
                        cliente.realizar_emprestimo(valor);
                    }
                    menu();
                });
                break;
            case '3':
                r1.question('Digite o valor do saque: ', (valor) => {
                    valor = parseFloat(valor);
                    if (isNaN(valor)) {
                        console.log('Valor inválido.');
                    } else {
                        cliente.realizar_saque(valor);
                    }
                    menu();
                });
                break;
            case '4':
                cliente.realizar_extrato();
                menu();
                break;
            case '5':
                console.log('Obrigado por usar o sistema. Até logo!');
                r1.close();
                break;
            default:
                console.log('Opção inválida.');
                menu();
                break;
        }
    });
};

iniciarPrograma();
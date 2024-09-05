let saldo = 300
let deposito = 100
let saque = 50

let operacaoDeposito = saldo + deposito;
let operacaoSaque = operacaoDeposito - saque;

console.log(`Saldo inicial: R$ ${saldo}`);
console.log(`Depósito: R$ ${deposito}`);
console.log(`Saque: R$ ${saque}`);
console.log(`Saldo após depósito: R$ ${operacaoDeposito}`);
console.log(`Saldo final após saque: R$ ${operacaoSaque}`);
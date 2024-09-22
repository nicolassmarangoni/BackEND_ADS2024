
const contaBancaria = {
    titular: "Nicolas",
    saldo: 1000,  

 
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Novo saldo: R$ ${this.saldo}`);
    },


    sacar: function(valor) {
        if (valor > this.saldo) {
            console.log("Erro: Saldo insuficiente para saque.");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado. Saldo restante: R$ ${this.saldo}`);
        }
    }
};


const cliente = {
    nome: "Nicolas Marangoni",
    conta: contaBancaria
};


function mostrarSaldo(cliente) {
    console.log(`Nome: ${cliente.nome}, Saldo: R$ ${cliente.conta.saldo}`);
}


cliente.conta.depositar(500);  
cliente.conta.sacar(200);      
cliente.conta.sacar(1500);     

mostrarSaldo(cliente);

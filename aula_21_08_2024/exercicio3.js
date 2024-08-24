class Automovel {
    constructor(cor, modelo, combustivel, rodas) {
        this.cor = cor;
        this.modelo = modelo;
        this.combustivel = combustivel;
        this.rodas = rodas;
    }

    ligar() {
        console.log(`${this.modelo} está ligado.`);
    }

    desligar() {
        console.log(`${this.modelo} está desligado.`);
    }
}

class Carro extends Automovel {
    constructor(cor, modelo, combustivel, quantidadeRodas, temVidroEletrico = true) {
        super(cor, modelo, combustivel, quantidadeRodas);
        this.temVidroEletrico = temVidroEletrico;
        this.vidroAberto = false;
    }

    abrirVidro() {
        if (this.temVidroEletrico) {
            this.vidroAberto = true;
            console.log(`${this.modelo}: Vidro aberto.`);
        } else {
            console.log(`${this.modelo}: Este carro não tem vidro elétrico.`);
        }
    }

    fecharVidro() {
        if (this.temVidroEletrico) {
            this.vidroAberto = false;
            console.log(`${this.modelo}: Vidro fechado.`);
        } else {
            console.log(`${this.modelo}: Este carro não tem vidro elétrico.`);
        }
    }
}

class Caminhao extends Automovel {
    constructor(cor, modelo, combustivel, rodas) {
        super(cor, modelo, combustivel, rodas);
    }
}

class Moto extends Automovel {
    constructor(cor, modelo, combustivel, quantidadeRodas) {
        super(cor, modelo, combustivel, quantidadeRodas);
    }
}

const meuCarro = new Carro('preto', 'corsa', 'Gasolina', 4);
meuCarro.ligar();
meuCarro.abrirVidro();
meuCarro.fecharVidro(); 
meuCarro.desligar();
console.log(meuCarro)
class Produtos {
    constructor(nome, quantidade, preco, comunicacao, consumo) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
        this.comunicacao = comunicacao;
        this.consumo = consumo;
        
    }

}

class fritadeira extends Produtos {
    constructor(nome, quantidade, preco, comunicacao, consumo,temperatura) {
        super(nome, quantidade, preco, comunicacao, consumo);
        this.temperatura = temperatura

        
    }
    ligar(){
        console.log(`O aparelho está Ligado`);
        
    }
    desligar(){
        console.log('O aparelho está desligado')

    }
    ajustar_temperatura(NovaTemperatura){
        this.temperatura = NovaTemperatura 
        console.log(`temperatura ajustada ${NovaTemperatura}`)
    }
}
class televisao extends Produtos {
    constructor(nome, quantidade, preco, comunicacao, consumo) {
        super(nome, quantidade, preco, comunicacao, consumo,);
    }
}

class arCondicionado extends Produtos {
    constructor(nome, quantidade, preco, comunicacao, consumo,temperatura) {
        super(nome, quantidade, preco, comunicacao, consumo,temperatura);
        this.temperatura = temperatura;

        }
        ajustar_temperatura(NovaTemperatura){
            this.temperatura = NovaTemperatura 
            console.log(`temperatura ajustada ${NovaTemperatura}`)
        }
    }

const meuArcondicionado = new arCondicionado('brastemp',1,3500,'não tem',300,3000);
console.log(meuArcondicionado)
meuArcondicionado.ajustar_temperatura(36000);
console.log(meuArcondicionado)
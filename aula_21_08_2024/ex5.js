class Maquina {
    constructor(nome,{eixo},rotacoes,consumo) {
        this.nome = nome;
        this.eixo = eixo;
        this.rotacoes = rotacoes;
        this.consumo = consumo;
        

    }
}
class Furadeira extends Maquina {
    constructor(nome, rotacoes, consumo,velocidade) {
        super(nome, rotacoes, consumo);
        this.velocidade = velocidade;
        this.consumo = consumo
        
        
    }

    ligar_motor(){
        console.log(`O motor está Ligado`);
        
    }
        
    desligar_motor(){
        console.log('O motor esta desligado')

    }

    definir_velocidade(NovaVelocidade){
        this.velocidade = NovaVelocidade
            console.log(`Velocidade ajustada para ${this.NovaVelocidade}`)
    
    
}
            
}
const minhaFuradeira = new Furadeira('spec',30,300,400);
minhaFuradeira.definir_velocidade(90000);
console.log(minhaFuradeira)
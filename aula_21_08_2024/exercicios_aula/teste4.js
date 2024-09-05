class Fruta{
    constructor(){
        this.sabor = "Doce";
        this.nome= "Laranja";
        this.cor= "Verde";
        this.peso = 400;
        this.diasdecolheita = 5;
        this.isMadura = null
    }
    madura(diasParaMadura){
        if(diasParaMadura >= this.diasdecolheita) {
            console.log(`A ${this.nome} está madura`);
        } else {
            console.log(`A ${this.nome} não está madura`)
        }
    
        }

    }
const Tangeria= new Fruta();
Tangeria.madura(6);
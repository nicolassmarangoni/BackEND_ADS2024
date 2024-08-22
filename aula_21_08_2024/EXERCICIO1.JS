

class Carro{

    constructor(){
        this.marca= null; 
        this.modelo=null;
        this.ano=null;
        this.motor=false;

    }

    ligar_motor(){
        this.motor = true
        }
    
    desligar_motor(){
        this.motor=false
    }
    verificar_motor(){
        if(this.motor == true) 
            console.log(`O motor está Ligado`);
    }
       


}
const novoCarro = new Carro();
novoCarro.marca = "Honda";
novoCarro.modelo = "Fit";
novoCarro.ano = "2015"
novoCarro.ligar_motor();
novoCarro.verificar_motor();
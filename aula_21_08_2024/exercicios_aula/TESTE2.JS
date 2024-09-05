class Usuario{
    constructor(){
        this.nome = null;
        this.login=null;
        this.senha=null;
        this.cpf = null;
        this.celular = null;
    }
    exibir_info(){
        console.log(`Nome do usuario: ${this.nome}`);
        console.log(`Login: ${this.login}`);
        console.log(`Senha: ${this.senha}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Celular: ${this.celular}`);
    }
    verifica_login(user,senha){
        if((user == this.login) && (senha == this.senha)){
           console.log(`Login correto ! Bem vindo ${user}`);
        }
        else{
            console.log(`Login incorreto ! Tente novamente !`);

        }

    }
}

 
const Usuario1 = new Usuario(); // cria um objeto Usuario 1 a partir da classe Usuario
Usuario1.nome="Daniel Vieira";
Usuario1.login="Daniel";
Usuario1.senha="1234";
Usuario1.cpf="12025678942";
Usuario1.celular="19984315647";
Usuario1.exibir_info();
Usuario1.verifica_login("Daniel","12345");

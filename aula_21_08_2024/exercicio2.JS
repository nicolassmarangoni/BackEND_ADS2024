class Pessoa {
    constructor(nome, idade, profissao, salario) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        this.salario = salario;
    }

    exibetrabalho(nomeempresa, tempoTrabalho) {
        console.log(nomeempresa); 
        console.log(tempoTrabalho); 
    }
}

const novaPessoa = new Pessoa('Nicolas', 21, 'técnico', 3000);

novaPessoa.exibetrabalho('CPFL', 4);

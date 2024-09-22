const pessoa = {
    nome: "Jose Afonso",
    dataNascimento: "23/04/1990",
    carteiraIdentidade: "42356-X",
    email: "joseafonso@gmail.com",
    telefone: "19984450873",
    cidade: "Campinas",
    estado: "São Paulo",
    endereco: {
        rua: "Rua do Jardins",        
        cidade: "Campinas",   
        estado: "São Paulo"  
    }
  };
  
  
  function mostrarInfoPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}`);
    console.log(`Data de Nascimento: ${pessoa.dataNascimento}`);
    console.log(`Carteira de Identidade: ${pessoa.carteiraIdentidade}`);
    console.log(`Email: ${pessoa.email}`);
    console.log(`Telefone: ${pessoa.telefone}`);
    console.log(`Cidade: ${pessoa.cidade}`);
    console.log(`Estado: ${pessoa.estado}`);
    
    console.log("Endereço:");
    console.log(`Rua: ${pessoa.endereco.rua}`);
    console.log(`Cidade: ${pessoa.endereco.cidade}`);
    console.log(`Estado: ${pessoa.endereco.estado}`);
  }
  
  
  mostrarInfoPessoa(pessoa);
  
  
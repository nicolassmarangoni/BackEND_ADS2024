const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+552877776666",
    cidade: "Cachoeiro de Itapemirim",
    estado: "ES"
  };
  pessoa.seguroSocial = "123-45-6789";  
  pessoa.cpf = "123.456.789-00";         
  
  // Função para exibir relatório com os 4 primeiros dígitos do CPF e da carteira de identidade
  function exibirRelatorio(pessoa) {
      const cpfParte = pessoa.cpf.substring(0, 4); 
      const identidadeParte = pessoa.carteiraIdentidade.substring(0, 4); 
      console.log(`Nome: ${pessoa.nome}`);
      console.log(`Data de Nascimento: ${pessoa.dataNascimento}`);
      console.log(`Carteira de Identidade: ${identidadeParte}****`);
      console.log(`CPF: ${cpfParte}*****`);
      console.log(`Email: ${pessoa.email}`);
      console.log(`Telefone: ${pessoa.telefone}`);
      console.log(`Cidade: ${pessoa.cidade}`);
      console.log(`Estado: ${pessoa.estado}`);
  }
  
  exibirRelatorio(pessoa);
    
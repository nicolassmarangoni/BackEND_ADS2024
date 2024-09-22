let estudante = {
    nome: "Nicolas Marangoni",               
    matricula: 350043,                 
    curso: "Análise e Desenvolvimento  de sistemas",     
    materias: ["IA", "Engenharia de Software", "FrontEnd", "BackEnd"] 
  };
  
  
  console.log("Detalhes do Estudante:");
  console.log(`Nome: ${estudante.nome}`);
  console.log(`Matrícula: ${estudante.matricula}`);
  console.log(`Curso: ${estudante.curso}`);
  console.log(`Matérias: ${estudante.materias.join(", ")}`);  
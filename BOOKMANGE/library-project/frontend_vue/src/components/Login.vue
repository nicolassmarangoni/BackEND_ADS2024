<template>
    <div class="container">
      <div class="content first-content">
        <div class="first-column">
          <h2 class="title title-primary">Bem Vindo a Biblioteca Mange!</h2>
        </div>
        <div class="second-column">
          <h2 class="title title-second">Login</h2>
          <form class="form" @submit.prevent="handleLogin">
            <label class="label-input">
              <i class="far fa-user icon-modify"></i>
              <input type="text" v-model="username" placeholder="Nome de Usuário" required>
            </label>
            
            <label class="label-input">
              <i class="fas fa-lock icon-modify"></i>
              <input type="password" v-model="password" placeholder="Senha" required>
            </label>
            
            <button class="btn btn-second">eNTRAR</button>        
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const username = ref('');
  const password = ref('');
  
  const handleLogin = () => {
    // Lógica para autenticação do usuário
    console.log('Usuário:', username.value);
    console.log('Senha:', password.value);
    
    // Aqui você pode adicionar a lógica para autenticar o usuário (ex: chamada a uma API)
    
    // Se a autenticação for bem-sucedida, redirecione para outra página
    // router.push('/home'); // Exemplo de redirecionamento
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>
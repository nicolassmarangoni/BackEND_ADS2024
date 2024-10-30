<template>
    <div class="container">
      <div class="content first-content">
        <div class="first-column">
          <h2 class="title title-primary">Bem Vindo a Biblioteca Mange!</h2>
          <button type="button" class="btn btn-second" @click="goToLogin">Entrar</button>
        </div>
        <div class="second-column">
          <h2 class="title title-second">Criar Conta</h2>
          <form class="form" @submit.prevent="handleRegister">
            <label class="label-input">
              <i class="far fa-user icon-modify"></i>
              <input type="text" v-model="username" placeholder="Nome de Usuário" required>
            </label>
            
            <label class="label-input">
              <i class="fas fa-lock icon-modify"></i>
              <input type="password" v-model="password" placeholder="Senha" required>
            </label>
            
            <button class="btn btn-second">Cadastrar</button>        
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
  
  const handleRegister = () => {
    // Lógica para registrar o usuário
    console.log('Usuário:', username.value);
    console.log('Senha:', password.value);
    // Aqui você pode adicionar a lógica para enviar os dados para um servidor
  };
  
  const goToLogin = () => {
    router.push('/login'); // Redireciona para a página de login
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>
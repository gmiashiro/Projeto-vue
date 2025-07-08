<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Variáveis reativas para cada campo do formulário
const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

// Uma variável reativa para armazenar a mensagem de erro da senha
const passwordError = ref('');

const handleRegister = () => {
  // 1. LÓGICA DE VALIDAÇÃO
  // Primeiro, limpamos qualquer erro anterior
  passwordError.value = '';

  // Verificamos se as senhas são iguais
  if (password.value !== confirmPassword.value) {
    // Se não forem, definimos a mensagem de erro e paramos a função
    passwordError.value = 'As senhas não conferem.';
    return; // Interrompe a execução
  }

  // Se a validação passar, continuamos
  console.log('Tentativa de Cadastro com:', {
    name: name.value,
    email: email.value,
    password: password.value,
  });
  alert('Cadastro submetido! Verifique o console.');
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <h2 class="card-title text-center mb-4">Cadastro</h2>
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="name" class="form-label">Nome Completo</label>
                <input type="text" class="form-control" id="name" v-model="name" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Senha</label>
                <input type="password" class="form-control" id="password" v-model="password" required />
              </div>
              <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirmar Senha</label>
                <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required />
                <div v-if="passwordError" class="text-danger small mt-1">
                  {{ passwordError }}
                </div>
              </div>
              <button type="submit" class="btn btn-primary w-100">Criar Conta</button>
            </form>
          </div>
           <div class="card-footer text-center py-3">
            <RouterLink to="/login" class="text-muted">Já tem uma conta? Faça o login</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 4rem;
}
.text-danger {
  /* A classe do Bootstrap já deixa o texto vermelho, mas podemos customizar se quisermos */
  font-weight: 500;
}
</style>
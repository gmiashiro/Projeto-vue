<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router'; // importa o useRouter
import { useAuthStore } from '@/stores/authStore'; // Importa a store

// Usamos ref para criar variáveis reativas que irão armazenar os valores dos inputs
const email = ref('');
const password = ref('');

const authStore = useAuthStore(); // Cria uma instância da store para usar no componente
const router = useRouter(); // Cria uma instância do router

// Função que será chamada ao submeter o formulário
const handleLogin = () => {
  // Chama a ação de login da store com os dados do formulário
  authStore.login(email.value, password.value);

  router.push('/');
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <h2 class="card-title text-center mb-4">Login</h2>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" required />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Senha</label>
                <input type="password" class="form-control" id="password" v-model="password" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">Entrar</button>
            </form>
            <div class="mt-3 text-center">
              <RouterLink to="/forgot-password" class="text-muted small">Esqueci a senha</RouterLink>
            </div>
          </div>
          <div class="card-footer text-center py-3">
            <RouterLink to="/register" class="text-muted">Não tem uma conta? Cadastre-se</RouterLink>
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
</style>
<script setup lang="ts">
// Vamos usar a mesma imagem, mas agora como um logo
import logoImage from '@/assets/logo.svg';
import { RouterLink, useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';

// INSTANCIAMOS A STORE E O ROUTER
const authStore = useAuthStore();
const router = useRouter();

// CRIAMOS A FUNÇÃO DE LOGOUT
const handleLogout = () => {
  authStore.logout(); // Chama a ação de logout da store
  router.push('/login'); // Redireciona o usuário para a página de login
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <RouterLink to="/" class="navbar-brand fw-bold d-flex align-items-center">
          <img :src="logoImage" alt="ProjectBase Logo" class="logo-img me-2" />
          <span>ProjectBase</span>
        </RouterLink>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" v-if="authStore.isLoggedIn">
            <li class="nav-item">
              <RouterLink to="/dashboard" class="nav-link">Dashboard</RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile</a>
            </li>
          </ul>
        </div>
        
        <div class="d-flex">
          <button v-if="authStore.isLoggedIn" @click="handleLogout" class="btn btn-outline-primary">Sair</button>
          
          <template v-else>
            <RouterLink to="/login" class="btn btn-outline-primary me-2">Entrar</RouterLink>
            <RouterLink to="/register" class="btn btn-primary">Cadastre-se</RouterLink>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.logo-img {
  height: 40px; /* Define uma altura fixa para o logo */
  width: auto;
}
</style>
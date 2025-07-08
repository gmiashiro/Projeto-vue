<script setup lang="ts">
// Vamos usar a mesma imagem, mas agora como um logo
import logoImage from '@/assets/logo.svg';
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile</a>
            </li>
          </ul>
        </div>
        
        <div class="d-flex">
          <RouterLink to="/login" class="btn btn-outline-primary me-2">Entrar</RouterLink>
          <RouterLink to="/register" class="btn btn-primary">Cadastre-se</RouterLink>
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
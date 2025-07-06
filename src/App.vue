<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';

</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <FeaturesSection />
  </main>
</template>

<style>
body {
  /* Aplica o gradiente solicitado ao fundo da página */
  background: linear-gradient(to bottom, #FFFFFF, #a0cbf5);
  background-repeat: no-repeat; /* Garante que o gradiente não se repita */
  min-height: 100vh; /* Garante que o fundo cubra a tela toda mesmo com pouco conteúdo */
}
</style>
<script setup lang="ts">
// Nenhuma lógica de script necessária por enquanto
</script>

<template>
  <div class="features-section bg-white py-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col text-center">
          <h2 class="fw-bold">Powerful Features</h2>
        </div>
      </div>

      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center p-4">
              <h5 class="card-title fw-bold">Título de teste</h5>
              <p class="card-text">
                Esta é uma breve descrição da feature, destacando como ela pode ajudar o usuário a ser mais produtivo.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center p-4">
              <h5 class="card-title fw-bold">Título de teste</h5>
              <p class="card-text">
                Esta é uma breve descrição da feature, destacando como ela pode ajudar o usuário a ser mais produtivo.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <div class="card-body text-center p-4">
              <h5 class="card-title fw-bold">Título de teste</h5>
              <p class="card-text">
                Esta é uma breve descrição da feature, destacando como ela pode ajudar o usuário a ser mais produtivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card {
  border: none; /* Remove a borda padrão para um look mais limpo */
  transition: transform 0.2s ease-in-out;
}
.card:hover {
  transform: translateY(-5px); /* Efeito sutil ao passar o mouse */
}
</style>
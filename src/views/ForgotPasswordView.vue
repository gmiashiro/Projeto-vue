<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Criamos uma variável reativa para armazenar o e-mail digitado pelo usuário
const email = ref('');

// Esta função será chamada quando o formulário for enviado
const handlePasswordReset = () => {
  // Por enquanto, esta função apenas simula o envio.
  // No futuro, aqui você faria uma chamada para sua API de backend,
  // enviando o e-mail para que o servidor possa mandar o link de recuperação.
  if (email.value) {
    console.log(`Solicitação de recuperação de senha para o e-mail: ${email.value}`);
    alert(`Um link de recuperação foi enviado para ${email.value} (simulação).`);
  } else {
    alert('Por favor, insira um endereço de e-mail.');
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <h2 class="card-title text-center mb-3">Recuperar Senha</h2>
            <p class="card-text text-center text-muted mb-4">
              Digite seu e-mail e enviaremos um link para você redefinir sua senha.
            </p>
            <form @submit.prevent="handlePasswordReset">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" placeholder="seuemail@exemplo.com" required />
              </div>
              <button type="submit" class="btn btn-primary w-100">Enviar Link de Recuperação</button>
            </form>
          </div>
          <div class="card-footer text-center py-3">
            <RouterLink to="/login" class="text-muted">Voltar para o Login</RouterLink>
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
<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Product } from '@/interfaces/Product'
import type { ProductPayload } from '@/services/productService'

// O componente aceita um 'produto' existente como propriedade (para o modo de edição)
const props = defineProps<{
  product?: Product | null
}>()

// O componente emite um evento 'submit' com os dados do formulário
const emit = defineEmits<{
  (e: 'submit', payload: ProductPayload): void
}>()

// State local para os campos do formulário
const form = ref<ProductPayload>({
  name: '',
  description: '',
  price: 0,
  stock: 0
})

// 'watch' observa a propriedade 'product'. Se ela mudar (no modo de edição),
// o formulário é preenchido com os dados do produto.
watch(() => props.product, (newProduct) => {
  if (newProduct) {
    form.value = { ...newProduct }
  }
}, { immediate: true }) // 'immediate: true' faz com que ele rode assim que o componente é criado

const handleSubmit = () => {
  // Ao submeter, emite o evento com os dados atuais do formulário
  emit('submit', form.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="name" class="form-label">Nome do Produto</label>
      <input type="text" class="form-control" id="name" v-model="form.name" required>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Descrição</label>
      <textarea class="form-control" id="description" rows="3" v-model="form.description"></textarea>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="price" class="form-label">Preço (R$)</label>
        <input type="number" step="0.01" class="form-control" id="price" v-model.number="form.price" required>
      </div>
      <div class="col-md-6 mb-3">
        <label for="stock" class="form-label">Estoque</label>
        <input type="number" class="form-control" id="stock" v-model.number="form.stock" required>
      </div>
    </div>
    <button type="submit" class="btn btn-primary w-100">Salvar Produto</button>
  </form>
</template>
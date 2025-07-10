<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ProductForm from '@/components/ProductForm.vue'
import { productService, type ProductPayload } from '@/services/productService'
import type { Product } from '@/interfaces/Product'

const router = useRouter()
const route = useRoute() // Para acessar as informações da rota atual

// Pegamos o ID da URL. `route.params.id` será uma string ou undefined.
const productId = ref<number | null>(route.params.id ? Number(route.params.id) : null)

// State para armazenar os dados do produto que será editado
const productToEdit = ref<Product | null>(null)

// Um 'computed' para saber se estamos no modo de edição
const isEditMode = computed(() => productId.value !== null)

// Buscamos os dados do produto se estivermos no modo de edição
onMounted(() => {
  if (isEditMode.value && productId.value) {
    // Usamos o 'find' para simular a busca, já que getProductById não é reativo
    const foundProduct = productService.getProductById(productId.value)
    if (foundProduct) {
      productToEdit.value = foundProduct
    }
  }
})

// A função de 'submit' agora lida com os dois casos
const handleFormSubmit = (payload: ProductPayload) => {
  if (isEditMode.value && productId.value) {
    // Modo Edição
    productService.updateProduct(productId.value, payload)
  } else {
    // Modo Criação
    productService.createProduct(payload)
  }
  router.push('/products')
}
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-sm">
          <div class="card-body p-4">
            <h1 class="card-title text-center mb-4">
              {{ isEditMode ? 'Editar Produto' : 'Adicionar Novo Produto' }}
            </h1>
            <ProductForm :product="productToEdit" @submit="handleFormSubmit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
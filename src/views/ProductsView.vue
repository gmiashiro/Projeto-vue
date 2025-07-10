<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { productService } from '@/services/productService'
import type { Product } from '@/interfaces/Product'

// Criamos uma ref local para armazenar a lista de produtos que virá do serviço
const productList = ref < Product[] > ([])

const loadProducts = () => {
    productList.value = productService.getProducts()
}
// onMounted é um "lifecycle hook" do vue. O código dentro dele é executado assim que o componetne é montado (exibido) na tela.
// Buscar dados
onMounted(loadProducts)

const handleDeleteProduct = (id: number) => {
  // Usamos o 'confirm' do navegador para uma confirmação simples
  if (window.confirm('Tem certeza de que deseja excluir este produto?')) {
    productService.deleteProduct(id)
    // Recarregamos a lista para refletir a exclusão.
    // Como nossa lista no serviço é reativa, em um cenário mais complexo,
    // a lista no componente poderia se atualizar automaticamente.
    // Mas para garantir, recarregamos aqui.
    loadProducts()
  }
}
</script>

<template>
    <div class="container mt-5">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1 class="fw-bold">Produtos</h1>
            <RouterLink to="/products/new" class="btn btn-primary">Adicionar Produto</RouterLink>
        </div>

        <div class="table-responsive">
            <table class="table table-hover align-middle">
                <thead class="table-light">
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Estoque</th>
                        <th scope="col" class="text-end">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in productList" :key="product.id">
                        <th scope="row">{{ product.id }}</th>
                        <td>{{ product.name }}</td>
                        <td>R$ {{ product.price.toFixed(2) }}</td>
                        <td>{{ product.stock }}</td>
                        <td class="text-end">
                            <RouterLink :to="`/products/edit/${product.id}`" class="btn btn-sm btn-outline-secondary me-2">Editar</RouterLink>
                            <button @click="handleDeleteProduct(product.id)" class="btn btn-sm btn-outline-danger">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.container {
  padding-bottom: 4rem;
}
</style>
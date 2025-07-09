<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { productService } from '@/services/productService'
import type { Product } from '@/interfaces/Product'

// Criamos uma ref local para armazenar a lista de produtos que virá do serviço
const productList = ref < Product[] > ([])

// onMounted é um "lifecycle hook" do vue. O código dentro dele é executado assim que o componetne é montado (exibido) na tela.
// Buscar dados
onMounted(() => {
    // Chamamos nosso serviço e preenchemos a lista local
    productList.value = productService.getProducts()
})
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
                            <button class="btn btn-sm btn-outline-secondary me-2">Editar</button>
                            <button class="btn btn-sm btn-outline-danger">Excluir</button>
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
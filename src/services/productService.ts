import { ref } from 'vue'
import type { Product } from '@/interfaces/Product'

// Criamos uma lista de produtos mockados. O 'ref' a torna reativa
// o que será útil quando começar a adicionar e remover os itens
const products = ref<Product[]>([
    { id: 1, name: 'Teclado Mecânico RGB', description: 'Teclado gamer com switches blue e iluminação RGB customizável.', price: 350.50, stock: 15 },
    { id: 2, name: 'Mouse Gamer Sem Fio', description: 'Mouse com 16.000 DPI, 6 botões programáveis e bateria de longa duração.', price: 250.00, stock: 30 },
    { id: 3, name: 'Monitor Ultrawide 29"', description: 'Monitor com resolução 2560x1080, 75Hz, painel IPS.', price: 1200.00, stock: 8 },
    { id: 4, name: 'Headset 7.1 Surround', description: 'Fone de ouvido com som surround 7.1 virtual para imersão total.', price: 450.75, stock: 22 },
])

export type ProductPayload = Omit<Product, 'id'>

// Criamos um "serviço" que exporta funções para interagir com os dados. 
export const productService = {
    // Função para obter todos os produtos
    getProducts: () => {
        return products.value
    },

    // Função para obter um produto por ID (útil para a página de edição)
    getProductById: (id: number) => {
        return products.value.find(p => p.id === id)
    },

    createProduct: (newProductData: ProductPayload) => {
        const newId = Math.max(...products.value.map(p => p.id)) + 1
        const productWithId: Product = {
            id: newId,
            ...newProductData
        }
        products.value.push(productWithId)
        console.log('Produto adicionado:', productWithId)
        return productWithId
    },

    updateProduct: (id: number, productData: ProductPayload) => {
        const index = products.value.findIndex(p => p.id === id)
        if (index !== -1) {
            products.value[index] = { id, ...productData }
            console.log('Produto atualizado:', products.value[index])
            return products.value[index]
        }
    },

    deleteProduct: (id: number) => {
        const index = products.value.findIndex(p => p.id === id)
        if (index !== -1) {
            const deletedProduct = products.value.splice(index, 1)
            console.log('Produto excluído:', deletedProduct[0])
            return true
        }
        return false
    }

    // Aqui será adicionado o createProduct, updateProduct, deleteProduct
}
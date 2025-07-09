import { ref,computed } from 'vue'
import { defineStore } from 'pinia'

interface User {
    name: string;
    email: string;
}

// 'defineStore' é a função do Pinia para criar uma store
// O primeiro argumento 'auth' é um ID único para esta store
export const useAuthStore = defineStore('auth', () => {
    // --STATE--
    // 'State' são as váriaveis reativas, o coração da store
    // Usamos 'ref' para criá-las, assim como nos componentes.
    const user = ref<User | null>(null) // Armazena os dados do usuário logado
    const token = ref<string | null>(null) // Armazena o token de autentição

    // -- GETTERS -- 
    // 'Getters' são como 'computed properties' para a store 
    // Eles derivam um estado sem modificá-lo.
    const isLoggedIn = computed(() => !!token.value) // Retorna true se houver um token, falso caso não haja

   // -- ACTIONS -- 
   // 'Actions' são as funções que podem modificar o state
   // É aqui que colocamos nossa lógica
   function login(email: string, password: string) {
    // SIMULAÇÃO, no caso real seria feito uma chamada para API do backend.

    // Simulando uma resposta de sucesso da API
    const userDataFromApi = { name: 'Gabriel Miashiro', email: email }
    const tokenFromApi = 'fake-jwt-token-123456789'

    // Modificando o state com os dados recebidos
    user.value = userDataFromApi
    token.value = tokenFromApi
    console.log('Usuário Logado com sucesso!', { user: user.value, token: token.value })
   }
   
   function logout () {
    // Para deslogar, limpamos o state
    user.value = null
    token.value = null 
    console.log('Usuário deslogado.')
   }

   // Expondo o state, getters e actions para que os componetes possam usá-los
   return { user, token, isLoggedIn, login, logout}
})
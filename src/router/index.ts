import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores/authStore'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductFormView from '@/views/ProductFormView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/forgot-password',
            name: 'forgot-password',
            component: ForgotPasswordView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView,
            meta: { requiresAuth: true } // Adicionamos um 'meta' campo para marcar esta rota como protegida
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsView,
            meta: { requiresAuth: true } // Marcado como rota protegida
        },
        {
            path: '/products/new',
            name: 'product-new',
            component: ProductFormView,
            meta: { requiresAuth: true }
        },
        {
            path: '/products/edit/:id', // Rota para o formulário de edição com ID dinâmico
            name: 'product-edit',
            component: ProductFormView,
            meta: { requiresAuth: true }
        }
    ]
})

// 4. A GUARDA DE NAVEGAÇÃO
router.beforeEach((to, from, next) => {
    // Pegamos a store de autenticação
    const authStore = useAuthStore();

    // Verificamos se a rota de destino requer autenticação E se o usuário NÃO está logado
    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
        // Se for o caso, redirecionamos para a página de login
        next({ name: 'login' });
    } else {
        // Caso contrário, permitimos que a navegação continue normalmente
        next();
    }
});

export default router
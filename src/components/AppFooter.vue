<script setup lang="ts">
import logoImage from '@/assets/logo.svg'
</script>

<template>
    <footer class="footer bg-light py-3 mt-auto">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-md-4">
                    <a class="navbar-brand d-flex align-items-center" href="#">
                        <img :src="logoImage" alt="Footer Logo" class="logo-img me-2">
                        <span>ProjectBase</span>
                    </a>
                </div>

                <div class="col-md-4 text-center">
                    <a href="https://www.instagram.com/_miashiro_/" class="mx-2 text-muted" target="_blank" aria-label="Instagram"><i class="bi bi-instagram fs-4"></i></a>
                    <a href="https://www.linkedin.com/in/gabriel-miashiro-freitas-75aa9b231/" class="mx-2 text-muted" target="_blank" aria-label="LinkedIn"><i class="bi bi-linkedin fs-4"></i></a>
                    <a href="https://github.com/gmiashiro" class="mx-2 text-muted" target="_blank" aria-label="GitHub"><i class="bi bi-github fs-4"></i></a>
                </div>

                <div class="col-md-4 text-end">
                    <span class="text-muted">© 2025 Desenvolvido por: Gabriel Miashiro</span>
                </div>

            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    border-top: 1px solid #dee2e6;
}
.logo-img {
    height: 30px;
    width: auto;
}
.text-muted i:hover {
    color: var(--bs-primary) !important;
    transition: color 0.2s;
}
</style>
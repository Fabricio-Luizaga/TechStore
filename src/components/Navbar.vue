<template>
  <header class="bg-slate-900 text-white shadow-lg sticky top-0 z-50">

    <div class="max-w-7xl mx-auto px-8">

      <div class="flex justify-between items-center h-20">

        <!-- Logo -->
        <RouterLink
          to="/"
          class="flex items-center gap-3"
        >

          <div
            class="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-2xl"
          >
            💻
          </div>

          <div>

            <h2 class="text-2xl font-bold">
              TechStore
            </h2>

            <p class="text-xs text-gray-400">
              Tecnología para todos
            </p>

          </div>

        </RouterLink>

        <!-- Menú -->

        <nav class="flex items-center gap-8">

          <RouterLink
            to="/"
            class="hover:text-cyan-400 transition"
            active-class="text-cyan-400 font-bold"
          >
            Inicio
          </RouterLink>

          <RouterLink
            to="/catalog"
            class="hover:text-cyan-400 transition"
            active-class="text-cyan-400 font-bold"
          >
            Catálogo
          </RouterLink>

          <RouterLink
            to="/about"
            class="hover:text-cyan-400 transition"
            active-class="text-cyan-400 font-bold"
          >
            Nosotros
          </RouterLink>

          <RouterLink
            to="/contact"
            class="hover:text-cyan-400 transition"
            active-class="text-cyan-400 font-bold"
          >
            Contacto
          </RouterLink>

          <RouterLink
            to="/login"
            class="hover:text-cyan-400 transition"
            active-class="text-cyan-400 font-bold"
          >
            Dashboard
          </RouterLink>

          <!-- Carrito -->

          <RouterLink
            to="/cart"
            class="relative"
          >

            🛒

            <span
              v-if="cart.totalItems > 0"
              class="absolute -top-3 -right-3 bg-red-600 text-xs rounded-full w-6 h-6 flex items-center justify-center"
            >
              {{ cart.totalItems }}
            </span>

          </RouterLink>

        </nav>

      </div>

    </div>

  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
</script> 
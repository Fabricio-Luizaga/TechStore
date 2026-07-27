<template>
  <aside class="w-64 bg-slate-900 text-white min-h-screen p-6">

    <h2 class="text-3xl font-bold text-cyan-400 mb-10">
      TechStore
    </h2>
    <div class="mb-10 text-center">

        <div
            class="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center text-4xl mx-auto"
        >
            👤
        </div>

        <h2 class="mt-4 text-xl font-bold">
            Administrador
        </h2>

        <p class="text-gray-400 text-sm">
            admin
        </p>

    </div>
    <nav class="space-y-3">

      <RouterLink
        to="/admin"
        class="block px-4 py-3 rounded-lg hover:bg-cyan-600 transition"
      >
        📊 Dashboard
      </RouterLink>

      <RouterLink
        to="/catalog"
        class="block px-4 py-3 rounded-lg hover:bg-cyan-600 transition"
      >
        📦 Catálogo
      </RouterLink>

      <RouterLink
        to="/cart"
        class="block px-4 py-3 rounded-lg hover:bg-cyan-600 transition"
      >
        🛒 Carrito
      </RouterLink>

      <RouterLink
        to="/"
        class="block px-4 py-3 rounded-lg hover:bg-cyan-600 transition"
      >
        🏠 Inicio
      </RouterLink>

    </nav>
    <button
    @click="logout"
    class="w-full text-left px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition"
    >
    🚪 Cerrar sesión
    </button>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout(){

    localStorage.removeItem("auth")

    router.push("/login")

}
</script>
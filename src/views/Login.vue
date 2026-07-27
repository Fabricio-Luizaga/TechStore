<template>
  <div class="min-h-screen bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 flex items-center justify-center">

    <div class="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

      <div class="text-center mb-8">

        <div class="text-6xl mb-3">
          💻
        </div>

        <h1 class="text-4xl font-bold text-slate-800">
          TechStore
        </h1>

        <p class="text-gray-500 mt-2">
          Panel de Administración
        </p>

      </div>

      <form @submit.prevent="login">

        <div class="mb-5">

          <label class="block font-semibold mb-2">
            Usuario
          </label>

          <input
            v-model="username"
            type="text"
            class="w-full border rounded-xl p-3 focus:ring-2 focus:ring-cyan-500 outline-none"
            placeholder="Ingrese su usuario"
          >

        </div>

        <div class="mb-6">

          <label class="block font-semibold mb-2">
            Contraseña
          </label>

          <div class="relative">

            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="w-full border rounded-xl p-3 pr-12 focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder="Ingrese su contraseña"
            >

            <button
              type="button"
              @click="showPassword=!showPassword"
              class="absolute right-4 top-3"
            >
              {{ showPassword ? '🙈' : '👁️' }}
            </button>

          </div>

        </div>

        <button
          class="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-bold transition"
        >
          Iniciar Sesión
        </button>

      </form>

      <p
        v-if="error"
        class="text-red-600 mt-5 text-center"
      >
        Usuario o contraseña incorrectos
      </p>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref(false)

const router = useRouter()

function login() {

    error.value = false

    if (
        username.value === "admin" &&
        password.value === "1234"
    ) {

        localStorage.setItem("auth", "true")

        router.push("/admin")

    } else {

        error.value = true

    }

}
if (localStorage.getItem("auth") === "true") {
    router.push("/admin")
}
</script>
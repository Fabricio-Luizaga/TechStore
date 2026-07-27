<template>
  <section
    class="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 text-white"
  >
    <div class="max-w-7xl mx-auto px-8 py-24">

      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Texto -->

        <div>

          <span
            class="bg-cyan-500 px-4 py-2 rounded-full text-sm font-semibold"
          >
            🔥 Hasta 30% de descuento
          </span>

          <h1 class="text-6xl font-extrabold mt-8 leading-tight">

            Tecnología
            <span class="text-cyan-300">
              para tu futuro
            </span>

          </h1>

          <p class="mt-8 text-xl text-gray-200 leading-9">

            Descubre laptops, monitores, teclados,
            accesorios y periféricos de última generación
            para estudiar, trabajar y jugar.

          </p>

          <div class="flex gap-5 mt-10">

            <RouterLink
              to="/catalog"
              class="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-bold transition"
            >
              Comprar ahora
            </RouterLink>

            <RouterLink
              to="/about"
              class="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition"
            >
              Conócenos
            </RouterLink>

          </div>

        </div>

        <!-- Imagen -->

        <div class="relative">

          <div
            class="absolute -top-8 -left-8 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl"
          ></div>

          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200"
            class="relative rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
          >

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
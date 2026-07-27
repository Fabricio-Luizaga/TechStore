<template>
  <RouterLink
    :to="'/product/' + product.id"
    class="block"
  >
    <div
      class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
    >
      <!-- Imagen -->
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-56 object-cover"
      />

      <!-- Información -->
      <div class="p-6">

        <span
          class="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm mb-3"
        >
          {{ product.category }}
        </span>

        <h3 class="text-2xl font-bold">
          {{ product.name }}
        </h3>

        <p class="text-gray-500 mt-2">
          Stock disponible:
          <strong>{{ product.stock }}</strong>
        </p>

        <p class="text-cyan-600 text-3xl font-bold mt-4">
          Bs {{ product.price }}
        </p>

        <!-- Botón -->
        <button
          @click.stop="cartStore.addToCart(product)"
          class="mt-6 w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition duration-300"
        >
          🛒 Agregar al carrito
        </button>

      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
</script>
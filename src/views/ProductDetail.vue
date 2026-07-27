<template>
  <div
    v-if="product"
    class="max-w-7xl mx-auto py-16 px-8"
  >
    <div class="grid lg:grid-cols-2 gap-12">

      <!-- Imagen -->
      <div>
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-[500px] object-cover rounded-2xl shadow-xl"
        />
      </div>

      <!-- Información -->
      <div>

        <span
          class="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full"
        >
          {{ product.category }}
        </span>

        <h1 class="text-5xl font-bold mt-5">
          {{ product.name }}
        </h1>

        <!-- Estrellas -->
        <div class="flex mt-4 text-yellow-500 text-2xl">
          ⭐⭐⭐⭐⭐
          <span class="text-gray-500 text-lg ml-3">(4.9)</span>
        </div>

        <p class="text-5xl font-bold text-cyan-600 mt-8">
          Bs {{ product.price }}
        </p>

        <p class="mt-8 text-gray-600 leading-8">
          Este producto ofrece un excelente rendimiento y calidad para estudiantes,
          profesionales y entusiastas de la tecnología. Está diseñado para brindar
          velocidad, estabilidad y una gran experiencia de uso.
        </p>

        <div class="grid grid-cols-2 gap-4 mt-8">

          <div class="bg-slate-100 p-4 rounded-xl">
            <strong>Stock</strong>
            <br>
            {{ product.stock }} unidades
          </div>

          <div class="bg-slate-100 p-4 rounded-xl">
            <strong>Vendidos</strong>
            <br>
            {{ product.sold }}
          </div>

        </div>

        <!-- Cantidad -->
        <div class="flex items-center gap-4 mt-10">

          <button
            @click="decrease"
            class="bg-red-500 text-white w-10 h-10 rounded-full"
          >
            -
          </button>

          <span class="text-2xl font-bold">
            {{ quantity }}
          </span>

          <button
            @click="increase"
            class="bg-green-500 text-white w-10 h-10 rounded-full"
          >
            +
          </button>

        </div>

        <!-- Botones -->
        <div class="flex gap-4 mt-10">

          <button
            @click="addProduct"
            class="bg-cyan-600 text-white px-8 py-4 rounded-xl hover:bg-cyan-700"
          >
            🛒 Agregar al carrito
          </button>

          <RouterLink
            to="/catalog"
            class="border px-8 py-4 rounded-xl hover:bg-gray-100"
          >
            ← Volver
          </RouterLink>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '../stores/products'
import { useCartStore } from '../stores/cart'

const route = useRoute()

const productsStore = useProductsStore()

const cartStore = useCartStore()

const quantity = ref(1)

const product = computed(() =>
  productsStore.products.find(
    p => p.id == route.params.id
  )
)

function increase() {
  quantity.value++
}

function decrease() {
  if (quantity.value > 1)
    quantity.value--
}

function addProduct() {

  for (let i = 0; i < quantity.value; i++) {
    cartStore.addToCart(product.value)
  }

}
</script>
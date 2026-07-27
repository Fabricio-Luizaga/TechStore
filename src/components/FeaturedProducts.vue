<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-8">

      <h2 class="text-4xl font-bold text-center mb-14">
        Productos Destacados
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
        />

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ProductCard from './ProductCard.vue'
import { useProductsStore } from '../stores/products'

const store = useProductsStore()

const featuredProducts = computed(() => {
  return store.products.slice(0, 4)
})
</script>
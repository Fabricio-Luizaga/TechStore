<template>

<div class="max-w-7xl mx-auto p-10">

    <h1 class="text-5xl font-bold mb-10">

        Catálogo

    </h1>

    <SearchBar
        @update:search="search = $event"
    />

    <CategoryFilter
        :categories="categories"
        @change-category="selectedCategory = $event"
    />

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
        />

    </div>

</div>

</template>

<script setup>

import { computed, ref } from 'vue'

import ProductCard from '../components/ProductCard.vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'

import { useProductsStore } from '../stores/products'

const store = useProductsStore()

const search = ref('')

const selectedCategory = ref('Todos')

const categories = [
    'Todos',
    ...new Set(store.products.map(p => p.category))
]

const filteredProducts = computed(() => {

    return store.products.filter(product => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(search.value.toLowerCase())

        const matchesCategory =
            selectedCategory.value === 'Todos' ||
            product.category === selectedCategory.value

        return matchesSearch && matchesCategory

    })

})

</script>
<template>

<div class="flex bg-gray-100 min-h-screen">

    <AdminSidebar />

    <main class="flex-1 p-10">

        <h1 class="text-5xl font-bold mb-10">
            Dashboard
        </h1>
        <ProductForm ref="productForm" />
        <!-- Tarjetas -->
        <div class="grid md:grid-cols-3 gap-8">

            <StatsCard
                title="Productos"
                :value="store.totalProducts"
            />

            <StatsCard
                title="Más vendido"
                :value="store.bestSeller.name"
            />

            <StatsCard
                title="Ingresos"
                :value="'Bs ' + store.totalRevenue"
            />

        </div>

        <!-- Gráfico -->
        <div class="mt-12 bg-white p-6 rounded-xl shadow">

            <h2 class="text-2xl font-bold mb-6">
                Ventas por Producto
            </h2>

            <SalesChart />

        </div>

        <!-- Tabla -->
        <div class="mt-12 bg-white rounded-xl shadow overflow-hidden">

            <table class="w-full">

                <thead class="bg-slate-800 text-white">

                    <tr>

                        <th class="p-4">Producto</th>

                        <th>Precio</th>

                        <th>Stock</th>

                        <th>Vendidos</th>

                        <th>Acciones</th>
                    </tr>

                </thead>

                <tbody>

                    <tr
                        v-for="product in store.products"
                        :key="product.id"
                        class="border-b hover:bg-gray-50 text-center"
                    >

                        <td class="p-4">
                            {{ product.name }}
                        </td>

                        <td>
                            Bs {{ product.price }}
                        </td>

                        <td>
                            {{ product.stock }}
                        </td>

                        <td>
                            {{ product.sold }}
                        </td>

                        <td class="space-x-2">

                            <button
                                @click="productForm.edit(product)"
                                class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Editar
                            </button>

                            <button
                                @click="store.deleteProduct(product.id)"
                                class="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                            >
                                Eliminar
                            </button>

                        </td>
                    </tr>

                </tbody>

            </table>

        </div>

    </main>

</div>

</template>

<script setup>

import AdminSidebar from '../../components/AdminSidebar.vue'
import StatsCard from '../../components/StatsCard.vue'
import SalesChart from '../../components/SalesChart.vue'
import ProductForm from '../../components/ProductForm.vue'
import { useProductsStore } from '../../stores/products'
import { ref } from 'vue'
const store = useProductsStore()
const productForm = ref(null)
</script>
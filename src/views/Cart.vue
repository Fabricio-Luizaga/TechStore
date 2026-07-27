<template>

<div class="max-w-7xl mx-auto p-10">

    <h1 class="text-5xl font-bold mb-10">

        Carrito de Compras

    </h1>

    <div
        v-if="cart.cart.length===0"
        class="text-center text-gray-500 text-xl"
    >

        Tu carrito está vacío.

    </div>

    <div
        v-for="item in cart.cart"
        :key="item.id"
        class="flex justify-between items-center bg-white shadow rounded-xl p-6 mb-5"
    >

        <div>

            <h2 class="text-2xl font-bold">

                {{ item.name }}

            </h2>

            <p>

                Bs {{ item.price }}

            </p>

        </div>

        <div class="flex items-center gap-3">

            <button
                @click="cart.decrease(item.id)"
                class="bg-red-500 text-white px-3 py-1 rounded"
            >

                -

            </button>

            <span class="text-xl">

                {{ item.quantity }}

            </span>

            <button
                @click="cart.increase(item.id)"
                class="bg-green-500 text-white px-3 py-1 rounded"
            >

                +

            </button>

        </div>

        <div>

            <p class="font-bold text-xl">

                Bs {{ item.price * item.quantity }}

            </p>

        </div>

        <button
            @click="cart.removeFromCart(item.id)"
            class="bg-red-600 text-white px-4 py-2 rounded"
        >

            Eliminar

        </button>

    </div>

    <div
        v-if="cart.cart.length"
        class="text-right mt-10"
    >

        <h2 class="text-4xl font-bold">

            Total: Bs {{ cart.totalPrice }}

        </h2>

    </div>

</div>
<div class="flex justify-end gap-4 mt-6">

    <button
        @click="cart.clearCart()"
        class="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700"
    >
        Vaciar carrito
    </button>

</div>
</template>

<script setup>

import { useCartStore } from '../stores/cart'

const cart = useCartStore()

</script>
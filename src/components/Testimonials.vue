<template>

<section class="py-20">

<div class="max-w-7xl mx-auto px-8">

<h2 class="text-4xl font-bold text-center mb-14">

Clientes satisfechos

</h2>

<div class="grid md:grid-cols-3 gap-8">

<div
v-for="testimonial in testimonials"
:key="testimonial.name"
class="bg-white rounded-2xl shadow-lg p-8"
>

<div class="text-yellow-400 text-xl">

★★★★★

</div>

<p class="mt-5 text-gray-600">

"{{ testimonial.comment }}"

</p>

<h3 class="mt-6 font-bold">

{{ testimonial.name }}

</h3>

</div>

</div>

</div>

</section>

</template>

<script setup>

const testimonials=[

{
name:"María López",
comment:"Excelente atención y productos de calidad."
},

{
name:"Carlos Pérez",
comment:"Compré mi laptop y llegó muy rápido."
},

{
name:"Ana Rojas",
comment:"Muy recomendable, volveré a comprar."
}

]

</script>
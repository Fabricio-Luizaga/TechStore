<template>

<section class="py-20 bg-gray-50">

<div class="max-w-7xl mx-auto px-8">

<h2 class="text-4xl font-bold text-center mb-14">

Explora por categoría

</h2>

<div class="grid md:grid-cols-5 gap-8">

<div
v-for="item in categories"
:key="item.title"
class="bg-white rounded-2xl shadow-lg p-10 text-center hover:-translate-y-3 hover:shadow-2xl transition cursor-pointer"
>

<div class="text-6xl">

{{ item.icon }}

</div>

<h3 class="mt-6 font-bold text-xl">

{{ item.title }}

</h3>

</div>

</div>

</div>

</section>

</template>

<script setup>

const categories=[

{
icon:"💻",
title:"Laptops"
},

{
icon:"🖥️",
title:"Monitores"
},

{
icon:"⌨️",
title:"Teclados"
},

{
icon:"🖱️",
title:"Mouse"
},

{
icon:"🎧",
title:"Audio"
}

]

</script>
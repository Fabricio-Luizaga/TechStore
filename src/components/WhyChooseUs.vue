<template>
  <section class="py-20 bg-slate-100">
    <div class="max-w-7xl mx-auto px-8">

      <h2 class="text-4xl font-bold text-center mb-14">
        ¿Por qué elegir TechStore?
      </h2>

      <div class="grid md:grid-cols-4 gap-8">

        <div
          v-for="item in items"
          :key="item.title"
          class="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
        >
          <div class="text-6xl mb-5">
            {{ item.icon }}
          </div>

          <h3 class="text-xl font-bold mb-3">
            {{ item.title }}
          </h3>

          <p class="text-gray-600">
            {{ item.text }}
          </p>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>

const items = [

{
icon:"🚚",
title:"Envío rápido",
text:"Entrega segura a todo el país."
},

{
icon:"🛡️",
title:"Garantía",
text:"Productos con garantía oficial."
},

{
icon:"💳",
title:"Pago seguro",
text:"Métodos de pago confiables."
},

{
icon:"📞",
title:"Soporte",
text:"Atención personalizada."
}

]

</script>
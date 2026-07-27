<template>

<div
  class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
>

  <p class="text-gray-500 text-lg">
    {{ title }}
  </p>

  <h2 class="text-4xl font-bold text-cyan-600 mt-4">
    {{ value }}
  </h2>

</div>

</template>

<script setup>

defineProps({
  title: String,
  value: [String, Number]
})

</script>
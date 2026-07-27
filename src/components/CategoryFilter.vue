<template>
  <div class="flex flex-wrap gap-3 mb-10">

    <button
      v-for="category in categories"
      :key="category"
      @click="$emit('change-category', category)"
      class="px-5 py-2 rounded-full bg-slate-200 hover:bg-cyan-500 hover:text-white transition"
    >
      {{ category }}
    </button>

  </div>
</template>

<script setup>

defineProps({
  categories: Array
})

</script>
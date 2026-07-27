<template>
  <div class="mb-8">
    <input
      v-model="search"
      @input="$emit('update:search', search)"
      type="text"
      placeholder="🔍 Buscar productos..."
      class="w-full p-4 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
</script>
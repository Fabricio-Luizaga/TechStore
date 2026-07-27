<template>

<div class="bg-white p-6 rounded-xl shadow-lg">

<Bar
:data="chartData"
:options="chartOptions"
/>

</div>

</template>

<script setup>

import {

Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend

} from 'chart.js'

import { Bar } from 'vue-chartjs'

import { computed } from 'vue'

import { useProductsStore } from '../stores/products'

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
)

const store = useProductsStore()

const chartData = computed(() => ({

labels: store.products.map(p => p.name),

datasets: [
  {
    label: 'Productos vendidos',
    data: store.products.map(p => p.sold),

    backgroundColor: [
      '#06b6d4', // cyan
      '#3b82f6', // azul
      '#8b5cf6', // violeta
      '#10b981', // verde
      '#f59e0b'  // amarillo
    ],

    borderColor: [
      '#0891b2',
      '#2563eb',
      '#7c3aed',
      '#059669',
      '#d97706'
    ],

    borderWidth: 2,
    borderRadius: 8
  }
]

}))

const chartOptions = {
  responsive: true,

  plugins: {
    legend: {
      display: false
    },

    title: {
      display: true,
      text: 'Ventas por Producto'
    }
  },

  scales: {
    y: {
      beginAtZero: true
    }
  }
}

</script>
<template>
  <div class="bg-white rounded-xl shadow-lg p-6 mb-10">

    <h2 class="text-2xl font-bold mb-6">
      {{ editing ? 'Editar Producto' : 'Nuevo Producto' }}
    </h2>

    <div class="grid md:grid-cols-2 gap-5">

      <div>
        <label class="block mb-2 font-semibold">
        Nombre
        </label>

        <input
        v-model="product.name"
        class="w-full border rounded-lg p-3"
        />

        </div>

      <div>
        <label class="block mb-2 font-semibold">
        Precio (Bs)
        </label>

        <input
        v-model.number="product.price"
        type="number"
        class="w-full border rounded-lg p-3"
        />

        </div>

      <div>
        <label class="block mb-2 font-semibold">
        Stock
        </label>

        <input
        v-model.number="product.stock"
        type="number"
        class="w-full border rounded-lg p-3"
        />

        </div>

      <div>
        <label class="block mb-2 font-semibold">
        Vendidos
        </label>

        <input
        v-model.number="product.sold"
        type="number"
        class="w-full border rounded-lg p-3"
        />

        </div>

      <div>
        <label class="block mb-2 font-semibold">
        Categoría
        </label>

        <input
        v-model="product.category"
        class="w-full border rounded-lg p-3"
        />

        </div>

      <div class="md:col-span-2">

        <label class="block mb-2 font-semibold">
        URL de la imagen
        </label>

        <input
        v-model="product.image"
        class="w-full border rounded-lg p-3"
        />

        </div>

    </div>

    <div class="flex gap-4 mt-6">

      <button
        @click="save"
        class="bg-cyan-600 text-white px-8 py-3 rounded-xl hover:bg-cyan-700"
      >
        {{ editing ? 'Actualizar' : 'Guardar' }}
      </button>

      <button
        v-if="editing"
        @click="cancel"
        class="bg-gray-500 text-white px-8 py-3 rounded-xl"
      >
        Cancelar
      </button>

    </div>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useProductsStore } from '../stores/products'

const store = useProductsStore()

const editing = ref(false)

const product = reactive({
  id: null,
  name: '',
  price: 0,
  stock: 0,
  sold: 0,
  category: '',
  image: ''
})

function resetForm() {
  product.id = null
  product.name = ''
  product.price = 0
  product.stock = 0
  product.sold = 0
  product.category = ''
  product.image = ''
}

function save() {

  if (
    !product.name ||
    !product.category ||
    !product.image
  ) {
    alert('Completa todos los campos.')
    return
  }

  if (editing.value) {

    store.updateProduct({ ...product })

  } else {

    store.addProduct({ ...product })

  }

  resetForm()

  editing.value = false

}

function cancel() {

  resetForm()

  editing.value = false

}

defineExpose({

  edit(item) {

    Object.assign(product, item)

    editing.value = true

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })

  }

})
</script>
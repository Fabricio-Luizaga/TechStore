import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Laptop HP',
        price: 4200,
        stock: 8,
        sold: 15,
        category: 'Laptops',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 2,
        name: 'MacBook Air',
        price: 9800,
        stock: 5,
        sold: 10,
        category: 'Laptops',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 3,
        name: 'Monitor Gamer',
        price: 1650,
        stock: 12,
        sold: 18,
        category: 'Monitores',
        image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 4,
        name: 'Mouse Gamer',
        price: 180,
        stock: 30,
        sold: 32,
        category: 'Accesorios',
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 5,
        name: 'Teclado Mecánico',
        price: 420,
        stock: 20,
        sold: 25,
        category: 'Accesorios',
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=600&q=80'
      }
    ]
  })
  ,
  actions: {

  addProduct(product) {

    product.id = this.products.length
    ? Math.max(...this.products.map(p => p.id)) + 1
    : 1

    this.products.push(product)

  },

  deleteProduct(id) {

    this.products = this.products.filter(
      p => p.id !== id
    )

  },

  updateProduct(updatedProduct) {

    const index = this.products.findIndex(
      p => p.id === updatedProduct.id
    )

    if (index !== -1) {

      this.products[index] = updatedProduct

    }

  }

},

  getters: {

    totalProducts: (state) => state.products.length,

    bestSeller: (state) => {
      return [...state.products].sort((a, b) => b.sold - a.sold)[0]
    },

    totalRevenue: (state) => {
      return state.products.reduce(
        (sum, p) => sum + (p.price * p.sold),
        0
      )
    }

  }

})
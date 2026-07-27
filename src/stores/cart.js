import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {

    state: () => ({
        cart: JSON.parse(localStorage.getItem('cart')) || []
    }),

    getters: {

        totalItems(state) {
            return state.cart.reduce((total, item) => total + item.quantity, 0)
        },

        totalPrice(state) {
            return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
        }

    },

    actions: {

        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart))
        },

        addToCart(product) {

            const item = this.cart.find(p => p.id === product.id)

            if (item) {
                item.quantity++
            } else {

                this.cart.push({
                    ...product,
                    quantity: 1
                })

            }

            this.saveCart()

        },

        increase(id) {

            const item = this.cart.find(p => p.id === id)

            if(item){

                item.quantity++

                this.saveCart()

            }

        },

        decrease(id){

            const item=this.cart.find(p=>p.id===id)

            if(!item) return

            if(item.quantity>1){

                item.quantity--

            }else{

                this.removeFromCart(id)

                return

            }

            this.saveCart()

        },

        removeFromCart(id){

            this.cart=this.cart.filter(item=>item.id!==id)

            this.saveCart()

        },

        clearCart(){

            this.cart=[]

            this.saveCart()

        }

    }

})
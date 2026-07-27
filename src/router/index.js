import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Catalog from '../views/Catalog.vue'
import Cart from '../views/Cart.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Home
  },
  {
    path: '/about',
    name: 'Nosotros',
    component: About
  },
  {
    path: '/catalog',
    name: 'Catalogo',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'Carrito',
    component: Cart
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
},
{
    path:'/login',
    name:'Login',
    component:Login
},
{
    path:'/contact',
    name:'Contact',
    component:Contact
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next)=>{

    if(
        to.path==="/admin"
        &&
        localStorage.getItem("auth")!=="true"
    ){

        next("/login")

    }else{

        next()

    }

})
export default router
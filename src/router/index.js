import { createRouter, createWebHashHistory } from 'vue-router'

import Header from '../components/Header.vue';
import AuthLayout from '../components/Auth/AuthLayout.vue'

import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';
import Home from '../views/Home.vue'
import AllProducts from '../views/Pages/AllProducts.vue'
import Basket from '../views/Pages/Basket.vue'
import ProductDetails from '../views/Pages/ProductDetails.vue'

const routes = [
  {
    name: 'Header',
    component: Header,
    redirect: { name: 'Home' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/products/:slug/:id',
        name: 'ProductDetails',
        component: ProductDetails,
        props: true,
      },
      {
        path: '/cart',
        name: 'Basket',
        component: Basket
      },
      {
        path: '/products',
        name: 'AllProducts',
        component: AllProducts,
      },

    ],
  },
  {
    name: 'Auth',
    component: AuthLayout,
    redirect: { name: 'Login' },
    meta: { guest: true },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

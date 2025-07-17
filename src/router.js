import { createRouter, createWebHistory } from "vue-router"
import HomePage from './components/HomePage.vue'
import AboutUs from './components/AboutUs.vue'
import ProductsPage from './components/ProductsPage.vue'
import OrderPlace from './components/OrderPlace.vue'
import ContactUs from './components/ContactUs.vue'

const routes=[{
    name:'Home',
    path:'/',
    component:HomePage
},
{
    name:'AboutUs',
    path:'/about',
    component:AboutUs
},
{
    name:'ProductsPage',
    path:'/products',
    component:ProductsPage
},
{
    name:'OrderPlace',
    path:'/products/order',
    component:OrderPlace
},
{
    name:'ContactUs',
    path:'/contact',
    component:ContactUs
},
]

const router=createRouter({
    history:createWebHistory(),
    routes
}) 

export default router

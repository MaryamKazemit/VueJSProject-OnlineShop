import {createRouter, createWebHistory} from "vue-router";
import Home from '../src/components/pages/Home.vue'
import AboutUs from '../src/components/pages/AboutUs.vue'
import CallUs from '../src/components/pages/CallUs.vue'
import Product from '../src/components/pages/Product.vue'
// import ProductShow from '../src/components/pages/ProductList.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/about-us", component: AboutUs},
        {path: "/call-us", component: CallUs},
        {path: "/products", component: Product},
        // {path: "/products/7", component: ProductShow},
    ]
})
export  default {router}
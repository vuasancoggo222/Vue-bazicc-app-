import { createWebHistory,createRouter } from "vue-router";
import Home from '../pages/Home.vue'
import Portfolio from '../pages/Portfolio.vue'
import Stocks from '../pages/Stocks.vue'
const routes = [
    {
        path : '/',
        component : Home,
        name : 'home-route'
    },
    {
        path: '/porfolio',
        component : Portfolio,
        name : 'portfolio-route'
    },
    {
        path: '/stocks',
        component : Stocks,
        name : 'stocks-route'
    }
]
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router
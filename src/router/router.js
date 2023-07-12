import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Login from "@/pages/Login";
import Registration from "@/pages/Registration";
import CreateUser from "@/pages/CreateUser";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/registration',
        component: Registration
    },
    {
        path: '/usersbase',
        component: CreateUser,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URl)
})

export default router;
import MainPage from "@/pages/MainPage";
import NotCalendarList from "@/pages/NotCalendarList";
import OneToDo from "@/pages/OneToDo"
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        component: MainPage
    },

    {
        path: '/nclists',
        component: NotCalendarList
    },

    {
        path: '/todo',
        component: OneToDo
    },


]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;

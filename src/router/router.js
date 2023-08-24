import MainPage from "@/pages/MainPage";
import NotCalendarList from "@/pages/NotCalendarList";
import OneToDo from "@/pages/OneToDo"
import CalendarList from "@/pages/CalendarList";
import OneMonth from "@/pages/OneMonth";
import NotesPage from "@/pages/NotesPage";
import OneNote from "@/pages/OneNote"
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        component: MainPage
    },

    {
        path: '/clists',
        component: CalendarList
    },

    {
        path: '/onemonth',
        component: OneMonth
    },

    {
        path: '/nclists',
        component: NotCalendarList
    },

    {
        path: '/todo',
        component: OneToDo
    },

    {
        path: '/notes',
        component: NotesPage
    },

    {
        path: '/oneNote',
        component: OneNote
    },


]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;

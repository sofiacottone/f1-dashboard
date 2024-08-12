import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import Drivers from './pages/Drivers.vue';
import Statistics from './pages/Statistics.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: AppHome
        },
        {
            path: '/drivers',
            name: 'drivers',
            component: Drivers
        },
        {
            path: '/statistics',
            name: 'statistics',
            component: Statistics
        },
        // {
        //     path: '/:pathMatch(.*)*',
        //     name: 'not-found',
        //     component: NotFound
        // },
    ]
});
export { router };
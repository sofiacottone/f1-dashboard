<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    data() {
        return {
            navLinks: [
                {
                    name: 'dashboard',
                    icon: 'chart-pie'
                },
                {
                    name: 'drivers',
                    icon: 'users'
                },
                {
                    name: 'statistics',
                    icon: 'chart-simple'
                },
            ]
        }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<template>

    <aside id="default-sidebar" class="hidden h-screen md:block sticky top-0 left-0 z-40 w-64 bg-gray-100 text-xs"
        aria-label="Sidebar">

        <div class="h-full px-3 py-2 dark:bg-gray-900">

            <div class="w-full p-4 mb-4 flex justify-between items-center">
                <div class="w-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png"
                        alt="F1 Logo">
                </div>
            </div>

            <ul class="space-y-2 mt-8 font-medium text-lg">
                <li v-for="navLink in navLinks">
                    <router-link :to="{ name: navLink.name }"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-red-500/70 dark:hover:bg-red-500/70 group">
                        <div class="flex-shrink-0 flex items-center gap-3 w-full text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            aria-hidden="true">
                            <div class="w-6 h-6 flex justify-center items-center">
                                <font-awesome-icon class="text-center text-[18px]" :icon="['fas', navLink.icon]" />
                            </div>
                            <div class="capitalize">{{ navLink.name }}</div>
                        </div>
                    </router-link>
                </li>
            </ul>

        </div>
    </aside>


    <!-- mobile view  -->
    <aside class="md:hidden">
        <div
            class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div class="flex justify-evenly items-center h-full max-w-lg mx-auto font-medium">
                <button type="button" v-for="navLink in navLinks"
                    class="inline-flex flex-col items-center justify-center px-5 group">
                    <div class="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <font-awesome-icon class="" :icon="['fas', navLink.icon]" />
                    </div>
                    <span
                        class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500">{{ navLink.name }}</span>
                </button>
            </div>
        </div>
    </aside>



</template>
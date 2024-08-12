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

    <!-- navbar desktop view -->
        <!-- text:      text-gray-500   dark:text-gray-400      hover:text-white -->
        <!-- background-list:       bg-none    dark:bg-none     hover:bg-red-400/90     dark:hover-bg-red-400/90 -->

    <!-- navbar mobile view -->
        <!-- text:      text-gray-500   dark:text-gray-400      hover:text-red-600      hover:dark:text-red-500  -->
        <!-- background:    bg-gray-100    dark:bg-gray-900 -->


    <!-- desktop view  -->
    <aside id="default-sidebar" class="h-screen hidden md:block sticky top-0 left-0 z-40 text-xs bg-gray-100 dark:bg-gray-900"
        aria-label="Sidebar">

        <div class="w-64 h-full px-3 py-2">

            <div class="w-full p-4 mb-4 flex justify-between items-center">
                <div class="w-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png"
                        alt="F1 Logo">
                </div>
            </div>

            <ul class="space-y-2 mt-8 font-medium text-lg">
                <li v-for="navLink in navLinks">

                    <router-link :to="{ name: navLink.name }" :class="[this.$route.name === navLink.name ? 'bg-red-500/90 text-white hover:bg-red-500/90' : 'text-gray-500 dark:text-gray-400 hover:text-white hover:bg-red-400/90 dark:hover:bg-red-400/90' ]"
                        class="p-2 flex items-center rounded-lg">

                        <div class="flex-shrink-0 flex items-center gap-3 w-full"
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
    <nav class="w-full h-16 pt-1 md:hidden fixed bottom-0 z-50 bg-gray-100 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-600">
            <ul class="flex justify-evenly items-center h-full max-w-lg mx-auto font-medium">
                <li v-for="navLink in navLinks" class="h-full pt-1 hover:text-red-600 dark:hover:text-red-500" :class="[this.$route.name === navLink.name ? 'text-red-500' : 'text-gray-500 dark:text-gray-400' ]">
                    
                    <router-link :to="{ name: navLink.name }"
                    class="flex flex-col items-center justify-center px-5">
                        <div class="w-5 h-5 mb-2">
                            <font-awesome-icon class="" :icon="['fas', navLink.icon]" />
                        </div>
                        <span class="text-sm capitalize">
                            {{ navLink.name }}
                        </span>
                    </router-link>

                </li>
            </ul>
    </nav>

</template>
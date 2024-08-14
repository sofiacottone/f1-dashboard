<script>
import { useF1Store } from '../stores/store';
import axios from 'axios';
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
            ],
            store: useF1Store(),
            apiCheck: false,


        }
    },
    methods: {
        clearLocalStorage() {
            localStorage.clear();
            console.log('localStorage deleted.');
            // reload page to update data
            location.reload();
        },

        toggleDarkMode() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        },

        checkErgastAPIStatus() {
            axios.get(`${this.store.ergastApi}${this.store.ergastApiSeason}.json`)
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        return this.apiCheck = true;
                    } else {
                        return this.apiCheck = false
                    }

                })
        },

    },
    computed: {

    },
    mounted() {
        this.checkErgastAPIStatus();
    },
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
    <aside id="default-sidebar"
        class="h-screen hidden md:block sticky top-0 left-0 z-40 text-xs bg-gray-100 dark:bg-gray-900"
        aria-label="Sidebar">

        <div class="w-64 h-full px-3 py-2">

            <div class="w-full p-4 mb-4 flex justify-between items-center">
                <div class="w-20">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png"
                        alt="F1 Logo">
                </div>

                <div class="flex flex-col gap-2">

                    <!-- dark mode -->
                    <div class="flex justify-end">

                        <button @click="toggleDarkMode" type="button"
                            class="hs-dark-mode-active:hidden block hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            data-hs-theme-click-value="dark">
                            <span class="group inline-flex shrink-0 justify-center items-center size-9">
                                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </svg>
                            </span>
                        </button>

                        <button type="button"
                            class="hs-dark-mode-active:block hidden hs-dark-mode font-medium text-gray-800 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                            data-hs-theme-click-value="light">
                            <span class="group inline-flex shrink-0 justify-center items-center size-9">
                                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 2v2"></path>
                                    <path d="M12 20v2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="M2 12h2"></path>
                                    <path d="M20 12h2"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </svg>
                            </span>
                        </button>

                        <button @click="clearLocalStorage()">
                            <font-awesome-icon class="hover:text-red-500" :icon="['fas', 'trash']" />
                        </button>

                    </div>

                    <!-- api status  -->
                    <div class="flex items-center gap-2 text-xs">
                        <div>Status: </div>
                        <div :class="[apiCheck ? 'bg-green-500' : 'bg-red-500']" class="w-4 h-4 rounded-full border-2">
                        </div>
                    </div>


                </div>
            </div>

            <ul class="space-y-2 mt-8 font-medium text-lg">
                <li v-for="navLink in navLinks">

                    <router-link :to="{ name: navLink.name }"
                        :class="[this.$route.name === navLink.name ? 'bg-red-500/90 text-white hover:bg-red-500/90' : 'text-gray-500 dark:text-gray-400 hover:text-white hover:bg-red-400/90 dark:hover:bg-red-400/90']"
                        class="p-2 flex items-center rounded-lg">

                        <div class="flex-shrink-0 flex items-center gap-3 w-full" aria-hidden="true">

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
    <nav
        class="w-full h-16 pt-1 md:hidden fixed bottom-0 z-50 bg-gray-100 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-600">
        <ul class="flex justify-evenly items-center h-full max-w-lg mx-auto font-medium">
            <li v-for="navLink in navLinks" class="h-full pt-1 hover:text-red-600 dark:hover:text-red-500"
                :class="[this.$route.name === navLink.name ? 'text-red-500' : 'text-gray-500 dark:text-gray-400']">

                <router-link :to="{ name: navLink.name }" class="flex flex-col items-center justify-center px-5">
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
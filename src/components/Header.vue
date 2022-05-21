<template>
    <div class="">
        <!-- header:start -->
        <header class="w-full bg-white duration-300 dark:bg-gray-800 border-b fixed top-0 z-50">
            <div class="w-full flex justify-between items-center p-3">
                <!-- menu and search box:start -->
                <div class="flex lg:w-3/5">
                    <div class="mx-2">
                        <h1 class="text-2xl text-red-500 dark:text-white font-bold"><strong>{{ appName }}</strong></h1>
                    </div>
                    <div class="w-4/5 md:block hidden">
                        <form @submit.prevent="search">
                            <div class="mx-3 duration-150 px-4 py-2 bg-gray-200 border dark:border-white rounded group hover:bg-gray-100 dark:bg-gray-800">
                                <i class="fa fa-search mr-3 dark:text-white"></i>
                                <input v-model="searchInput" type="text" class="w-4/5 duration-150 bg-gray-200 dark:text-white group-hover:bg-gray-100 dark:group-hover:bg-gray-800 outline-none dark:bg-gray-800" placeholder="search">
                            </div>
                        </form>
                    </div>
                </div>
                <!-- menu and search box:end -->


                <!-- basket and login btns:start -->
                <div class="flex justify-end lg:w-2/5 items-center">
                    <router-link :to="{ name: 'Auth' }" class="flex items-center dark:hover:text-white dark:hover:bg-blue-400 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 mx-2 px-3 py-2 border bg-white duration-150 hover:bg-gray-50 rounded font-semibold group">
                        <i class="fa fa-sign-in-alt mx-2 text-sm text-gray-500 dark:group-hover:text-white dark:text-blue-400"></i>
                        <span class="md:block hidden">login | register</span>
                    </router-link>

                    <!-- shopping basket -->
                    <router-link :to="{ name: 'Basket' }" class="block mx-3 relative">
                        <span class="text-xs px-1  rounded bg-red-500 absolute text-white bottom-4 left-3">3</span>
                        <i class="fa fa-shopping-cart"></i>
                    </router-link>    
                    <!-- shopping basket -->

                     <!-- toggle menu:start -->
                    <div class="md:hidden block" @click="isMobileMenuOpen = !isMobileMenuOpen">
                        <button class="btn border btn-ring-blue">
                            <div class="w-5 h-1 dark:bg-gray-50 bg-gray-500" style="height: 2px;"></div>
                            <div class="w-5 h-1 dark:bg-gray-50 bg-gray-500 mt-1" style="height: 2px;"></div>
                            <div class="w-5 h-1 dark:bg-gray-50 bg-gray-500 mt-1" style="height: 2px;"></div>
                        </button>
                    </div>
                    <!-- toggle menu:end -->
                
                </div>
                <!-- basket and login btns:end -->
            </div>
            <div :class="'w-full md:block ' + (isMobileMenuOpen ? 'block' : 'hidden') ">
                <div class="md:w-full md:flex md:relative fixed top-0 left-0 justify-between bg-white dark:bg-gray-800 h-full border-r dark:border-white">
                    <div>
                        <div class="md:hidden block py-3 px-5 border-b">
                            <h1 class="text-2xl text-red-500 dark:text-white font-bold"><strong>{{ appName }}</strong></h1>
                        </div>
                        <ul class="md:flex block">
                            <li class="">
                                <button @click="isMenuOpen = !isMenuOpen" :class=" (isMenuOpen ? 'border-red-500 dark:border-red-500 text-gray-700 dark:text-white' : 'border-white') + ' dark:border-gray-800 dark:text-white font-semibold border-b-4 hover:border-red-500 py-3 px-3 text-gray-500 dark:hover:border-red-500  hover:text-gray-700 duration-150 md:w-auto w-full flex justify-between items-center'">
                                    <span>categories</span>
                                    <div class="md:hidden block">
                                        <i class="fa fa-angle-down text-sm"></i>
                                    </div>
                                </button>
                                <div v-if="isMenuOpen" class="md:absolute relative md:top-16 md:px-5 w-full z-50">
                                    <div class="w-full bg-white dark:bg-gray-800 rounded shadow overflow-hidden md:h-72">
                                        <div class="flex justify-start h-full">
                                            <div class="md:w-1/5 w-2/4 w-full md:h-full h-auto">
                                                <div class="w-full border-r py-5 h-full">
                                                    <ul>
                                                        <li v-for="(category, index) in categories" :key="index">
                                                            <button @click="changeCategory(index)" :class=" (currentCategory == index ? 'border-red-500 bg-gray-50 dark:bg-gray-900 pl-7' : 'border-white dark:border-gray-800') + ' border-l-4 duration-150 hover:border-red-500 dark:hover:border-red-500 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900 py-1 px-5 w-full text-left'">{{ category.name }}</button>
                                                        </li>                                    
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="md:w-4/5 w-2/4 py-5">
                                                <div class="flex flex-col">
                                                    <div v-for="(category, index) in categories[currentCategory].subcategories" :key="index">
                                                        <router-link :to="{ name: 'AllProducts' }" class="block border-l-4 border-white duration-150 hover:border-red-500 dark:text-white dark:hover:bg-gray-900 dark:border-gray-800 dark:hover:border-red-500 hover:bg-gray-50 py-1 px-5 w-full text-left">{{ category.name }}</router-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button class="dark:border-gray-800 dark:text-white font-semibold border-b-4 border-white dark:hover:border-red-500 hover:border-red-500 py-3 px-3 text-gray-500 hover:text-gray-700 duration-150 w-full md:block flex justify-between">
                                    <span>most sell</span>
                                </button>
                            </li>
                            <li>
                                <button class="dark:border-gray-800 dark:text-white font-semibold border-b-4 border-white dark:hover:border-red-500 hover:border-red-500 py-3 px-3 text-gray-500 hover:text-gray-700 duration-150 w-full md:block flex justify-between">
                                    <span>categories</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center">
                        <button class="py-2 px-3 text-gray-500 dark:text-white border rounded mx-1">
                            <i class="fa fa-map-marker mr-2 text-red-500 "></i>
                            <span>please choose your contry</span>
                        </button>


                        <button v-if="!darkMode" @click="changeToLightAndDark" class="py-2 px-3 text-gray-500 border group rounded mx-1 mr-4 hover:text-white hover:bg-gray-900 hover:border-gray-900 duration-150">
                            <i class="fa fa-moon"></i>
                        </button>
                        <button v-else @click="changeToLightAndDark" class="py-2 px-3 text-gray-500 border group rounded mx-1 mr-4 text-yellow-500 hover:text-white hover:bg-yellow-300 hover:border-yellow-300 duration-150">
                            <i class="fa fa-sun"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <!-- header:end -->


        <router-view></router-view>
    </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
    name: 'Header',

    data(){
        return {
            // all the menu items
            isMenuOpen: false,

            // toggle mobile menu
            isMobileMenuOpen: false,
        
            // all the categories with there sub categories
            categories: [
                {
                    name: 'men',
                    id: 1,
                    subcategories: [
                        { 
                            name: 'shoes', 
                            id: 4,
                        },
                        { 
                            name: 'coat', 
                            id: 6 
                        },
                        { 
                            name: 'jacket', 
                            id: 7
                        },
                        { 
                            name: 'sweater', 
                            id: 8
                        },
                        { 
                            name: 'pants', 
                            id: 9
                        },
                    ]
                },
                {
                    name: 'women', 
                    id: 2,
                    subcategories: [
                        { 
                            name: 'shoes', 
                            id: 5 
                        },
                         { 
                            name: 'skirt', 
                            id: 9
                        },
                        { 
                            name: 'coat', 
                            id: 10
                        },
                        { 
                            name: 'jacket', 
                            id: 11
                        },
                        { 
                            name: 'sweater', 
                            id: 12
                        },
                        { 
                            name: 'top', 
                            id: 13
                        },
                        { 
                            name: 'pants', 
                            id: 14
                        },
                    ]
                },
                { 
                    name: 'children', 
                    id: 3,
                    subcategories: [
                        { 
                            name: 'shoes', 
                            id: 15
                        },
                         { 
                            name: 'skirt', 
                            id: 16
                        },
                        { 
                            name: 'toys', 
                            id: 17
                        },
                        { 
                            name: 'jacket', 
                            id: 18
                        },
                        { 
                            name: 'T-shirt', 
                            id: 19
                        },
                        { 
                            name: 'shirt', 
                            id: 20
                        },
                        { 
                            name: 'glasses', 
                            id: 21
                        },
                    ]
                },
                 { 
                    name: 'Tech', 
                    id: 4,
                    subcategories: [
                        { 
                            name: 'Samsung', 
                            id: 22
                        },
                         { 
                            name: 'Apple', 
                            id: 23
                        },
                        { 
                            name: 'Dell', 
                            id: 24
                        },
                        { 
                            name: 'HP', 
                            id: 25
                        },
                        { 
                            name: 'Microsoft', 
                            id: 26
                        },
                        { 
                            name: 'Sony', 
                            id: 27
                        },
                    ]
                },
            ],

            // current category
            currentCategory: 0,

            darkMode: false,

            searchInput: '',
        }
    },

    watch: {
        searchInput(newVal)
        {
            this.searchProduct(this.searchInput)
            this.$router.push({ name: 'AllProducts' });
        }
    },

    methods: {
        ...mapMutations(['changeDarkMode']),
        ...mapActions(['searchProduct']),

        changeCategory(num){
            this.currentCategory = num;
        },

        // change the screen mode into darkmode and light mode
        changeToLightAndDark()
        {
            this.darkMode = !this.darkMode
            this.changeDarkMode(this.darkMode);
        },

        // search data
        search()
        {
            this.searchProduct(this.searchInput)
            this.$router.push({ name: 'AllProducts' });
        }
    },

    inject: ['appName']
}
</script>

<style>

</style>
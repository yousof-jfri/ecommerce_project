<template>
    <div class="w-full md:pt-36 pt-20 px-5">
        <div class="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-5">
            <!-- filter:start -->
            <div class="col-span-1">
                <div class="w-full p-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div class="w-full md:pb-4 flex items-center justify-between">
                        <span class="font-bold text-blue-500">Advanced filters</span>
                        <button class="btn border btn-ring-blue md:hidden block" @click="hideFilter = !hideFilter">
                            <div class="w-5 h-1 dark:bg-gray-50 bg-gray-500" style="height: 2px;"></div>
                            <div class="w-5 h-1 dark:bg-gray-50 bg-gray-500 mt-1" style="height: 2px;"></div>
                            <div class="w-5 h-1 dark:bg-gray-50 bg-gray-500 mt-1" style="height: 2px;"></div>
                        </button>
                    </div>

                    <!-- filters start -->
                    <div :class=" ( hideFilter ? 'hidden' : 'block' ) + ' md:block'">
                        <div class="my-3">
                            <h3 class="mb-3 ">brands</h3>
                            <div class="h-40 rounded border overflow-y-scroll dark:border-gray-700">
                                <ul>
                                    <li 
                                        class="py-1 px-3 hover:bg-gray-100 duration-150 flex items-center justify-between dark:hover:bg-gray-900"
                                        v-for="(brand, index) in advancedFilter.brands" 
                                        :key="index"
                                    >
                                        <label>{{ brand }}</label>
                                        <input type="checkbox">
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="my-3">
                            <h3 class="mb-3 ">Type</h3>
                            <div class="h-40 rounded border overflow-y-scroll dark:border-gray-700">
                                <ul>
                                    <li 
                                        class="py-1 px-3 hover:bg-gray-100 duration-150 flex items-center justify-between dark:hover:bg-gray-900"
                                        v-for="(type, index) in advancedFilter.productType" 
                                        :key="index"
                                    >
                                        <label>{{ type }}</label>
                                        <input type="checkbox">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- filters:end -->

            <!-- products:start -->
            <div class="md:col-span-3 sm:col-span-2 col-span-1">
                <div class="w-full">
                    <div class="w-full pb-3 flex">
                        <div class="px-3 py-2 border-b-4 border-red-500 text-xl font-bold">
                            <h3>{{ getSearchProducts.length }} products found</h3>
                        </div>
                    </div>

                    <div class="w-full px-5 py-2 rounded-xl bg-white shadow-lg dark:bg-gray-800 mb-5">
                        <div class="w-full md:flex block items-center justify-between">
                            <div>
                                <span>Order By</span>
                            </div>
                            <div class="flex flex-wrap md:mt-0 mt-3">
                                <button @click="orderBy = 'All'" :class=" ( orderBy == 'All' ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-900' ) + ' px-3 py-1 rounded-xl  text-white mx-2'">All</button>
                                <button @click="orderBy = 'HighPrice'" :class=" ( orderBy == 'HighPrice' ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-900' ) + ' px-3 py-1 rounded-xl  text-white mx-2'">High Price</button>
                                <button @click="orderBy = 'LowPrice'" :class=" ( orderBy == 'LowPrice' ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-900' ) + ' px-3 py-1 rounded-xl text-white mx-2'">Low Price</button>
                                <button @click="orderBy = 'MostSold'" :class=" ( orderBy == 'MostSold' ? 'bg-blue-500' : 'bg-gray-400 dark:bg-gray-900' ) + ' px-3 py-1 rounded-xl text-white mx-2'">Most Sold</button>
                            </div>
                        </div>
                    </div>

                    <div class="w-full" v-if="getSearchProducts.length == 0">
                        <p>no product found</p>
                    </div>
                    <div v-else class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                        <PorductNormalCard 
                            v-for="(product, index) in getSearchProducts" 
                            :key="index" 
                            :name="product.name"
                            :price="product.price"
                            :discount="product.discount"
                            :description="product.description"
                            :id="product.id"
                            :slug="product.slug"
                        ></PorductNormalCard>
                    </div>
                    <!-- our suggests:end -->
                </div>
            </div>
            <!-- product:end -->
        </div>

        <!-- footer:start -->
        <div class="mt-5">
            <Footer></Footer>
        </div>
        <!-- footer:end -->
    </div>
</template>

<script>
import  { mapActions, mapGetters } from 'vuex';
import PorductNormalCard from '@/components/Cards/PorductNormalCard.vue';
import Footer from '@/components/Footer';
export default {
    name: 'AllProducts',
    
    components: {
        PorductNormalCard,
        Footer,
    },

    data()
    {
        return {
            hideFilter: false,

            orderBy: 'All',

            advancedFilter: {
                brands: [
                    'Apple',
                    'Tesla',
                    'Samsung',
                    'Nokia',
                    'Dell',
                    'HP',
                    'Sony',
                ],
                productType: [
                    'Mobile',
                    'Laptop',
                    'PC',
                    'Game Console',
                    'Screen',
                    'TV',
                    'Camra'
                ],
            }
        }
    },

    computed: {
        ...mapGetters(['getSearchProducts']),
    }
}
</script>

<style>

</style>
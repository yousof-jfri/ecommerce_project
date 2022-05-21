<template>
    <div class="w-full md:pt-36 pt-16 px-5">
        <div class="w-full">
            <div class=" mb-5">
                <ul class="md:flex justify-start items-center">
                    <li class="flex justify-between items-center m-3">
                        <div class="flex items-center pr-3">
                            <button @click="currentComponent = 'ShoppingCartItems'" :class=" ( currentComponent == 'ShoppingCartItems' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-white' ) + ' px-3 py-2 rounded mx-2 duration-150'">
                                <i class="fa fa-shopping-cart"></i>
                            </button>
                            <div class="ml-2 leading-4">
                                <p :class=" (currentComponent == 'ShoppingCartItems' ? 'text-red-500' : 'text-gray-500') + ' font-bold'">Cart</p>
                                <span class="text-xs text-gray-400">Your Cart Items</span>
                            </div>
                        </div>
                        <div>
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </li>
                    <li class="flex justify-between items-center m-3">
                        <div class="flex items-center pr-3">
                            <button @click="currentComponent = 'Address'" :class=" ( currentComponent == 'Address' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-white' ) + ' px-3 py-2 rounded mx-2 duration-150'">
                                <i class="fa fa-home"></i>
                            </button>
                            <div class="ml-2 leading-4">
                                <p :class=" (currentComponent == 'Address' ? 'text-red-500' : 'text-gray-500') + ' font-bold'">Address</p>
                                <span class="text-xs text-gray-400">Enter your Address</span>
                            </div>
                        </div>
                        <div>
                            <i class="fa fa-angle-right"></i>
                        </div>
                    </li>
                    <li class="flex justify-between items-center m-3">
                        <div class="flex items-center pr-3">
                            <button @click="currentComponent = 'Payment'" :class=" ( currentComponent == 'Payment' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-500 dark:bg-gray-800 dark:text-white' ) + ' px-3 py-2 rounded mx-2 duration-150'">
                                <i class="fa fa-address-card"></i>
                            </button>
                            <div class="ml-2 leading-4">
                                <p :class=" (currentComponent == 'Payment' ? 'text-red-500' : 'text-gray-500') + ' font-bold'">Payment</p>
                                <span class="text-xs text-gray-400">Select payment method</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="my-3 p-5">
            <keep-alive>
                <component :is="currentComponent" @changeComponent="changeTheComponent"></component>
            </keep-alive>
        </div>

        <!-- footer:start -->
        <Footer></Footer>
        <!-- footer:end -->

        
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import ShoppingCartItems from '@/components/Basket/ShoppingCartItems.vue';
import Address from '@/components/Basket/Address.vue';
import Payment from '@/components/Basket/Payment.vue';

export default {
    name: 'Basket',

    data(){
        return {
            currentComponent: 'ShoppingCartItems',
        }
    },

    components: {
        Footer,
        ShoppingCartItems,
        Address,
        Payment,
    },

    methods: {
        changeTheComponent(component)
        {
            this.currentComponent = component;
        }
    },
}
</script>

<style>

</style>
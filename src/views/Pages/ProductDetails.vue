<template>
    <div class="px-5 md:pt-36">
        <!-- product card 1:start -->
        <div class="w-full bg-white p-10 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white">
            <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                <!-- product image:start -->
                <div class="col-span-1">
                    <div class="h-full overflow-hidden">
                        <swiper
                            :slides-per-view="1"
                            :space-between="0"
                            navigation
                            :pagination="{ clickable: true }"
                            :scrollbar="{ draggable: true }"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                        >
                            <swiper-slide>
                                <img src="../../assets/images/products/1.png" alt="">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../../assets/images/products/2.png" alt="">
                            </swiper-slide>
                            <swiper-slide>
                                <img src="../../assets/images/products/3.png" alt="">
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <!-- product image:end -->

                <!-- product details:start -->
                <div class="col-span-1">
                    <div class="w-full">
                        <div class="w-full py-3">
                            <h1 class="font-bold text-xl"><strong>{{ getCurrentProduct.name }}</strong></h1>
                        </div>
                        <hr class="my-1">
                        <div class="flex items-center">
                            <div class="flex items-center text-xs mx-2">
                                <i class="fa fa-star text-yellow-400"></i>
                                <span class="mx-2">{{ productRateAverage }}</span>
                                <span class="text-gray-500">({{ getCurrentProduct.comments ? getCurrentProduct.comments.length : '0' }})</span>
                            </div>
                            <div class="flex items-center text-blue-400 text-xs mx-2">
                                <span class="mx-2">comments ({{ getCurrentProduct.comments ? getCurrentProduct.comments.length : '0' }})</span>
                            </div>
                        </div>
                        <div class="mt-5 my-2 w-full rounded border bg-white flex justify-between p-3 dark:bg-gray-900 dark:border-gray-600">
                            <div>
                                 <div class="flex items-center">
                                    <i class="fa fa-motorcycle text-green-500 mr-3"></i>
                                    <h3 class="font-bold">free send</h3>
                                </div>
                                <p class="mt-4 text-sm text-gray-500 dark:text-gray-300">for orders more than 100$</p>
                            </div>
                        </div>
                        <div class="mt-5 my-2 w-full rounded border bg-white flex justify-between p-3  dark:bg-gray-900 dark:border-gray-600">
                            <div class="w-full">
                                <div class="flex items-center justify-between w-full">
                                    <div class="flex items-center">
                                        <i class="fa fa-gifts text-red-500 mr-3"></i>
                                        <h3 class="font-bold">Special for VIP</h3>
                                    </div>
                                    <div>
                                        <i class="fa fa-angle-right text-red-500"></i>
                                    </div>
                                </div>
                                <ul class="pl-5 text-gray-500 dark:text-gray-300">
                                    <li class="flex items-center text-sm mt-3">
                                        <i class="fa fa-check-circle text-xs mr-3 text-red-500"></i>
                                        <p>free send</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- product details:end -->

                <!-- about selesman:start -->
                <div class="md:col-span-1 sm:col-span-2 col-span-1">
                    <div class="w-full rounded-xl border bg-gray-50 dark:bg-gray-900 dark:border-gray-600 p-5">
                        <div class="pb-3 border-b">
                            <h4 class="font-bold">SalesMan</h4>
                        </div>
                        <div class="py-3 border-b flex items-center">
                            <i class="fa fa-shield-alt text-sm mr-3"></i>
                            <span>Warrantly</span>
                        </div>
                        <div class="py-3 border-b flex items-center justify-between">
                            <div class="flex items-center">
                                <i class="fa fa-box text-sm mr-3"></i>
                                <span>inventory</span>
                            </div>
                            <span class="px-2 py-1 text-xs rounded bg-blue-300 text-white">3</span>
                        </div>
                        <div class="py-3 flex items-center justify-between">
                            <div class="flex items-center text-gray-500">
                                <i class="fa fa-question-circle text-sm mr-3"></i>
                                <span>price</span>
                            </div>
                            <div>
                                <div v-if="getCurrentProduct.discount > 0" class="flex items-center mb-3">
                                    <span class="font-bold text-sm mx-3 rounded-full bg-red-500 px-2 py-1 text-white">{{ getCurrentProduct.discount }}%</span>
                                    <del class="text-sm text-gray-400 font-bold">{{ getCurrentProduct.price }}$</del>
                                </div>
                                <div class="text-center">
                                    <span class="text-xl font-bold">{{ getProductAfterDiscount }}$</span>
                                </div>
                            </div>
                        </div>

                        <!-- add to cart button:start -->
                        <div class="w-full">
                            <button v-if="!insideBasket" @click="insideBasket = true; quantity = 1" class="btn btn-full btn-red-inline text-sm font-bold">add to basket</button>
                            <div v-else class="w-full flex justify-between items-center">
                                <div class="w-2/4">
                                    <div class="flex items-center text-green-500">
                                        <i class="fa fa-shopping-cart mr-2"></i>
                                        <p class="font-bold">Inside basket</p>
                                    </div>
                                    <a href="" class="text-xs font-bold text-blue-500">view in basket</a>
                                </div>
                                <div class="flex justify-center items-center w-2/4 mt-3">
                                    <button @click="quantity += 1" class="w-5 text-white text-sm font-bold bg-blue-500 rounded">+</button>
                                    <input type="number" class="w-12 border rounded mx-2 text-center dark:bg-gray-900 dark:border-gray-700" v-model="quantity">
                                    <button @click="quantity -= 1" class="w-5 text-white text-sm font-bold bg-blue-500 rounded">-</button>
                                </div>
                            </div>
                        </div>
                        <!-- add to cart button:start -->
                    </div>
                </div>
                <!-- about selesman:end -->
            </div>
        </div>
        <!-- product card 1:end -->

        <!-- product info:start -->
        <div class="w-full bg-white p-5 my-5 rounded-xl shadow-lg text-gray-700 dark:bg-gray-800 dark:text-white">
            <!-- menu:start -->
            <div class="w-full">
                <ul class="flex items-center border-b dark:border-gray-700">
                    <li>
                        <button @click="currentComponent = 'Description'" :class=" ( currentComponent == 'Description' ? ' border-red-500' : 'border-white dark:border-gray-800' ) + ' px-2 py-1 font-bold border-b-4'">description</button>
                    </li>
                    <li>
                        <button @click="currentComponent = 'Details'" :class=" ( currentComponent == 'Details' ? ' border-red-500' : 'border-white dark:border-gray-800' ) + ' px-2 py-1 font-bold border-b-4'">features</button>
                    </li>
                    <li>
                        <button @click="currentComponent = 'Comments'" :class=" ( currentComponent == 'Comments' ? ' border-red-500' : 'border-white dark:border-gray-800' ) + ' px-2 py-1 font-bold border-b-4'">comments</button>
                    </li>
                </ul>
            </div>
            <!-- menu:end -->
            <div class="w-full p-5">
                <keep-alive>
                    <component :is="currentComponent" :product="getCurrentProduct" :rate="productRateAverage"></component>
                </keep-alive>
            </div>
        </div>
        <!-- product info:end -->



        <!-- similar product:start -->
        <div class="w-full">
            <div class="w-full my-5 rounded-xl bg-red-500 dark:bg-gray-900 px-5 py-2">
                <div class="flex flex-wrap">
                    <div class="md:w-1/5 w-full p-3 overflow-hidden flex items-center justify-center">
                        <h3 class="text-2xl text-white font-bold">Similar Products</h3>
                    </div>
                    <div class="md:w-4/5 w-full p-3 overflow-hidden">
                        <swiper
                            :slides-per-view="4"
                            :space-between="5"
                            :breakpoints="
                            {
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween:5
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 5
                                },
                                640: {
                                    slidesPerView: 4,
                                    spaceBetween: 5
                                },
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 5
                                },
                                200: {
                                    slidesPerView: 1,
                                    spaceBetween: 5
                                }
                            }"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                        >
                            <swiper-slide v-for="product in allProducts" :key="product.id">
                                <DiscountCard 
                                    :title="product.name" 
                                    :prev_price="product.price" 
                                    :discount="product.discount"
                                    :slug="product.slug"
                                    :id="product.id"
                                />
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
        <!-- similar product:end -->



        <!-- footer:start -->
        <Footer></Footer>
        <!-- footer:end -->
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// components
import Footer from '@/components/Footer.vue'
import Description from '@/components/ProductDetails/Description.vue';
import Details from '@/components/ProductDetails/Details.vue';
import Comments from '@/components/ProductDetails/Comments.vue';
import DiscountCard from '@/components/Cards/DiscountCard.vue'

export default {
    name: 'ProductDetails',
    components: {
        Swiper,
        SwiperSlide,
        Description,
        Details,
        Comments,
        Footer,
        DiscountCard,
    },

    watch: {
        quantity(newVal, oldVal)
        {
            if(newVal <= 0){
                this.insideBasket = false;
                this.quantity = 0;
            }
        },

        
    },

    data()
    {
        return{
            currentProductId: this.$route.params.id,
           
            insideBasket: false,
            quantity: 0,

            currentComponent: 'Description',
        }
    },

    created()
    {
        console.log('created')
        this.setProduct();
    },

    computed: {
        ...mapGetters(['getCurrentProduct', 'allProducts']),

        // take the price and discount and return the price after binding discount
        getProductAfterDiscount()
        {
            let price = this.getCurrentProduct.price;
            let discount = this.getCurrentProduct.discount;
            price = price - ((price / 100) * discount)
            return price;
        },

        // get the average of the rates
        productRateAverage()
        {
            let comments = JSON.parse(JSON.stringify(this.getCurrentProduct.comments));
            let rate = 0;
            let rateAverage;

            comments.forEach(comment => {
                rate += Number(comment.rate)
            });

            rateAverage = rate / comments.length

            return rateAverage;
        }
    },

    updated()
    {
        this.setProduct();
    },

    methods: {
        ...mapMutations(['getProduct']),
        ...mapActions(['fetchProduct']),

        // get product id and find the product and put that inside state
        setProduct()
        {
            let id = this.$route.params.id;
            this.fetchProduct(id)
        },

        onSwiper(swiper){
            console.log(swiper);
        },

        onSlideChange(){
            console.log('slide change')
        },
    }
}
</script>

<style>

</style>
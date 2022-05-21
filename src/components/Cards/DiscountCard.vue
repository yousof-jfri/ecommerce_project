<template>
    <!-- discount cards:start -->
    <router-link :to="{ name: 'ProductDetails', params: { slug: slug, id: id} }">
        <div class="w-full bg-white dark:bg-gray-700 dark:text-white md:h-60 h-36 rounded p-2 group hover:cursor-pointer md:text-md text-sm">
            <!-- product image:start -->
            <div class="w-full md:h-36 h-16 rounded overflow-hidden">
                <img src="../../assets/images/products/1.png" :alt="title" class="w-full">
            </div>
            <!-- product image:end -->
            <div class="w-full px-5">
                <div class="w-full flex justify-between items-center my-2">
                    <span class="font-bold">{{ priceAfterDiscount + '$' }}</span>
                    <span class="md:px-2 px-1 py-1 rounded bg-red-500 text-white font-bold">{{ discount + '%' }}</span>
                </div>
                <del class="font-bold text-gray-400 dark:text-gray-200">{{ prev_price + '$' }}</del>
            </div>
        </div>
    </router-link>
    <!-- discount cards:end -->
</template>

<script>
export default {
    name: 'DiscountCard',

    data()
    {
        return {
            priceAfterDiscount: 0,
        }
    },

    mounted(){
        this.calculateDiscountPrice()
    },

    methods : {
        calculateDiscountPrice()
        {
            let price = this.prev_price;
            let discount = this.discount;
            price = price - ((price / 100) * discount)
            this.priceAfterDiscount = price;
        }
    },

    props: ['id', 'title', 'prev_price', 'discount', 'slug'],
}
</script>

<style>

</style>
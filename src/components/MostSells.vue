<template>
    <div class="w-full rounded-xl border border-gray-300 p-5 dark:bg-gray-900 dark:border-gray-900 dark:text-white">
        <div class="w-full flex items-center justify-center text-2xl">
            <h3 class="font-semibold mx-2">most sold out</h3>
            <i class="fa fa-fire text-yellow-500"></i>
        </div>
        <div class="w-full grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mt-5">
            <router-link v-for="(product, index) in sortBySold" :key="index" :to="{ name: 'ProductDetails', params: { slug: product.slug, id: product.id} }" class="block cursor-pointer w-full py-3 px-10 bg-white rounded-xl border hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 duration-150">
                <div class="flex items-center justify-between">
                    <div class="w-2/6">
                        <span class="text-5xl text-blue-400">{{ index + 1 }}</span>
                    </div>
                    <div class="w-2/6">
                        <p class="font-bold text-sm">{{ product.name }}</p>
                    </div>
                    <div class="w-2/6 flex justify-center">
                        <img src="../assets/images/products/4.png" :alt="product.name">
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MostSells',

    computed : {
        sortBySold()
        {
            let products = this.products;
            products.sort((a, b) => {
                if(a.sells < b.sells) return 1;
                if(a.sells > b.sells) return -1;

                return 0;
            })

            return products;
        }
    },

    props: [
        'products'
    ],
}
</script>

<style>

</style>
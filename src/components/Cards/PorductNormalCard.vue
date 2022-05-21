<template>
    <div>
        <router-link :to="{ name: 'ProductDetails', params: { slug: slug, id: id} }" class="block col-span-1 border rounded p-3 h-80 group hover:bg-white cursor-pointer duration-150 overflow-hidden dark:bg-gray-800 dark:border-gray-800 dark:hover:bg-gray-900">
            <div class="w-full rounded overflow-hidden md:h-40 h-24 relative">
                <img src="../../assets/images/products/7.png" :alt="name" class="w-full">
                <span v-if="discount > 0" class="absolute top-0 right-0 px-1 py-1 text-xs text-white font-bold bg-red-500">
                    {{ discount }}%
                </span>
            </div>
            <div class="mt-2">
                <div class="px-2 flex items-start justify-between mb-2">
                    <div class="border-l-4 border-red-500 px-2">
                        <h3><strong>{{ name }}</strong></h3>
                    </div>
                    <div v-if="discount == 0">
                        <span class="text-sm font-bold text-gray-500 dark:text-gray-300">{{ price }}$</span>
                    </div>
                    <div v-else>
                        <del class="text-sm font-bold text-gray-500 dark:text-gray-300">{{ price }}$</del>
                        <br>
                        <span class="text-sm font-bold text-gray-500 dark:text-gray-300">{{ discountPrice }}$</span>
                    </div>
                </div>
                <div class="mt-2">
                    <p class="text-sm text-gray-500 dark:text-gray-300">{{ filteredDescription }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'PorductNormalCard',

    props: ['name', 'price', 'discount', 'description', 'slug', 'id'],

    computed: {
        filteredDescription()
        {
            return this.description.substring(0, 50) + ' ...'
        },

        discountPrice()
        {
            let price = this.price;
            let discount = this.discount;
            price = price - ((price / 100) * discount)
            return price;
        }
    },
}
</script>

<style>

</style>
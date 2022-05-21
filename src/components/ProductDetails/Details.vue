<template>
    <div>
        <div class="flex">
            <div class="w-1/4 mb-3 px-3">
                <h3 class="font-bold text-red-500 dark:text-white text-xl">features</h3>
            </div>
            <div class="w-3/4">
                <div class="w-full">
                    <div class="flex mt-3" v-for="(attribute, index) in product.attributes" :key="index">
                        <div class="w-1/5">
                            <h4>{{ attribute.name }}</h4>
                        </div>
                        <div class="w-4/5 flex">
                            <div v-if="attribute.name == 'Color'" class="flex">
                                <button v-for="(feature, index) in attribute.values" :key="index" :style="`background-color: ${feature};`" class="mr-2 border h-5 w-5 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 duration-150"></button>
                            </div>
                            <span v-else class="mx-2" v-for="(feature, index) in attribute.values" :key="index">{{ feature }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Details',

    props: ['product'],
}
</script>

<style>

</style>
<template>
    <div>
        <div class="w-full mb-3 px-3">
            <h3 class="font-bold text-red-500 dark:text-white text-xl">Description</h3>
        </div>
        <p class="text-sm font-bold text-gray-500 dark:text-gray-300">{{ product.description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Description',
    props: ['product']
}
</script>

<style>

</style>
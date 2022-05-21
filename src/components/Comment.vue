<template>
    <div class="w-full rounded border mt-5 dark:border-gray-700 dark:bg-gray-900">
        <div class="w-full py-3 px-5 flex items-center">
            <span class="font-bold mr-3">{{ comment.user }}</span>
            <span class="text-xs font-bold text-gray-500 dark:text-gray-300">3 mins</span>
            <div class="flex items-center ml-3">
                <i class="fa fa-star text-yellow-400 text-xs ml-1" v-for="(star, index) in starArray" :key="index"></i>
            </div>
        </div>
        <div class="w-full pb-3 px-10">
            <p class="text-sm font-bold text-gray-500 dark:text-gray-300">{{ comment.comment }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Comment',

    props: ['comment'],

    computed: {
        starArray()
        {
            let stars = [];
            for(let i = 0; i < Math.floor(this.comment.rate); i++)
            {
                stars.push(i)
            }
            return stars;
        }
    },
}
</script>

<style>

</style>
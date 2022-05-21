<template>
    <div class="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1">
        <!-- comments rate average:start -->
        <div class="col-span-1">
            <div class="w-full flex items-center">
                <div>
                    <span class="text-2xl font-bold text-blue-500">{{ rate }}</span>
                </div>
                <div>
                    <span class="font-bold text-sm mx-2 text-gray-500 dark:text-gray-300">from 5</span>
                </div>
            </div>
            <div class="w-full flex items-center">
               <div>
                    <div class="flex my-3">
                        <i class="fa fa-star text-sm mr-2 text-yellow-400" v-for="(star, index) in starArray" :key="index"></i>
                    </div>
                    <div class="mt-3">
                        <p class="text-gray-500 text-sm font-bold dark:text-gray-300">register your comment</p>
                    </div>
                    <div class="w-full mt-4">
                        <button class="btn w-full btn-red-inline text-sm font-bold">your comment</button>
                    </div>
               </div>
                
            </div>
        </div>
        <!-- comments rate average:end -->

        <!-- all comments:start -->
        <div class="md:col-span-3 sm:col-span-2 col-span-1 md:mt-0 mt-5">
            <div class="w-full my-3">
                <h3 class="text-xl font-bold text-blue-400">Comments ({{ product.comments.length }})</h3>
            </div>
            <div class="w-full h-80 overflow-y-scroll rounded border dark:border-gray-700">
                <div class="w-full p-5">
                    <!-- comments:start -->
                    <Comment v-for="(comment, index) in product.comments" :key="index" :comment="comment"></Comment>
                    <!-- comments:end -->
                </div>
            </div>
        </div>
        <!-- all comments:end -->
    </div>
</template>

<script>
import Comment from '../Comment.vue'

export default {
    name: 'Comments',

    components: {
        Comment,
    },

    props: ['product', 'rate'],

    computed: {
        starArray()
        {
            let stars = [];
            for(let i = 0; i < Math.floor(this.rate); i++)
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
<template>
    <div class="w-full h-80 border rounded-xl overflow-hidden hover:bg-gray-50 duration-150 dark:border-gray-800 dark:hover:bg-gray-900 dark:bg-gray-800">
        <div class="w-full h-40 rounded overflow-hidden">
            <img src="../../assets/images/topics/7.jpg" :alt="title" class="w-full transform hover:scale-125 duration-150">
        </div>

        <div class="my-2 px-5">
            <div class=" flex items-start justify-between">
                <div class="border-l-4 border-red-500 px-2">
                    <h3><strong>{{ title }}</strong></h3>
                </div>
            </div>
            <div class="mt-3">
                <p class="text-sm font-bold text-gray-500 dark:text-gray-300">{{ filteredDescription }}</p>
            </div>
        </div>
        <div class="px-5 flex justify-start items-center">
            <button @click="likeTopic" :class=" (liked ? 'text-red-500' : '') + ' flex items-center font-bold text-sm cursor-pointer'">
                <i class="fa fa-heart mr-1"></i>
                <span>{{ likes }}</span>
            </button>
            <div class="flex items-center font-bold text-sm ml-5">
                <i class="fa fa-eye mr-1"></i>
                <span>{{ views }}</span>
            </div>
        </div>
    </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    name: 'TopicCard',

    data(){
        return {
            liked: false,
        }
    },

    props: ['id', 'title', 'description', 'user', 'created_at', 'views', 'likes'],

    computed: {
        filteredDescription()
        {
            return this.description.substring(0, 50) + ' ...'
        },
    },

    methods:{
        ...mapMutations(['addNewLike', 'removeLike']),

        // like topic
        likeTopic(event){
            if(!this.liked)
            {
                let btn = event.target;
                this.liked = true;
                
                // send ajax request
                this.addNewLike(this.id)
            }else {
                let btn = event.target;
                this.liked = false;
                
                // send ajax request
                this.removeLike(this.id)
            }
        }
    }
}
</script>

<style>

</style>
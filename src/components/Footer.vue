<template>
    <div class="w-full px-5">
        <!-- footer:start -->
        <footer class="bg-white p-5 rounded-t-2xl dark:bg-gray-800">
            <div class="w-full px-5">
                <h1 class="text-red-500 dark:text-blue-300 text-xl font-bold"><strong>{{ appName }}</strong></h1>
            </div>
            <hr class="my-5">
            <div class="w-full grid md:grid-cols-4 grid-cols-1 gap-10">
                <!-- about:start -->
                <div class="col-span-1">
                    <h3 class="text-xl font-bold mb-5">About Us</h3>
                    <p class="text-sm font-bold text-gray-500 dark:text-gray-300 leading-6">{{ about }}</p>
                </div>
                <!-- about:start -->

                <!-- service:start -->
                <div class="col-span-1">
                    <h3 class="text-xl font-bold mb-5">Our Services</h3>
                    <ul class="text-sm font-bold text-gray-500 dark:text-gray-300">
                        <li v-for="(item, index) in services" :key="index" class="mt-2">
                            <a href="" class="hover:text-blue-500">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <!-- service:end -->

                <!-- help:start -->
                <div class="col-span-1">
                    <h3 class="text-xl font-bold mb-5">Help</h3>
                    <ul class="text-sm font-bold text-gray-500 dark:text-gray-300">
                        <li v-for="(item, index) in help" :key="index" class="mt-2">
                            <a href="" class="hover:text-blue-500">{{ item }}</a>
                        </li>
                    </ul>
                </div>
                <!-- help:end -->

                <!-- contact:start -->
                <div class="col-span-1">
                    <h3 class="text-xl font-bold mb-5">Stay with us on</h3>
                    <ul class="w-full flex items-center justify-center">
                        <li class="mx-2" v-for="(media, index) in socialMedias" :key="index">
                            <a href="" class="px-2 py-1 bg-white dark:bg-gray-900 shadow-lg duration-150 hover:bg-red-400 hover:text-white rounded">
                                <i :class="`fab fa-${media.name}`"></i>
                            </a>
                        </li>
                    </ul>
                    <hr class="my-5">
                    <h3 class="font-bold mb-5">With registering your email, you will achive the newest discounts</h3>
                    <form @submit.prevent="registerEmail">
                        <div class="flex">
                            <input type="email" class="form-input ring-blue" placeholder="your email" v-model="email">
                            <button class="btn btn-blue ml-3">register</button>
                        </div>
                    </form>
                </div>
                <!-- contact:start -->
            </div>
        </footer>
        <!-- footer:end -->
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data()
    {
        return {

            email: '',

            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea obcaecati deleniti qui assumenda voluptas magni voluptatum ipsum? Molestiae optio aut facilis corrupti aperiam, rem cum ab iste. Reiciendis, pariatur.',
            help: [
                'How to register an order',
                'How we send your order',
                'How to pay',
            ],
            services: [
                'Answer to your questions',
                'return back product',
                'How to use',
                'Privacy policy',
                'report bug',  
            ],
            socialMedias: [
                {name: 'twitter', link: 'this is your link'},
                {name: 'instagram', link: 'this is your link'},
                {name: 'facebook', link: 'this is your link'},
                {name: 'linkedin', link: 'this is your link'},
            ]
        }
    },

    inject: ['appName'],


    methods: {
        registerEmail()
        {
            console.log('registered')
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <div class="w-full py-5 px-5 border-b dark:text-white">
            <h3 class="text-xl">Login</h3>
        </div>
        <div class="mt-5 pb-5 px-3">
            <form @submit.prevent="login">
                <div class="my-4">
                    <input type="email" class="form-input ring-blue" v-model="user.email" placeholder="email">
                    <div @click="errors.email = []" class="mx-2 my-1 text-red-500 cursor-pointer" v-if="errors.email">
                        <p v-for="( error, index ) in errors.email" :key="index">{{ error }}</p>
                    </div>
                </div>
                <div class="my-4">
                    <input type="password" class="form-input ring-blue" v-model="user.password" placeholder="password">
                    <div @click="errors.password = []" class="mx-2 my-1 text-red-500 cursor-pointer" v-if="errors.email">
                        <p v-for="( error, index ) in errors.password" :key="index">{{ error }}</p>
                    </div>  
                </div>
                 <div class="my-4 flex items-center">
                    <input type="checkbox" v-model="user.remember" class="mr-4 rounded-full w-5 h-5 outline-none"> 
                    <span>remember me</span>
                </div>
                <div class="my-4">
                    <button type="submit" class="btn-full btn btn-blue">Login</button>
                </div>
                <div class="my-4">
                    <router-link class="text-blue-500 dark:text-blue-200" :to="{ name: 'Register' }">new to out application? create new account.</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    
    data()
    {
        return {
            user: {
                email: '',
                password: '',
                remember: false,
            },

            errors: {
                email: [],
                password: [],
                remember: [],
            }
        }
    },


    methods: {
        login()
        {
            
            this.validateForm(this.user)
        },

        validateForm(user)
        {
            for (const data in user) {

                if(data != 'remember')
                {
                    if(user[data] == '')
                    {
                        this.errors[data] = ['this field is required']
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>
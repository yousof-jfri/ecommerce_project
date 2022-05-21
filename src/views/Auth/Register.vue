<template>
    <div>
        <div class="w-full py-5 px-5 border-b dark:text-white">
            <h3 class="text-xl">Register</h3>
        </div>
        <div class="mt-5 pb-5 px-3">
            <form @submit.prevent="login">
                <div class="w-full grid md:grid-cols-2 grid-cols-1 my-4 gap-5">
                    <div class="col-span-1">
                        <input type="text" class="form-input ring-blue" v-model="user.name" placeholder="name">
                        <div @click="errors.name = []" class="mx-2 my-1 text-red-500 cursor-pointer" v-if="errors.name">
                            <p v-for="( error, index ) in errors.name" :key="index">{{ error }}</p>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <input type="text" class="form-input ring-blue" v-model="user.lastName" placeholder="last name">
                        <div @click="errors.lastName = []" class="mx-2 my-1 text-red-500 cursor-pointer" v-if="errors.lastName">
                            <p v-for="( error, index ) in errors.lastName" :key="index">{{ error }}</p>
                        </div>  
                    </div>
                </div>
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
                <div class="my-4">
                    <input type="password" class="form-input ring-blue" v-model="user.password_confirmation" placeholder="password confirmation"> 
                </div>


                <div class="my-4">
                    <button type="submit" class="btn-full btn-blue">Register</button>
                </div>
                <div class="my-4">
                    <router-link class="text-blue-500 dark:text-blue-200" :to="{ name: 'Login' }">already have an account</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    
    data()
    {
        return {
            user: {
                name: '',
                lastName: '',
                contry: '',
                email: '',
                password: '',
                password_confirmation: '',
            },

            errors: {
                name: [],
                lastName: [],
                contry: [],
                email: [],
                password: [],
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
                if(user[data] == '')
                {
                    this.errors[data] = ['this field is required']
                }
            }

            if(user.password_confirmation != user.password)
            {
                this.errors.password.push('password confirmation does not match')
            }else {
                 this.errors.password = []
            }
        }
    }
}
</script>

<style>

</style>
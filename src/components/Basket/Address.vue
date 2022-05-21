<template>
    <div class="w-full grid md:grid-cols-4 grid-cols-1 gap-5">
        <div class="md:col-span-3 col-span-1">
            <div class="w-full p-5 rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                <div class="w-full">
                    <h3 class="">Add Your Address</h3>
                    <p class="text-sm text-gray-400">Be sure to check "Deliver to this address" when you have finished</p>
                </div>
                <div>
                    <form @submit.prevent="deliverAndChangeCom">
                        <div class="mt-4 grid md:grid-cols-2 grid-cols-1 gap-5">
                            <div class="col-span-1">
                                <div class="my-2">
                                    <label for="fullName" class="text-sm">Full Name</label>
                                    <input type="text" name="full-name" v-model="userAddress.fullName" id="fullName" class="form-input input-b-blue" placeholder="full name">
                                </div>

                                <div class="my-2">
                                    <label for="house-number" class="text-sm">Flat, House No:</label>
                                    <input type="text" name="house-number" id="house-number" v-model="userAddress.houseNum" class="form-input input-b-blue" placeholder="Flat, House No:">
                                </div>

                                <div class="my-2">
                                    <label for="town" class="text-sm">Town/City:</label>
                                    <input type="text" name="town" id="town" class="form-input input-b-blue" v-model="userAddress.town" placeholder="Town/City:">
                                </div>

                                <div class="my-2">
                                    <label for="state" class="text-sm">State:</label>
                                    <input type="text" name="state" id="state" class="form-input input-b-blue" v-model="userAddress.state" placeholder="State:">
                                </div>

                            </div>
                            <div class="col-span-1">
                                <div class="my-2">
                                    <label for="mobile-number" class="text-sm">Mobile Number</label>
                                    <input type="text" name="mobile-number" id="mobile-number" class="form-input input-b-blue" v-model="userAddress.mobile" placeholder="mobile number">
                                </div>

                                <div class="my-2">
                                    <label for="near" class="text-sm">Landmark e.g. near apollo hospital:</label>
                                    <input type="text" name="near" id="near" class="form-input input-b-blue" v-model="userAddress.near" placeholder="Landmark e.g. near apollo hospital:">
                                </div>

                                <div class="my-2">
                                    <label for="Pincode:" class="text-sm">Pincode:</label>
                                    <input type="text" name="Pincode:" id="Pincode:" class="form-input input-b-blue" v-model="userAddress.pincode" placeholder="Pincode:">
                                </div>

                                <div class="my-2">
                                    <label for="address-type" class="text-sm">Address Type</label>
                                    <select name="address-type" id="address-type" class="form-input input-b-blue" v-model="userAddress.addressType" placeholder="Address Type">
                                        <option value="Home">Home</option>
                                        <option value="Work">Work</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="my-2">
                            <button type="submit" class="btn btn-blue text-sm font-bold">Save And Deliver Here</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="col-span-1">
            <div class="w-full p-5 rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                <div class="w-full pb-3">
                    <p class="text-xl text-blue-500 ">{{ userAddress.fullName ?  userAddress.fullName : 'Your Name' }}</p>
                </div> 
                <ul class="text-gray-500 dark:text-gray-300">
                    <li>{{ userAddress.houseNum ? userAddress.houseNum : 'flat, house number' }}</li>
                    <li>type: {{ userAddress.addressType ? userAddress.addressType : 'flat, house number' }}</li>
                </ul>

                <ul class="mt-5 text-gray-500 dark:text-gray-300">
                    <li>UTC-5: Eastern Standard Time (EST)</li>
                    <li>202-555-0140</li>
                </ul>

                <div class="mt-5">
                    <button @click="deliverAndChangeCom" class="btn btn-blue btn-full">Deliver To This Address</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Address',

    data()
    {
        return {
            userAddress: {
                fullName: '',
                houseNum: '',
                town: '',
                state: '',
                mobile: '',
                near: '',
                pincode: '',
                addressType: '',
            }
        }
    },

    emits: ['changeComponent'],

    methods: {
        // save new address and change component
        deliverAndChangeCom()
        {
            this.saveAddress();

            // changeComponent
            this.$emit('changeComponent', 'Payment');
        },

        // save
        saveAddress()
        {
            // save
        }
    }
}
</script>

<style>

</style>
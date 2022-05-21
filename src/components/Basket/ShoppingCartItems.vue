<template>
    <div class="w-full grid md:grid-cols-4 gap-5 grid-cols-1">
        <!-- cart items start -->
        <div class="md:col-span-3 col-span-1">
            <div class="w-full rounded-xl shadow-lg overflow-hidden bg-white flex md:flex-wrap-none flex-wrap my-3 dark:bg-gray-800"  v-for="order in orders" :key="order.id">
                <!-- image -->
                <div class="md:w-1/4 w-full">
                    <div class="w-full flex items-center justify-center">
                        <img src="../../assets/images/products/16.png" :alt="order.product.name ">
                    </div>
                </div>

                <!-- description -->
                <div class="md:w-2/4 w-full p-4">
                    <h3 class="text-gray-500 dark:text-white"><b>{{ order.product.name }}</b></h3>

                    <p class="text-sm">by <span class="text-red-500"> Apple</span> </p>

                    <div class="w-full my-4 flex">
                        <i class="fa fa-star text-sm text-yellow-400"></i>
                        <i class="fa fa-star text-sm text-yellow-400"></i>
                        <i class="fa fa-star text-sm text-yellow-400"></i>
                        <i class="fa fa-star text-sm text-yellow-400"></i>
                    </div>

                    <span class="font-bold text-green-500">In stock</span>

                    <br>
                    <div class="flex items-center w-2/4 mt-3">
                        <button @click="order.quantity += 1" class="w-5 text-white text-sm font-bold bg-blue-500 rounded">+</button>
                        <input type="number" class="w-12 border rounded mx-2 text-center dark:bg-gray-800 dark:border-gray-700" v-model="order.quantity">
                        <button @click="order.quantity -= 1" class="w-5 text-white text-sm font-bold bg-blue-500 rounded">-</button>
                    </div>

                    <p class="text-gray-400 text-sm font-bold mt-3">Delivery by, {{ order.delivery }}</p>
                </div>

                <!-- action -->
                <div class="md:w-1/4 w-full py-10 flex items-center justify-center">
                    <div class="text-center">
                        <p class="text-xl text-blue-400 mb-3">${{ order.product.price }}</p>
                        <span class="px-2 py-1 text-xs bg-green-100 text-green-500 font-bold rounded-full dark:text-white dark:bg-green-500">free shipping</span>
                        <button @click="removeOrder(order.id)" class="btn btn-gray btn-full my-3 hover:bg-red-500 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-red-500">
                            <i class="fa fa-trash mr-2"></i>
                            <span>remove</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- cart items end -->

        <!-- :start -->
        <div class="col-span-1">
            <div class="w-full rounded-xl shadow-lg bg-white dark:bg-gray-800">
                <div class="w-full p-5">
                    <h4 class="text-blue-500 text-xl">Options</h4>
                </div>
                <div class="px-5 pb-5 border-b">
                    <h4><b>Price Details</b></h4>
                    <ul class="text-gray-500 dark:text-gray-200">
                        <li class="my-1 flex justify-between items-center">
                            <p>Total Price</p>
                            <span>${{ totalPrice }}</span>
                        </li>
                        <li class="my-1 flex justify-between items-center">
                            <p>Total Discounts</p>
                            <div class="flex items-center justify-center" v-for="order in orders" :key="order.id">
                                <span v-if="order.product.discount > 0" class="mx-0 px-2 py-1 text-xs bg-yellow-500 text-white rounded font-bold">%{{ order.product.discount }}</span>
                            </div>
                        </li>
                        <li class="my-1 flex justify-between items-center">
                            <p>Bag Discount</p>
                            <span>${{ totalPriceWithDiscount }}</span>
                        </li>
                        <li class="my-1 flex justify-between items-center">
                            <p>Delivery Charges</p>
                            <span class="text-green-400">free</span>
                        </li>
                    </ul>
                </div>
                <div class="p-5">
                    <div class="flex items-center justify-between">
                        <span><b>Total</b></span>
                        <span><b>${{ totalPriceWithDiscount }}</b></span>
                    </div>
                    <div class="mt-3">
                        <button @click="checkout" class="btn btn-blue w-full">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- :end -->
    </div>
</template>

<script>
export default {
    name: 'ShoppingCartItems',

    data()
    {
        return {
            quantity: 1,
            orders : [
                {
                    id: 1,
                    product: {
                        id: 1,
                        name : 'Iphone 11 pro max',
                        slug : 'Iphone-11-pro-max',
                        category_id: 1,
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi esse quidem repellat cumque officiis consequuntur, adipisci tempore cupiditate saepe maiores ipsa similique qui facilis facere animi in eius dolorum?',
                        attributes: [
                            {name: 'Color', values: ['white', 'blue', 'red']},
                            {name: 'Ram', values: ['6GB']},
                            {name: 'Storage', values: ['128GB']},
                        ],
                        inventory: 12,
                        sells: 8,
                        price: 900,
                        discount: 5,
                        comments: [
                            {
                                id: 1,
                                rate:5,   
                                comment: 'this was perfect',
                                user: 'Mahdi Jafari',
                            },
                            {
                                id: 2,
                                rate:5,   
                                comment: 'this was perfect',
                                user: 'yousef Jafari',
                            },
                            {
                                id: 3,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'Hussan Jafari',
                            },
                            {
                                id: 4,
                                rate:1,   
                                comment: 'this was perfect',
                                user: 'Mohammad Jafari',
                            },
                            {
                                id: 5,
                                rate:4,   
                                comment: 'this was perfect',
                                user: 'Sediq Jafari',
                            },
                        ]
                    },
                    quantity: 3,
                    delivery: 'Wed Apr 25',
                },
                {
                    id: 2,
                    product:  {
                        id: 2,
                        name : 'mac book pro',
                        slug : 'mac-book-pro',
                        category_id: 2,
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi esse quidem repellat cumque officiis consequuntur, adipisci tempore cupiditate saepe maiores ipsa similique qui facilis facere animi in eius dolorum?',
                        attributes: [
                            {name: 'Color', values: ['black', 'blue', 'red']},
                            {name: 'Ram', values: ['12GB']},
                            {name: 'Storage', values: ['1TB']},
                        ],
                        inventory: 4,
                        sells: 2,
                        price: 2000,
                        discount: 60,
                        comments: [
                            {
                                id: 6,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'Mahdi Jafari',
                            },
                            {
                                id: 7,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'yousef Jafari',
                            },
                            {
                                id: 8,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'Hussan Jafari',
                            },
                            {
                                id: 9,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'Mohammad Jafari',
                            },
                            {
                                id: 10,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'Sediq Jafari',
                            },
                        ]
                    },
                    quantity: 1,
                    delivery: 'Wed Jan 25',
                },
                {
                    id: 3,
                    product:  {
                        id: 3,
                        name : 'mac book pro',
                        slug : 'mac-book-pro',
                        category_id: 2,
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, modi esse quidem repellat cumque officiis consequuntur, adipisci tempore cupiditate saepe maiores ipsa similique qui facilis facere animi in eius dolorum?',
                        attributes: [
                            {name: 'Color', values: ['black', 'blue', 'red']},
                            {name: 'Ram', values: ['12GB']},
                            {name: 'Storage', values: ['1TB']},
                        ],
                        inventory: 4,
                        sells: 0,
                        price: 2000,
                        discount: 0,
                        comments: [
                            {
                                id: 11,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'Mahdi Jafari',
                            },
                            {
                                id: 12,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'yousef Jafari',
                            },
                            {
                                id: 13,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'Hussan Jafari',
                            },
                            {
                                id: 14,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'Mohammad Jafari',
                            },
                            {
                                id: 15,
                                rate:3,   
                                comment: 'this was perfect',
                                user: 'Sediq Jafari',
                            },
                        ]
                    },
                    quantity: 2,
                    delivery: 'Wed feb 11',
                },
               
            ],
        }
    },

    emits: ['changeComponent'],

    methods: {
        // remove order from orders
        removeOrder(id)
        {
            let orders = this.orders;
            orders = orders.filter((order) => {
                return order.id != id;
            })
            this.orders = orders;
        },

        // change component to checkout
        checkout()
        {
            this.$emit('changeComponent', 'Address');
        }
    },

    computed: {
        // return total price without discount
        totalPrice()
        {
            let price = 0;
            this.orders.forEach(order => {
                price += order.product.price
            })
            return price;
        },

        // return total price with discount 
        totalPriceWithDiscount()
        {
            let price = 0;
            this.orders.forEach(order => {
                if(order.product.discount > 0)
                {
                    // get the price after binding discount
                    price += order.product.price - (( order.product.price / 100 ) * order.product.discount)
                }else {
                    price += order.product.price;
                }
            })

            return price;
        }
    }
}
</script>

<style>

</style>
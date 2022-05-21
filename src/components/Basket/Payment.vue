<template>
    <div class="w-full grid md:grid-cols-4 grid-cols-1 gap-5">
        <div class="md:col-span-3 col-span-1">
            <div class="w-full p-5 rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                <div class="w-full">
                    <h3 class="text-xl text-gray-600 dark:text-gray-300">Payment Options</h3>
                    <p class="text-gray-400 dark:text-gray-300">Be sure to click on correct payment option</p>
                </div>

                <div class="my-2">
                    <p class="text-sm dark:text-gray-200">Yousef</p>
                    <div class="mt-5 flex items-center text-sm">
                        <label for="cvv">Eneter CVV</label>
                        <div class="md:w-2/4 mx-2 flex">
                            <input type="text" class="form-input input-b-blue">
                            <button class="btn btn-blue text-sm mx-2">Continue</button>
                        </div>
                    </div>
                    <hr class="my-5">
                    <ul>
                        <li class="flex items-center mt-2">
                            <input type="radio" id="paymentRadio1" name="paymentOptions" class="mr-2 h-5 w-5">
                            <label for="paymentRadio1">Credit / Debit / ATM Card</label>
                        </li>
                        <li class="flex items-center mt-2">
                            <input type="radio" id="paymentRadio2" name="paymentOptions" class="mr-2 h-5 w-5">
                            <label for="paymentRadio1">Net Banking</label>
                        </li>
                        <li class="flex items-center mt-2">
                            <input type="radio" id="paymentRadio3" name="paymentOptions" class="mr-2 h-5 w-5">
                            <label for="paymentRadio1">EMI (Easy Installment)</label>
                        </li>
                        <li class="flex items-center mt-2">
                            <input type="radio" id="paymentRadio4" name="paymentOptions" class="mr-2 h-5 w-5">
                            <label for="paymentRadio1">Cash On Delivery</label>
                        </li>
                    </ul>
                    <hr class="my-5">
                </div>
            </div>
        </div>

          <!-- :start -->
        <div class="col-span-1">
            <div class="w-full rounded-xl shadow-lg bg-white dark:bg-gray-800">
                <div class="w-full p-5">
                    <h4 class="text-blue-500 text-xl">Price Details</h4>
                </div>
                <div class="px-5 pb-5 border-b">
                    <ul class="text-gray-500 dark:text-gray-200">
                        <li class="my-1 flex justify-between items-center">
                            <p>price of 3 items</p>
                            <span>$699.99</span>
                        </li>
                        <li class="my-1 flex justify-between items-center">
                            <p>Delivery Charges</p>
                            <span class="text-green-400">free</span>
                        </li>
                    </ul>
                </div>
                <div class="p-5">
                    <div class="flex items-center justify-between">
                        <span><b>Amount Payable</b></span>
                        <span><b>$699.99</b></span>
                    </div>
                </div>
            </div>
        </div>
        <!-- :end -->
    </div>
</template>

<script>
export default {
    name: 'Payment',
}
</script>

<style>

</style>
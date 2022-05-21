<template>
  <div>
    
    <!-- slider:start -->
    <div class="w-full">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <img src="../assets/images/slider/1.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/slider/2.png" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/slider/3.png" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <!-- slider:end -->

    <!-- main content:start -->
    <main class="px-5">
      <!-- discount:start -->
      <div class="w-full">
        <div class="w-full my-5 rounded-xl bg-red-500 dark:bg-gray-900 px-5 py-2">
          <div class="flex flex-wrap">
            <div class="md:w-1/5 w-full p-3 overflow-hidden">
              <img src="../assets/images/svg/discount.png" alt="" class="md:w-3/4 sm:w-2/4 mt-10 mx-auto">
            </div>
            <div class="md:w-4/5 w-full p-3 overflow-hidden">
              <swiper
                :slides-per-view="4"
                :space-between="5"
                :breakpoints="
                  {
                    1024: {
                      slidesPerView: 4,
                      spaceBetween:5
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 5
                    },
                    640: {
                      slidesPerView: 4,
                      spaceBetween: 5
                    },
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 5
                    },
                    200: {
                      slidesPerView: 1,
                      spaceBetween: 5
                    }
                  }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
              >
                <swiper-slide v-for="(product, index) in discountPorducts" :key="index">
                  <DiscountCard 
                    :title="product.name" 
                    :prev_price="product.price" 
                    :discount="product.discount"
                    :slug="product.slug"
                    :id="product.id"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
      <!-- discount:end -->


      <!-- most sell:start -->
        <div class="mt-5">
          <MostSells :products="allProducts"></MostSells>
        </div>
      <!-- most sell:end -->

      <!-- products:start -->
      <div class="w-full mt-5">
        <div class="w-full py-3 px-5 flex">
          <div class="px-3 py-2 border-b-4 border-red-500 text-xl font-bold">
            <h3>Some of the best</h3>
          </div>
        </div>

        <!-- products:start -->
        <div class="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2">
            <PorductNormalCard 
              v-for="(product, index) in allProducts" 
              :key="index" 
              :name="product.name"
              :price="product.price"
              :discount="product.discount"
              :description="product.description"
              :slug="product.slug"
              :id="product.id"
            ></PorductNormalCard>
        </div>
        <!-- products:end -->
      </div>
      <!-- products:end -->


      <!-- our suggests:start -->
      <div class="w-full mt-5">
        <div class="w-full py-3 px-5 flex">
          <div class="px-3 py-2 border-b-4 border-red-500 text-xl font-bold">
            <h3>depends on your activity</h3>
          </div>
        </div>

        <div class="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-2">
            <PorductNormalCard 
              v-for="(product, index) in allProducts" 
              :key="index" 
              :name="product.name"
              :price="product.price"
              :discount="product.discount"
              :description="product.description"
              :id="product.id"
              :slug="product.slug"
            ></PorductNormalCard>
        </div>
        <!-- our suggests:end -->
      </div>


      <!-- topics:start -->
      <div class="w-full my-5">
        <div class="w-full py-3 px-5 flex">
          <div class="px-3 py-2 border-b-4 border-red-500 text-xl font-bold">
            <h3>Some Topics you may like</h3>
          </div>
        </div>
        <swiper
          :slides-per-view="4"
          :space-between="5"
          :breakpoints="
            {
              1024: {
                slidesPerView: 5,
                spaceBetween:5
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 5
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 5
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 5
              },
              200: {
                slidesPerView: 1,
                spaceBetween: 5
              }
            }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(topic, index) in allTopics"
            :key="index"
          >
          <TopicCard 
            :id="topic.id"
            :title="topic.title"
            :user="topic.user"
            :views="topic.views"
            :likes="topic.likes"
            :created_at="topic.created_at"
            :description="topic.description"
            ></TopicCard>
          </swiper-slide>
        </swiper>
        <!-- topics:end -->
      </div> 
    </main>

    <!-- main content:end -->


    <!-- footer:start -->
    <div>
        <Footer></Footer>
    </div>
    <!-- footer:end -->

  </div>
</template>

<script>

// components
import Footer from '@/components/Footer.vue';
import DiscountCard from '@/components/Cards/DiscountCard.vue';
import MostSells from '@/components/MostSells.vue';
import PorductNormalCard from '@/components/Cards/PorductNormalCard.vue';
import TopicCard from '@/components/Cards/TopicCard';


import { Swiper, SwiperSlide } from 'swiper/vue';
import { mapGetters } from 'vuex'

// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default {
  name: 'Home',

  computed: {
    ...mapGetters(['discountPorducts', 'allProducts', 'allTopics']),

    // limit all the products by 8
    limitProduct() 
    {
      let times = 0;
      let finalNumber = 8;
      let products = JSON.parse(JSON.stringify(this.allProducts));
      let filteredPorduct = [];
      products.forEach(product => {
        times ++;
        if(times <= finalNumber){
          // save limited product inside filteredPorduct
          filteredPorduct.push(product)
        }
      })
      return filteredPorduct;
    }
  },
  
  components: {
    Swiper,
    SwiperSlide,
    DiscountCard,
    MostSells,
    PorductNormalCard,
    TopicCard,
    Footer,
  },

  methods: {
    onSwiper(swiper){
      console.log(swiper);
    },

    onSlideChange(){
      console.log('slide change')
    },
  },

}
</script>




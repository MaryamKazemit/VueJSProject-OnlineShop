<template>
  <div class="container mt-4" dir="ltr">
    <div class="row d-flex" v-if="products.length > 0">
      <div class="col-md-4">
        <div class="w-100">
          <a :href="ProductPage">
            <img src="http://loremflickr.com/640/480/food" class="rounded img-fluid w-100" style="height: 205px;">
          </a>
        </div>
        <div class="w-100 mt-4">
          <a :href="ProductPage">
            <img src="http://loremflickr.com/640/480/food" class="rounded img-fluid w-100" style="height: 205px;">
          </a>
        </div>
      </div>
      <!-- Swiper -->
      <div class="col-md-8 p-0 m-0 d-none d-md-block">
        <swiper
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :slidesPerView="1"
            :spaceBetween="0" 
            :effect="'flip'" 
            :centeredSlides="true" 
            :loop="true" 
            :pagination="{
              clickable: true,
            }" 
            :keyboard="{
              enabled: true,
            }" 
            :navigation="true" 
            :modules="modules" 
            class="mySwiper">
          <swiper-slide v-for="product in products" class="text-center p-0 m-0">
            <SlideItem :items="product"/>
            <!--  <SlideItem :items="product" @show-product="showProductHandler()"/>  -->
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ProductPage from '../pages/Product.vue'
import SlideItem from "./SlideItem.vue";
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay, Pagination, Navigation, Keyboard, EffectFlip} from "swiper";

export default {
  // emits: ['show-product'],
  created() {
    axios.get('https://631f3f8f58a1c0fe9f648aa1.mockapi.io/items')
        .then(res => {
          this.products = res.data;
          // console.log(this.products)
        })
  },
  data() {
    return {
      products: [],
      createMode: false,
    }
  },
  methods: {
    // showProductHandler(id) {
    //   const product = this.products.filter(product => product.id == id);
    //   console.log(product)
    // }
  },
  components: {
    SlideItem, Swiper,
    SwiperSlide,ProductPage,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, Keyboard, EffectFlip],
    };
  },
};
</script>
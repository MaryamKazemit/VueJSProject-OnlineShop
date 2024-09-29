<template>
    <!-- latest from blog -->
    <div class="container mt-6 widecontent">
        <div class="row">
        <div class="container mt-6 widecontent col-md-4">
            <!-- title -->
            <h3 class="font-iran-mid test2 mb-3" dir="rtl">آدرس ما</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25906.6882017163!2d51.2841332!3d35.7425448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1667678437819!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mt-3 pt-2"></iframe>
        </div>
        <div class="container mt-6 widecontent col-md-8">
            <!-- title -->
            <h3 class="font-iran-mid test2" dir="rtl">از وبلاگ ما بخوانید</h3>
            <swiper 
            :effect="'cards'" 
            :grabCursor="true" 
            :centeredSlides="true" 
            :loop="true"
            :keyboard="{
                enabled: true,
            }" 
            :navigation="true" 
            :modules="modules" 
            class="mySwiper mt-4 col-md-6">
            <swiper-slide v-for="product in products">
                <!-- blog -->
                <div class="card m-2 align-items-center d-flex" dir="rtl">
                    <img :src="product.blogImg" class="card-img-top p-2" alt="...">
                    <!-- date -->
                    <span class="badge text-bg-danger date-badge font-iran-vsm">۲۶ / تیر / ۱۴۰۱</span>
                    <div class="card-body ms-3 me-3">
                        <!-- title -->
                        <h5 class="card-title font-iran" v-text="product.title"></h5>
                        <!-- sample of text-->
                        <p class="font-iran-sm text-secondary" v-text="product.text"></p>
                        <!-- more -->
                        <button type="button"
                            class="btn btn-outline-danger font-iran-sm mt-1 float-start">بیشتر</button>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        </div>
    </div>
    </div>
    
  </template>
  <script>
  import axios from "axios";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "swiper/css/effect-cards";
  import { Autoplay, Pagination, Navigation, Keyboard, EffectCards } from "swiper";
  
  export default {
    created() {
        axios.get('https://631f3f8f58a1c0fe9f648aa1.mockapi.io/items')
            .then(res => {
                this.products = res.data;
                console.log('hi')
            })
    },
    data() {
        return {
            products: [],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation, Keyboard, EffectCards],
        };
    },
  };
  </script>
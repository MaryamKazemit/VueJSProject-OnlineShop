<template>
  <!-- new products -->
  <div class="container mt-6 widecontent">
    <!-- title -->
    <div class="border-bottom">
      <h3 class="font-iran-mid test2" dir="rtl">کمپین فروش ویژه</h3>
    </div>
    <swiper
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
        :rewind="true"
        :keyboard="true"
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :navigation="true"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
           },
          '768': {
            slidesPerView: 4,
            spaceBetween: 40,
           },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 50,
           },
          }"
        :modules="modules"
        class="mySwiper mt-4">
      <swiper-slide v-for="product in products" class="card m-2 align-items-center d-flex product"
                    style="width: 18rem;" dir="rtl">
        <div>
            <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
            ۳۰%
            </span>
        </div>
        <img :src="product.productImg" class="card-img-top p-1 product-img" :alt="product.productName">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">{{ product.productName }}</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-2">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">{{ product.comments }} نظر</div>
            <div class="d-flex" dir="ltr">
              <span v-html="rateStar" v-for="star in 3"></span>
              <span>
                <span class="material-icons-round fs-med coloredRateStar">star_half</span>
              </span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid mt-2 text-decoration-line-through text-muted">
            <span class="font-iran-sm product-price" :data-price="product.productPrice">{{product.productPrice}}</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        <!-- price after offer -->
          <div class="card-text font-iran-mid mt-2">
            <span class="font-iran-sm product-price" :data-price="product.productPrice">{{product.productPrice}}</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>        
        <!-- add to cart btn -->
        <div class="card-body pt-0 p-2">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation, Keyboard, Autoplay} from "swiper";
import axios from "axios";

export default {
  created() {
    axios.get('https://631f3f8f58a1c0fe9f648aa1.mockapi.io/items')
        .then(res => {
          this.products = res.data;
        })
  },
  data() {
    return {
      products: [],
      rateStar: `<span class="material-icons-round fs-med coloredRateStar">star_rate</span>`,
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Keyboard, Autoplay,],
    };
  },
};
</script>
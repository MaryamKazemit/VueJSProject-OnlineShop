<template>
  <a :href="ProductPage">
    <img :src="items.productImg" :alt="items.productName" class="w-100 rounded img-fluid"
         style="height: 440px;">
  </a>
</template>
<script>
import ProductPage from '../pages/Product.vue'

export default {
  props: ['items'],
  data() {
    return {}
  },
  components: {
    ProductPage,
  }
};
</script>
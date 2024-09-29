<template>
  <Slider/>
  <NewProducts/>
  <SpecialOffer/>
  <LatestFromBlog/>
</template>

<script>
import Slider from "../home/Slider.vue";
import NewProducts from "../home/NewProducts.vue";
import SpecialOffer from "../home/SpecialOffer.vue";
import LatestFromBlog from "../home/LatestFromBlog.vue";
export default {
  components: {
    Slider,NewProducts,SpecialOffer,LatestFromBlog
  },
  name: "Home"
}
</script>
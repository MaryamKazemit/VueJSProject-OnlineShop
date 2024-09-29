<template>
  <Navbar/>
  <Menu :currentPage="currentPage" @changePage="currentPage = $event"/>
  <router-view></router-view>
  <component :is="currentPage"></component>
</template>
<script>
import Navbar from './components/layouts/Navbar.vue';
import Menu from './components/layouts/Menu.vue';
import HomePage from './components/pages/Home.vue';
import AboutUs from './components/pages/AboutUs.vue';
import CallUs from './components/pages/CallUs.vue';
import Product from './components/pages/Product.vue';
export default {
  components: {
    Navbar,
    Menu,
    HomePage,
    AboutUs,
    CallUs,
    Product,
  },
  data(){
    return{
      currentPage:"Home"
    }
  }
};
</script>

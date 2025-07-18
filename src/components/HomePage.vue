<template>
 <div class="bg-[#f4edee] h-full " > 
 <img class="w-full  object-cover h-150" src='../assets/homeBanner.jpg'/>
 <div class='absolute  top-75 ml-20 w-150  items-center flex flex-col'> <p class='text-center text-white md:text-2xl font-bold text-xl '>We deliver top-quality products sourced from trusted and verified suppliers.
Shop with confidence and experience seamless service every time.</p>
 <button class="bg-white mt-5 font-semibold text-black rounded-lg px-4 py-3 hover:bg-[#b65967] hover:text-white"><router-link to="/contact">Contact Us</router-link></button>
</div>
<LatestProduct/>
<AboutUs/>
<div class="h-screen items-center justify-center flex">
 <CarouselBanner/>
</div>

<OurServices/>
<FooterSection/>

 </div>


</template>

<script>
import FooterSection from './FooterSection.vue'
import AboutUs from './AboutUs.vue'
import OurServices from './OurServices.vue'
import LatestProduct from './LatestProduct.vue'
import CarouselBanner from './CarouselBanner.vue'

export default {
  name: 'HomePage',
  components:{
    FooterSection,
    AboutUs,
    OurServices,
    LatestProduct,
    CarouselBanner
  }
  
}
</script>



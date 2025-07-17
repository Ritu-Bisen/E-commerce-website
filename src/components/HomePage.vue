<template>
 <div class="bg-[#f4edee] h-100 " > 
 <img class="w-full h-full object-cover md:h-[500px]" src='../assets/homeBanner.jpg'/>
 <div class='absolute  md:top-75 md:ml-20 md:w-150 w-70 top-35 ml-2 items-center flex flex-col'> <p class='text-center text-white md:text-2xl font-bold text-xl '>We deliver top-quality products sourced from trusted and verified suppliers.
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



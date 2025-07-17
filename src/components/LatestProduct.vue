<template>
  <div class="bg-[#f4edee] py-10">
    <h1 class="text-3xl font-bold text-center">Discover our latest arrival</h1>
    <p class="text-center text-sm mt-2">
      Crafted with premium materials and cutting-edge features,
      this new release is designed to elevate your everyday experience.
      Get yours today and be among the first to enjoy the next level of quality and performance.
    </p>

    <!-- Arrow Controls -->
    <div class="flex justify-center items-center my-10 gap-4">
      <button @click="prevSlide" :disabled="startIndex === 0" class="text-3xl font-bold px-3 py-1 hover:text-gray-600">&lt;</button>
       <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 px-10 py-10 ">
      <div
        v-for="item in visibleProducts"
        :key="item.id"
        class="bg-white w-75  p-4 rounded-lg shadow hover:shadow-md transition"
      >
        <img src='../assets/denim.jpg'   class="w-50 h-48  rounded mb-4" />
        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
        <p class="text-sm text-gray-500">{{ item.brand }}</p>
        <p class="text-sm text-gray-600 mt-1">Material: {{ item.material }}</p>
        <p class="text-sm mt-2">{{ item.description }}</p>
        <p class="text-lg font-bold mt-2 flex justify-between ">₹{{ item.price }} <button class='rounded-lg bg-[#b65967] px-2 py-1 text-white hover:text-black' >View</button></p>
       
      </div>
    </div>
    <button @click="nextSlide" :disabled="endIndex >= productDetails.length" class="text-3xl font-bold px-3 py-1 hover:text-gray-600">&gt;</button>
    </div>
    <!-- Product Cards (3 at a time) -->
   
  </div>
</template>

<script>
import product from '../productDetails.js'

export default {
  name: 'LatestProduct',
  data() {
    return {
      productDetails: [],
      startIndex: 0,
      itemsPerPage: 4,
       photo : ["../assets/denim.jpg","../assets/img2.jpg","../assets/dress.webp","../assets/img4.jpg","../assets/img5.webp","../assets/img6.webp","../assets/img7.webp","../assets/img8.webp","../assets/img12.jpg","../assets/img11.webp","../assets/img10.jpg","../assets/img9.webp"]

    }
  },
  computed: {
    endIndex() {
      return this.startIndex + this.itemsPerPage
    },
    visibleProducts() {
      return this.productDetails.slice(this.startIndex, this.endIndex)
    }
    
  },
  mounted() {
    this.productDetails = product
      },
  methods: {
    nextSlide() {
      if (this.endIndex < this.productDetails.length) {
        this.startIndex += this.itemsPerPage
      }
    },
    prevSlide() {
      if (this.startIndex > 0) {
        this.startIndex -= this.itemsPerPage
      }
    }
  }
}
</script>

<template>
  <div class="relative h-90 w-90 flex items-center overflow-hidden   m-20 rounded-3xl ">
    <!-- Current Slide -->
    <div class="h-90 w-90">
      <img
        v-if="slides[current]"
        :src="slides[current]"
        class="h-full w-full object-cover"
        alt="slide"
      />
    </div>

    <!-- Navigation Buttons -->
    <div class="absolute flex justify-between items-center h-full w-full">
      <button @click="prevSlide" class="bg-black/70 py-3 px-2 text-white">
        &lt;
      </button>
      <button @click="nextSlide" class="bg-black/70 py-3 px-2 text-white">
        &gt;
      </button>
    </div>

    <!-- Indicator Dots -->
    <div class="absolute flex gap-2 items-center  left-1/2 -translate-x-1/2 bottom-0">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        :class="[
          'h-3 w-3 rounded-full',
          current === i ? 'p-2 bg-white' : 'opacity-40 bg-black'
        ]"
      ></div>
    </div>
  </div>
</template>

<script>
import banner1 from '../assets/banner1.webp'
import banner2 from '../assets/banner2.webp'
import banner3 from '../assets/banner3.webp'
import banner4 from '../assets/banner4.jpg'
export default {
  name: "CarouselBanner",
  data() {
    return {
      current: 0,
      autoplay: true,
      autoSlideInterval: 2000,
      interval: null,
      slides: [
        banner1,
        banner2,banner3,banner4
      ]
    };
  },
  methods: {
    nextSlide() {
      this.current =
        this.current === this.slides.length - 1 ? 0 : this.current + 1;
    },
    prevSlide() {
      this.current =
        this.current === 0 ? this.slides.length - 1 : this.current - 1;
    }
  },
  mounted() {
    if (this.autoplay) {
      this.interval = setInterval(this.nextSlide, this.autoSlideInterval);
    }
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
.h-90 {
  height: 40rem;
}
.w-90 {
  width: 82rem;
}
</style>

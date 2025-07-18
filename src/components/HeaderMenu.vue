<template>
  <div>
    <!-- Navbar -->
    <div
      :class="[
        'flex justify-between items-center px-16 py-6  font-bold fixed w-full z-50 transition-all duration-300',
        isScrolled || isNotHome ? 'bg-white text-[#b65967] shadow-lg' : 'text-white'
      ]"
    >
      <h1 class="text-3xl">E-Commerce</h1>

      <div class="flex gap-10 text-xl ">
        <router-link class="hover:scale-110 transition-all" to="/">Home</router-link>
        <router-link class="hover:scale-110 transition-all" to="/about">About Us</router-link>
        <router-link class="hover:scale-110 transition-all" to="/products">Products</router-link>
        <router-link class="hover:scale-110 transition-all" to="/contact">Contact Us</router-link>
      </div>

      
    </div>

    <!-- Mobile menu
    <button @click="toggleMenu" class="md:hidden text-3xl ">☰</button>
     <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed top-0 right-0 w-2/3 h-full bg-white p-6 z-40 shadow-lg"
      >
        <button @click="toggleMenu" class="text-right text-3xl mb-4">×</button>
        <nav class="flex flex-col gap-6 text-lg font-semibold text-[#b65967]">
          <router-link @click="toggleMenu" to="/">Home</router-link>
          <router-link @click="toggleMenu" to="/about">About Us</router-link>
          <router-link @click="toggleMenu" to="/products">Products</router-link>
          <router-link @click="toggleMenu" to="/contact">Contact Us</router-link>
        </nav>
      </div>
    </transition> -->
   

    <!-- Router Content -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false,
      isNotHome: false,
    };
  },
  watch: {
    $route(to) {
      this.isNotHome = to.path !== '/';
    },
  },
  mounted() {
    this.isNotHome = this.$route.path !== '/';
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    },
  },
};
</script>

<style scoped>
/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>

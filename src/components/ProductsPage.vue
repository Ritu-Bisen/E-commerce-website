<template>
  <div class="pt-20 bg-[#f4edee]">
    <h1 class="text-4xl font-bold text-center mt-5">Our Products</h1>
    <div class="h-1 rounded-full w-20 bg-[#b65967] absolute left-180" />

    <div class="grid grid-cols-3 mt-20 px-50 gap-10">
      <div
        class="shadow-xl w-80 p-3 bg-white"
        v-for="(item, index) in products"
        :key="item.id"
      >
        <img src="../assets/dress.webp" class="shadow-lg w-74 rounded mb-4" />
        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
        <p class="text-sm text-gray-500">{{ item.brand }}</p>
        <p class="text-sm text-gray-600 mt-1">Material: {{ item.material }}</p>
        <p class="text-sm text-gray-600 mt-1">Color: {{ item.color }}</p>
        <p class="text-sm text-gray-600 mt-1">Rating: {{ item.rating }}</p>
        <p class="text-sm mt-2">{{ item.description }}</p>

        <p class="text-lg font-bold mt-2">₹{{ item.price }}</p>

        <div class="flex justify-between mt-2 gap-2">
          <select
            class="border px-5 py-1 rounded"
            v-model="item.selectedSize"
          >
            <option disabled value="">Size</option>
            <option v-for="size in item.size" :key="size" :value="size">
              {{ size }}
            </option>
          </select>

          <button
            @click="toggle(index)"
            :class="item.selected
              ? 'rounded-lg bg-red-500 px-3 py-1 text-black hover:text-white font-semibold text-lg'
              : 'text-lg font-semibold rounded-lg bg-[#b65967] px-3 py-1 text-white hover:text-black'"
          >
            {{ item.selected ? "Remove" : "Add" }}
          </button>
        </div>
      </div>

      <div></div>

      <button
        @click="buyProducts"
        class="bg-[#b65967] text-4xl text-white font-bold py-1 px-3 rounded-lg my-20 mx-10"
      >
     Buy Now
       
      </button>
    </div>
  </div>
</template>


<script>
import product from "../productDetails.js";

export default {
  name: "ProductsPage",
  data() {
    return {
      products: [],
      selectItem: [],
    };
  },
  mounted() {
    this.products = product.map((item) => ({
      ...item,
      selected: false,
      selectedSize: "", // add selectedSize tracking
    }));
  },
  methods: {
    toggle(index) {
      const product = this.products[index];

      if (!product.selected) {
        if (!product.selectedSize) {
          alert("Please select a size before adding.");
          return;
        }

        // Add product to selected list
        this.selectItem.push({
          name: product.name,
          price: product.price,
          size: product.selectedSize,
        });
      } else {
        // Remove product from selected list
        this.selectItem = this.selectItem.filter(
          (p) => !(p.name === product.name && p.size === product.selectedSize)
        );
      }

      product.selected = !product.selected;
    },
   buyProducts() {
  console.log("Selected Items:", this.selectItem);

  if (!this.selectItem || this.selectItem.length === 0) {
    alert("Please select the product");
    return null; // Exit the function if nothing is selected
  }

  localStorage.setItem("selectedProducts", JSON.stringify(this.selectItem));
  this.$router.push("/products/order"); 
}
  },
};
</script> 
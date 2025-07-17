<template>
  <div class="pt-25 px-10 flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold mb-6 text-center">Order Place</h1>
    <div class='grid grid-cols-2 gap-5 '>
     <div v-for="item in selectedProduct" :key="item.name" class="flex mb-4 p-4 rounded-lg border-gray-300 shadow-lg ">
    <img class='h-30 w-25' src='../assets/dress.webp'/>
    <div class='m-5'> <p><strong>Name:</strong> {{ item.name }}</p>
      <p><strong>Size:</strong> {{ item.size }}</p>
      <p><strong>Price:</strong> ₹{{ item.price }}</p>
      <button @click='removeProduct(item.name,item.size)' class='px-2 py-1 bg-black text-white rounded-lg hover:text-red-500 font-semibold'>Delete</button>
      </div>
     
    </div>
    </div>
    <!--Invoice Card-->
    <div class='shadow-lg rounded-lg mt-5 p-10 items-center justify-center flex flex-col'>
    <h1 class="text-center font-bold text-2xl ">Invoice</h1>
    <table class='mt-10'>
    <thead>
    <th>S no.</th>
    <th>Name</th>
    <th>Price</th>
    
    </thead>
    <tbody v-for="(item,index) in selectedProduct" :key="item.name">
    <td class='p-5 text-lg font-semibold'>{{index+1}}.</td>
    <td class='p-5 text-lg font-semibold'>{{item.name}}</td>
    <td class='p-5 text-lg font-semibold '>₹ {{item.price}}</td>
    </tbody></table>
    <div class="h-full w-full p-5 border-t border-b border-gray-300">
     <p class="flex justify-between text-lg font-semibold">Total Price :<span>₹ {{totalPrice}}</span></p>
   
   <p class="flex justify-between text-lg font-semibold">Including 18% GST:<span>₹ {{gstAmount}}</span></p>
   </div>
  
   <p class="flex justify-between text-lg font-semibold gap-4 m-10">Total Amount :<span >₹ {{totalAmount}}</span></p>
    
    <button @click="confirmOrder" class=' px-2 py-1 rounded-lg text-3xl font-bold text-white bg-[#b65967] '>Confirm Order</button> </div>
    
  </div>
</template>

<script>

export default {
  name: "OrderPage",
  data() {
    return {
      selectedProduct: [],
    };
  },
  methods: {
  removeProduct(name, size) {
    const stored = localStorage.getItem("selectedProducts");
    if (!stored) return;

    const filtered = JSON.parse(stored).filter(
      (item) => !(item.name === name && item.size === size)
    );

    localStorage.setItem("selectedProducts", JSON.stringify(filtered));
    this.selectedProduct = filtered; // Update local state too
  },
  confirmOrder() {
    alert("Order Confirm");
    localStorage.removeItem("selectedProducts");
    this.$router.push("/products"); // Navigate to product page
  }
},
computed: {
    totalPrice() {
       return Math.round(this.selectedProduct.reduce((sum, item) => sum + Number(item.price), 0));
    },
    gstAmount() {
      return Math.round(this.totalPrice * 0.18);
    },
    totalAmount() {
      return this.totalPrice + this.gstAmount;
    },
  },
 mounted() {

    
  const data = localStorage.getItem("selectedProducts");
  if (data) {
    this.selectedProduct = JSON.parse(data);
  } else {
    this.selectedProduct = [];
  }
  
}

};
</script>
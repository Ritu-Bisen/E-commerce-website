<template>
  <div class="pt-25 bg-[#f4edee] h-screen flex flex-col items-center space-y-10">
    <h1 class="font-bold text-4xl mb-10 mt-5 ">Contact Us</h1>

    <form @submit.prevent="handleSubmit" class="flex flex-col items-center bg-white shadow-lg w-120 h-auto rounded-lg mt-10 p-10 space-y-5">
      
     
      <p v-if="successMessage" class="text-green-900 font-semibold text-center">{{ successMessage }}</p>

      <div class="w-full">
        <input v-model="form.name" class="border border-gray-300 rounded-lg py-2 px-3 w-full" placeholder="Full Name"/>
        <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>
      </div>

      <div class="w-full">
        <input v-model="form.email" class="border border-gray-300 rounded-lg py-2 px-3 w-full" placeholder="Email"/>
        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
      </div>

      <div class="w-full">
        <input v-model="form.phone" class="border border-gray-300 rounded-lg py-2 px-3 w-full" placeholder="Phone No"/>
        <p v-if="errors.phone" class="text-red-500 text-sm">{{ errors.phone }}</p>
      </div>

      <div class="w-full">
        <textarea v-model="form.message" class="border border-gray-300 rounded-lg py-2 px-3 h-25 w-full" placeholder="Message"></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
      </div>

      <button type="submit" class="bg-[#b65967] text-2xl text-white font-bold py-1 px-3 rounded-lg mt-5">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      errors: {},
      successMessage: ''
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      this.successMessage = '';

      if (!this.form.name) this.errors.name = "Full Name is required.";
      if (!this.form.email) this.errors.email = "Email is required.";
      if (!this.form.phone) this.errors.phone = "Phone number is required.";
      if (!this.form.message) this.errors.message = "Message is required.";

   
      if (Object.keys(this.errors).length === 0) {
        console.log("Form Submitted:", this.form);
        this.successMessage = "Message submitted successfully!";

        this.form = {
          name: '',
          email: '',
          phone: '',
          message: ''
        };
      }
    }
  }
};
</script>

<style>
.p{
    color:red,
}
</style>
<script setup>
const isMenuOpen = ref(false)
</script>

<template>
  <header class="w-full py-8">
     <div class="max-w-[1440px] mx-auto px-4 md:px-6">
        <div class="header-frame flex items-center justify-between h-[100px] px-8 bg-white/50 backdrop-blur-sm">
           <!-- Logo -->
           <div class="text-2xl font-bold text-gray-900">IntelliToggle</div>
           
           <!-- Main Nav -->
           <nav class="hidden md:flex items-center space-x-10">
              <a href="#" class="text-base font-medium text-gray-700 hover:text-[#8A38F5] transition-colors">Home</a>
              <a href="#" class="text-base font-medium text-gray-700 hover:text-[#8A38F5] transition-colors">Features</a>
              <a href="#" class="text-base font-medium text-gray-700 hover:text-[#8A38F5] transition-colors">Pricing</a>
              <a href="#" class="text-base font-medium text-gray-700 hover:text-[#8A38F5] transition-colors">Contact</a>
           </nav>
           
           <!-- CTA Button -->
           <div class="hidden md:block">
              <button class="px-6 py-2.5 bg-[#8A38F5] text-white rounded-full hover:bg-opacity-90 transition-all font-medium">
                Get Started
              </button>
           </div>

           <!-- Mobile Menu Toggle -->
           <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-gray-800">
               <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
           </button>
        </div>
     </div>

     <!-- Mobile Menu -->
     <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
     >
       <div v-if="isMenuOpen" class="md:hidden absolute top-[140px] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl mx-4 rounded-xl overflow-hidden">
           <nav class="flex flex-col p-6 space-y-4 text-center">
              <a href="#" class="text-lg font-medium text-gray-800 hover:text-[#8A38F5]">Home</a>
              <a href="#" class="text-lg font-medium text-gray-800 hover:text-[#8A38F5]">Features</a>
              <a href="#" class="text-lg font-medium text-gray-800 hover:text-[#8A38F5]">Pricing</a>
              <a href="#" class="text-lg font-medium text-gray-800 hover:text-[#8A38F5]">Contact</a>
              <hr class="border-gray-100" />
               <button class="w-full px-6 py-3 bg-[#8A38F5] text-white rounded-full font-medium">
                Get Started
              </button>
           </nav>
       </div>
     </transition>
  </header>
</template>

<style scoped>
.header-frame {
    /* added dashed border for visual debugging originally, keeping it for style */
    border: 1px dashed #8A38F5;
    border-radius: 5px;
}
</style>

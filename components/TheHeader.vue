<script setup>
const isMenuOpen = ref(false)
</script>

<template>
  <header class="w-full py-8">
     <div class="max-w-[1440px] mx-auto px-4 md:px-6">
        <div class="header-frame flex items-center justify-between h-[100px] px-8 bg-[#0F172A] backdrop-blur-sm rounded-lg" style="border: 1px dashed rgba(255,255,255,0.2);">
           <div class="text-2xl font-bold text-white">IntelliToggle</div>
           
           <nav class="hidden md:flex items-center space-x-10">
              <a href="#" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Home</a>
              
              <div class="relative group">
                 <button class="flex items-center gap-1 text-base font-medium text-gray-300 hover:text-white transition-colors">
                    Features
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 group-hover:rotate-180 transition-transform duration-200">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                 </button>
                 <div class="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[240px] z-50">
                    <div class="bg-[#1E293B] rounded-xl shadow-xl border border-gray-700 overflow-hidden p-2">
                       <a href="#" class="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white font-medium text-sm transition-colors">Feature Flags</a>
                       <a href="#" class="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white font-medium text-sm transition-colors">Remote Config</a>
                       <a href="#" class="block px-4 py-3 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white font-medium text-sm transition-colors">A/B Testing</a>
                    </div>
                 </div>
              </div>

              <a href="#" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Contact</a>
           </nav>
           
           <div class="hidden md:block">
              <button class="px-6 py-2.5 bg-white text-[#0F172A] rounded-full hover:bg-gray-100 transition-all font-medium">
                Get Started
              </button>
           </div>

           <button @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2 text-white">
               <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
               </svg>
               <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
           </button>
        </div>
     </div>

     <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
     >
       <div v-if="isMenuOpen" class="md:hidden absolute top-[140px] left-0 right-0 z-40 bg-[#0F172A] border-b border-gray-700 shadow-xl mx-4 rounded-xl overflow-hidden">
           <nav class="flex flex-col p-6 space-y-4 text-center">
              <a href="#" class="text-lg font-medium text-gray-300 hover:text-white">Home</a>
              <a href="#" class="text-lg font-medium text-gray-300 hover:text-white">Features</a>
              <a href="#" class="text-lg font-medium text-gray-300 hover:text-white">Pricing</a>
              <a href="#" class="text-lg font-medium text-gray-300 hover:text-white">Contact</a>
              <hr class="border-gray-700" />
               <button class="w-full px-6 py-3 bg-white text-[#0F172A] rounded-full font-medium">
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
    border: 1px dashed #0F172A;
    border-radius: 5px;
}
</style>

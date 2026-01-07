<template>
  <footer class="footer-frame w-full bg-white border-t border-gray-100">
    <div class="max-w-[1440px] mx-auto px-6">
      <div class="content-wrapper flex flex-col md:flex-row">
         <div class="flex-shrink-0 mb-12 md:mb-0">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">IntelliToggle</h2>
            <p class="text-gray-500 max-w-sm leading-relaxed">
              Making the world a better place through constructing elegant hierarchies.
            </p>
         </div>

         <div class="flex-grow flex flex-col md:flex-row gap-10 md:gap-[100px] lg:gap-[200px] md:justify-end">
            <div>
               <h4 class="font-bold text-gray-900 mb-6">Solutions</h4>
               <ul class="space-y-4 text-gray-600">
                  <li><a href="#" class="hover:text-[#0F172A]">Marketing</a></li>
                  <li><a href="#" class="hover:text-[#0F172A]">Analytics</a></li>
                  <li><a href="#" class="hover:text-[#0F172A]">Commerce</a></li>
               </ul>
            </div>
             <div>
               <h4 class="font-bold text-gray-900 mb-6">Support</h4>
               <ul class="space-y-4 text-gray-600">
                  <li><a href="#" class="hover:text-[#0F172A]">Pricing</a></li>
                  <li><a href="#" class.="hover:text-[#0F172A]">Documentation</a></li>
                  <li><a href="#" class="hover:text-[#0F172A]">Guides</a></li>
               </ul>
            </div>
             <div>
               <h4 class="font-bold text-gray-900 mb-6">Company</h4>
               <ul class="space-y-4 text-gray-600">
                  <li><a href="#" class="hover:text-[#0F172A]">About</a></li>
                  <li><a href="#" class="hover:text-[#0F172A]">Blog</a></li>
                  <li><a href="#" class="hover:text-[#0F172A]">Careers</a></li>
               </ul>
            </div>
            <!-- Join Section -->
             <div>
               <h4 class="font-bold text-gray-900 mb-6">Join</h4>
               <ul class="space-y-4 text-gray-600">
                  <li>
                    <button class="px-6 py-2 bg-[#0F172A] text-white rounded-full hover:bg-opacity-90 transition-all font-medium text-sm">
                      Sign Up
                    </button>
                  </li>
                   <li>
                     <button class="px-6 py-2 border border-[#0F172A] text-[#0F172A] rounded-full hover:bg-[#0F172A] hover:text-white transition-all font-medium text-sm">
                      Login
                    </button>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      
      <div class="mt-20 py-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-gray-500">
         <p>&copy; 2026 Company, Inc. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
             <!-- Social media icons -->
             <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
            <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
         </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-frame {
   padding-top: 100px;
}
</style>

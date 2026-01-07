<script setup>
useHead({
  title: 'VenturSeed - Homepage',
  meta: [
    { name: 'description', content: 'Recreated homepage design using Nuxt 3 and TailwindCSS.' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const isModalOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-white">
    <TheHeader />
    
    <main>
        <section class="relative pt-[60px] pb-24 px-4 md:px-6">
           
           <div class="max-w-[1440px] mx-auto flex flex-col items-center">
                <div class="w-full bg-[#0F172A] rounded-[40px] overflow-hidden relative text-center py-20 px-6 md:px-20 lg:px-32 shadow-2xl">
                    
                    <div class="absolute inset-0 opacity-20 pointer-events-none" 
                         style="background-image: linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px); background-size: 40px 40px;">
                    </div>
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

                    <div class="relative z-10 max-w-5xl mx-auto space-y-12">
                        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                          Launch Features Confidently With
                          <span class="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">AI Driven Feature Flags</span>
                        </h1>
                        
                        <p class="text-gray-300 text-lg md:text-xl font-medium tracking-wide max-w-3xl mx-auto">
                          Start for free, scale as your team grows
                        </p>

                        <div class="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                            <button @click="isModalOpen = true" class="px-10 py-4 bg-white text-[#0F172A] rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                              Start for $1/mo
                            </button>
                            <button @click="isModalOpen = true" class="px-10 py-4 bg-transparent border border-white/30 text-white rounded-lg font-bold text-lg hover:border-white hover:bg-white/5 transition-all">
                              Join AI Early Access
                            </button>
                        </div>
                    </div>
                </div>


                <div class="w-full max-w-[1024px] pt-16 text-center">
                </div>
           </div>
        </section>

        <TheModal :isOpen="isModalOpen" @close="isModalOpen = false" />

       <PricingFeatures />

       <!-- Additional Content/CTA Section -->
       <section class="py-24 bg-gray-50">
           <div class="max-w-[1240px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
               <div class="order-2 md:order-1">
                   <!-- Integration Visual -->
                   <div class="w-full aspect-square bg-white rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-shadow duration-300">
                       <img src="/integration-visual.png" alt="Seamless Integration Dashboard" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700">
                   </div>
               </div>
               <div class="order-1 md:order-2 space-y-6">
                   <h2 class="text-4xl font-bold text-gray-900">Seamless integration</h2>
                   <p class="text-lg text-gray-600">
                       Connect with your favorite tools and streamline your workflow. Everything you need is right here.
                   </p>
                   <ul class="space-y-3">
                       <li class="flex items-center text-gray-700">
                           <span class="w-6 h-6 rounded-full bg-[#0F172A]/10 text-[#0F172A] flex items-center justify-center mr-3 text-sm">✓</span>
                           Real-time sync
                       </li>
                        <li class="flex items-center text-gray-700">
                           <span class="w-6 h-6 rounded-full bg-[#0F172A]/10 text-[#0F172A] flex items-center justify-center mr-3 text-sm">✓</span>
                           Advanced security
                       </li>
                        <li class="flex items-center text-gray-700">
                           <span class="w-6 h-6 rounded-full bg-[#0F172A]/10 text-[#0F172A] flex items-center justify-center mr-3 text-sm">✓</span>
                           API Access
                       </li>
                   </ul>
               </div>
           </div>
       </section>
    </main>

    <TheFooter />
  </div>
</template>

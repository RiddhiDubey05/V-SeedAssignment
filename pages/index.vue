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
</script>

<template>
  <div class="min-h-screen bg-white">
    <TheHeader />
    
    <main>
       <!-- Hero section - recreated from Figma design -->
       <section class="relative pt-[100px] pb-32 overflow-hidden">
          <!-- Background glow effect -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#8A38F5]/10 rounded-full blur-3xl -z-10"></div>

          <div class="max-w-[1440px] mx-auto px-6 flex flex-col items-center text-center gap-12">
                  <!-- Hero Content Box -->
                  <div class="max-w-4xl w-full bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl space-y-8">
                      <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                        Launch features confidently using <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#8A38F5] to-purple-600">AI driven feature flags</span>
                      </h1>
                      <p class="text-sm uppercase tracking-widest text-[#8A38F5] font-bold">
                        Start for free
                      </p>
                      <div class="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                          <button class="px-10 py-5 bg-[#8A38F5] text-white rounded-full font-bold text-lg hover:bg-opacity-90 transition-transform hover:scale-105 shadow-xl shadow-[#8A38F5]/20">
                            Start for $1/month
                          </button>
                          <button class="px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-lg hover:border-[#8A38F5] transition-colors">
                            Join early access
                          </button>
                      </div>
                  </div>


               <!-- Trusted Companies -->
               <div class="w-full max-w-[1024px] pt-16">
                   <p class="text-gray-500 mb-8 text-sm font-medium uppercase tracking-wider">Trusted by industry leaders</p>
                   <div class="flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                      <span class="text-xl font-bold text-gray-800">ACME Corp</span>
                      <span class="text-xl font-bold text-gray-800">GlobalTech</span>
                      <span class="text-xl font-bold text-gray-800">Nebula</span>
                      <span class="text-xl font-bold text-gray-800">FoxRun</span>
                      <span class="text-xl font-bold text-gray-800">Circle</span>
                   </div>
               </div>
          </div>
       </section>

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
                           <span class="w-6 h-6 rounded-full bg-[#8A38F5]/10 text-[#8A38F5] flex items-center justify-center mr-3 text-sm">✓</span>
                           Real-time sync
                       </li>
                        <li class="flex items-center text-gray-700">
                           <span class="w-6 h-6 rounded-full bg-[#8A38F5]/10 text-[#8A38F5] flex items-center justify-center mr-3 text-sm">✓</span>
                           Advanced security
                       </li>
                        <li class="flex items-center text-gray-700">
                           <span class="w-6 h-6 rounded-full bg-[#8A38F5]/10 text-[#8A38F5] flex items-center justify-center mr-3 text-sm">✓</span>
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

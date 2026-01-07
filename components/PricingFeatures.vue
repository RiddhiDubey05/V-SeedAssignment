<template>
  <section class="pricing-frame relative z-10 py-24">
    <div class="max-w-[1240px] mx-auto px-4 lg:px-0">
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-16">
            <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Simple, transparent pricing</h2>
            <p class="text-xl text-gray-500">No contracts, no hidden fees.</p>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            <!-- Basic -->
            <div class="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Basic</h3>
                <p class="text-gray-500 mb-6">For individuals</p>
                <div class="mb-8">
                    <span class="text-5xl font-bold text-gray-900">$19</span>
                    <span class="text-gray-500">/mo</span>
                </div>
                <div class="flex-grow space-y-4 mb-8">
                    <div class="flex items-center text-gray-700">
                         <div class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">✓</div>
                         Feature A
                    </div>
                    <div class="flex items-center text-gray-700">
                         <div class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">✓</div>
                         Feature B
                    </div>
                </div>
                <button class="w-full py-4 rounded-xl border-2 border-gray-100 text-gray-900 font-bold hover:border-[#8A38F5] hover:text-[#8A38F5] transition-colors">
                    Get Started
                </button>
            </div>

            <!-- Pro -->
            <div class="p-8 bg-gray-900 rounded-3xl shadow-2xl flex flex-col transform md:-translate-y-4">
                <div class="flex justify-between items-start mb-2">
                     <h3 class="text-xl font-semibold text-white">Pro</h3>
                     <span class="bg-[#8A38F5] text-white text-xs px-3 py-1 rounded-full">Popular</span>
                </div>
                <p class="text-gray-400 mb-6">For small teams</p>
                <div class="mb-8">
                    <span class="text-5xl font-bold text-white">$49</span>
                    <span class="text-gray-400">/mo</span>
                </div>
                <div class="flex-grow space-y-4 mb-8">
                    <div class="flex items-center text-gray-300">
                         <div class="w-6 h-6 rounded-full bg-[#8A38F5] text-white flex items-center justify-center mr-3 text-sm">✓</div>
                         Everything in Basic
                    </div>
                    <div class="flex items-center text-gray-300">
                         <div class="w-6 h-6 rounded-full bg-[#8A38F5] text-white flex items-center justify-center mr-3 text-sm">✓</div>
                         Advanced Analytics
                    </div>
                     <div class="flex items-center text-gray-300">
                         <div class="w-6 h-6 rounded-full bg-[#8A38F5] text-white flex items-center justify-center mr-3 text-sm">✓</div>
                         24/7 Support
                    </div>
                </div>
                <button class="w-full py-4 rounded-xl bg-[#8A38F5] text-white font-bold hover:bg-[#7a2fd6] transition-colors shadow-lg shadow-[#8A38F5]/30">
                    Get Started
                </button>
            </div>

            <!-- Enterprise -->
             <div class="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 flex flex-col">
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Enterprise</h3>
                <p class="text-gray-500 mb-6">For large organizations</p>
                <div class="mb-8">
                    <span class="text-5xl font-bold text-gray-900">$99</span>
                    <span class="text-gray-500">/mo</span>
                </div>
                <div class="flex-grow space-y-4 mb-8">
                    <div class="flex items-center text-gray-700">
                         <div class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">✓</div>
                         Unlimited Seats
                    </div>
                    <div class="flex items-center text-gray-700">
                         <div class="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">✓</div>
                         Custom Integrations
                    </div>
                </div>
                <button class="w-full py-4 rounded-xl border-2 border-gray-100 text-gray-900 font-bold hover:border-[#8A38F5] hover:text-[#8A38F5] transition-colors">
                    Contact Sales
                </button>
            </div>
        </div>
    </div>
  </section>
</template>

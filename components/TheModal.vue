<script setup>
defineProps({
  isOpen: Boolean,
  title: {
    type: String,
    default: 'Join Early Access'
  }
})

defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" @click="$emit('close')">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative" @click.stop>
            <button @click="$emit('close')" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div class="p-8 text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ title }}</h3>
                <p class="text-gray-600 mb-6">
                    Join over 1,000+ startups growing with IntelliToggle.
                </p>

                <form class="space-y-4" @submit.prevent="$emit('close')">
                    <input type="email" placeholder="Enter your work email" class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0F172A] focus:ring-2 focus:ring-[#0F172A]/20 outline-none transition-all" />
                    <button type="submit" class="w-full py-3 bg-[#0F172A] text-white font-bold rounded-xl hover:bg-opacity-90 transition-all">
                        Get Started
                    </button>
                </form>
            </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

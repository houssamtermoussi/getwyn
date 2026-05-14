<script setup lang="ts">
import { i18n } from '../i18n'
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const switcherRef = ref<HTMLElement | null>(null)

const toggleLanguage = () => {
  const newLocale = i18n.locale === 'en' ? 'fr' : 'en'
  
  // Animation before switch
  gsap.to('.language-label', {
    y: -10,
    opacity: 0,
    duration: 0.2,
    stagger: 0.05,
    onComplete: () => {
      i18n.locale = newLocale
      
      gsap.fromTo('.language-label', 
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.05 }
      )
    }
  })
}

onMounted(() => {
  if (switcherRef.value) {
    gsap.from(switcherRef.value, {
      opacity: 0,
      y: -20,
      duration: 1,
      delay: 1.5,
      ease: "power4.out"
    })
  }
})
</script>

<template>
  <div 
    ref="switcherRef"
    class="fixed top-8 right-8 z-[100] flex items-center"
  >
    <button 
      @click="toggleLanguage"
      class="group relative flex items-center gap-3 bg-surface/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full hover:border-accent/40 transition-all duration-500 overflow-hidden"
    >
      <!-- Background slide animation -->
      <div 
        class="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"
      ></div>
      
      <div class="relative flex items-center gap-2">
        <span 
          class="language-label text-xs font-bold tracking-tighter transition-colors duration-300"
          :class="i18n.locale === 'en' ? 'text-accent' : 'text-secondary'"
        >
          EN
        </span>
        <div class="w-px h-3 bg-white/10"></div>
        <span 
          class="language-label text-xs font-bold tracking-tighter transition-colors duration-300"
          :class="i18n.locale === 'fr' ? 'text-accent' : 'text-secondary'"
        >
          FR
        </span>
      </div>

      <!-- Icon -->
      <div class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-secondary group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 8.177 10.489 10.79 9.083 12.808 9.17 12.879 9.277 12.95 9.388 13.013M13 11c0 4.418-4.03 8-9 8" />
        </svg>
      </div>
    </button>
  </div>
</template>

<style scoped>
.language-label {
  display: inline-block;
}
</style>

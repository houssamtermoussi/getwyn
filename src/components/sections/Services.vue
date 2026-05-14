<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import gsap from 'gsap'
import { i18n } from '../../i18n'

const services = computed(() => [
  {
    title: i18n.t('services.list.0.title'),
    description: i18n.t('services.list.0.description'),
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>'
  },
  {
    title: i18n.t('services.list.1.title'),
    description: i18n.t('services.list.1.description'),
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>'
  },
  {
    title: i18n.t('services.list.2.title'),
    description: i18n.t('services.list.2.description'),
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>'
  }
])

const cardsRef = ref<HTMLElement[]>([])

onMounted(() => {
  cardsRef.value.forEach((card, index) => {
    // Stronger Parallax effect on scroll
    gsap.to(card, {
      y: (index + 1) * -80,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".services-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      }
    })

    // Reveal animation
    gsap.fromTo(card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      }
    )
  })
})
</script>

<template>
  <section class="services-section py-32 px-6 relative bg-surface/10">
    <div class="container mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold mb-24 text-center">{{ i18n.t('services.title') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          ref="cardsRef"
          class="group bg-surface/80 backdrop-blur-md p-10 rounded-2xl border border-white/5 hover:border-accent/50 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] relative overflow-hidden flex flex-col"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div class="text-accent mb-6" v-html="service.icon"></div>
          <h3 class="text-2xl font-semibold mb-4 text-white group-hover:text-accent transition-colors duration-300">{{ service.title }}</h3>
          <p class="text-secondary leading-relaxed font-light mt-auto">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

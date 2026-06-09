<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { i18n } from '../../i18n'

const cardRef = ref<HTMLElement | null>(null)

const renderWithHighlights = (text: string, highlights: Record<string, string>) => {
  let result = text
  for (const [key, value] of Object.entries(highlights)) {
    result = result.replace(`{${key}}`, `<span class="text-accent font-semibold">${value}</span>`)
  }
  return result
}

onMounted(() => {
  if (cardRef.value) {
    // Parallax
    gsap.to(cardRef.value, {
      y: -100,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    })

    // Reveal
    gsap.fromTo(cardRef.value,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardRef.value,
          start: "top 95%",
        }
      }
    )
  }
})
</script>

<template>
  <section class="about-section py-32 md:py-48 px-6 relative z-10">
    <div class="container mx-auto max-w-5xl">
      <div 
        ref="cardRef"
        class="group bg-surface/40 backdrop-blur-xl p-12 md:p-20 rounded-[40px] border border-white/5 hover:border-accent/40 transition-all duration-700 hover:shadow-[0_20px_80px_rgba(239,68,68,0.1)] relative"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <h3 class="text-sm uppercase tracking-widest text-secondary mb-12 font-mono group-hover:text-white transition-colors duration-300">{{ i18n.t('about.title') }}</h3>
        
        <div class="space-y-8 text-2xl md:text-4xl font-light leading-tight text-primary">
          <p v-html="renderWithHighlights(i18n.t('about.p1'), { modern: i18n.t('about.p1_highlights.modern'), scalable: i18n.t('about.p1_highlights.scalable') })"></p>
          <p class="text-secondary/80" v-html="renderWithHighlights(i18n.t('about.p2'), { performance: i18n.t('about.p2_highlights.performance'), ux: i18n.t('about.p2_highlights.ux') })"></p>
          <p v-html="renderWithHighlights(i18n.t('about.p3'), { products: i18n.t('about.p3_highlights.products'), beautiful: i18n.t('about.p3_highlights.beautiful'), functional: i18n.t('about.p3_highlights.functional') })"></p>
        </div>
      </div>
    </div>
  </section>
</template>

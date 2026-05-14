<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { i18n } from '../../i18n'

const heroTitle = ref<HTMLElement | null>(null)
const heroSlogan = ref<HTMLElement | null>(null)
const heroBg = ref<HTMLElement | null>(null)
const heroLogo = ref<HTMLElement | null>(null)
const heroLogoParallax = ref<HTMLElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.fromTo(heroLogoParallax.value,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
  )
  .fromTo(heroTitle.value, 
    { y: 100, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" },
    "-=0.8"
  )
  .fromTo(heroSlogan.value,
    { y: 20, opacity: 0, letterSpacing: "0.5em" },
    { y: 0, opacity: 1, letterSpacing: "0.15em", duration: 1.5, ease: "power4.out" },
    "-=0.8"
  )

  // Floating animation for logo
  gsap.to(heroLogo.value, {
    y: -15,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "sine.inOut",
    delay: 1.2
  })

  // Parallax for logo wrapper
  gsap.to(heroLogoParallax.value, {
    y: "60%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 1.2
    }
  })

  gsap.to(heroBg.value, {
    y: "30%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 1.5
    }
  })
})
</script>

<template>
  <section class="hero-section relative h-screen flex flex-col justify-center items-center overflow-hidden">
    <div ref="heroBg" class="absolute inset-0 w-full h-[150%] -top-[25%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background -z-10"></div>
    
    <div class="container mx-auto px-6 text-center z-10 flex flex-col items-center -mt-48 md:-mt-80">
      <div ref="heroLogoParallax" class="flex justify-center mb-0 md:mb-2 z-10 relative">
        <img ref="heroLogo" src="/logo_getwyn.png" alt="Getwyn Logo" class="h-64 md:h-[450px] max-h-[60vh] w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
      </div>
      
      <h1 ref="heroTitle" class="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary mb-[-1.5rem] pb-8 pt-2 -mt-4 md:-mt-8 relative z-20 leading-none">
        {{ i18n.t('hero.title') }}
      </h1>
      <p ref="heroSlogan" class="text-xl md:text-3xl text-white font-light tracking-widest max-w-3xl mx-auto">
        <span class="text-accent font-bold">{{ i18n.t('hero.tagline.get') }}</span> 
        <span class="text-accent font-bold"> {{ i18n.t('hero.tagline.w') }}</span>{{ i18n.t('hero.tagline.what') }}
        <span class="text-accent font-bold"> {{ i18n.t('hero.tagline.y') }}</span>{{ i18n.t('hero.tagline.you') }}
        <span class="text-accent font-bold"> {{ i18n.t('hero.tagline.n') }}</span>{{ i18n.t('hero.tagline.need') }}
      </p>
    </div>
  </section>
</template>

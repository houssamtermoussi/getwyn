<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

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
    
    <div class="container mx-auto px-6 text-center z-10 flex flex-col items-center -mt-40 md:-mt-60">
      <div ref="heroLogoParallax" class="flex justify-center mb-10 md:mb-14">
        <img ref="heroLogo" src="/logo_getwyn.png" alt="Getwyn Logo" class="h-40 md:h-56 w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
      </div>
      
      <h1 ref="heroTitle" class="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary mb-6">
        Getwyn.
      </h1>
      <p ref="heroSlogan" class="text-xl md:text-3xl text-white font-light tracking-widest max-w-3xl mx-auto">
        <span class="text-accent font-bold">GET</span> 
        <span class="text-accent font-bold"> W</span>hat 
        <span class="text-accent font-bold">Y</span>ou 
        <span class="text-accent font-bold">N</span>eed
      </p>
    </div>
  </section>
</template>

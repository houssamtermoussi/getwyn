<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const heroTitle = ref<HTMLElement | null>(null)
const heroSlogan = ref<HTMLElement | null>(null)
const heroBg = ref<HTMLElement | null>(null)

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.fromTo(heroTitle.value, 
    { y: 100, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.2, ease: "expo.out" }
  )
  .fromTo(heroSlogan.value,
    { y: 20, opacity: 0, letterSpacing: "0.5em" },
    { y: 0, opacity: 1, letterSpacing: "0.15em", duration: 1.5, ease: "power4.out" },
    "-=0.8"
  )

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
    
    <div class="container mx-auto px-6 text-center z-10">
      <h1 ref="heroTitle" class="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary mb-6">
        Getwyn.
      </h1>
      <p ref="heroSlogan" class="text-xl md:text-3xl text-white font-light tracking-wide max-w-3xl mx-auto uppercase">
        <span class="text-accent font-bold">Get</span> 
        <span class="text-accent font-bold"> w</span>hat 
        <span class="text-accent font-bold">y</span>ou 
        <span class="text-accent font-bold">n</span>eed
      </p>
    </div>
  </section>
</template>

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
    { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
  )
  .fromTo(heroSlogan.value,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    "-=0.6"
  )

  gsap.to(heroBg.value, {
    y: "30%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })
})
</script>

<template>
  <section class="hero-section relative h-screen flex flex-col justify-center items-center overflow-hidden">
    <div ref="heroBg" class="absolute inset-0 w-full h-[130%] -top-[15%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background -z-10"></div>
    
    <div class="container mx-auto px-6 text-center z-10">
      <h1 ref="heroTitle" class="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-secondary mb-6 lowercase">
        getwin.
      </h1>
      <p ref="heroSlogan" class="text-xl md:text-2xl text-secondary font-light tracking-wide max-w-2xl mx-auto">
        Custom-built digital experiences.
      </p>
    </div>
  </section>
</template>

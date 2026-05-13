<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Services from './components/sections/Services.vue'
import Process from './components/sections/Process.vue'
import Portfolio from './components/sections/Portfolio.vue'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis

onMounted(() => {
  // Initialize Lenis for smooth scrolling
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
})

onUnmounted(() => {
  lenis.destroy()
  gsap.ticker.remove(lenis.raf)
})
</script>

<template>
  <div class="relative w-full overflow-hidden selection:bg-accent selection:text-white">
    <Hero />
    <About />
    <Services />
    <Process />
    <Portfolio />
    
    <footer class="py-12 border-t border-surface text-center text-secondary text-sm">
      <p>&copy; 2026 getwin. All rights reserved.</p>
    </footer>
  </div>
</template>

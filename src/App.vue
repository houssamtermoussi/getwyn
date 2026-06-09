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
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import { i18n } from './i18n'

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

  // Floating background elements parallax
  gsap.to(".floating-bg-1", {
    y: "100%",
    rotation: 45,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 2
    }
  })
  
  gsap.to(".floating-bg-2", {
    y: "-80%",
    rotation: -30,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 3
    }
  })

  // Hero to About Parallax Effect
  gsap.to(".hero-parallax-wrapper", {
    y: "40%",
    opacity: 0.3,
    scale: 0.9,
    ease: "none",
    scrollTrigger: {
      trigger: ".about-section",
      start: "top bottom",
      end: "top top",
      scrub: true
    }
  })
})

onUnmounted(() => {
  lenis.destroy()
  gsap.ticker.remove(lenis.raf)
})
</script>

<template>
  <div class="relative w-full overflow-hidden selection:bg-accent selection:text-white">
    <LanguageSwitcher />
    <!-- Cinematic floating elements -->
    <div class="floating-bg-1 fixed top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none z-0"></div>
    <div class="floating-bg-2 fixed bottom-[10%] right-[5%] w-[30vw] h-[30vw] rounded-full bg-accent/5 blur-[100px] pointer-events-none z-0"></div>

    <div class="relative z-10 flex flex-col gap-0">
      <div class="hero-parallax-wrapper relative z-0">
        <Hero />
      </div>
      <div class="relative z-20 bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.9)] -mt-[20vh]">
        <About />
      </div>
      <div class="relative z-10 -mt-20 pt-20">
        <Services />
      </div>
      <div class="relative z-20 bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <Process />
      </div>
      <div class="relative z-10 -mt-20 pt-20">
        <Portfolio />
      </div>
    </div>
    
    <footer class="py-20 border-t border-white/5 bg-surface/20 backdrop-blur-md relative z-10">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-10">
          <div class="text-center md:text-left">
            <h2 class="text-5xl font-bold mb-4">getwyn.</h2>
            <p class="text-secondary max-w-xs font-light">{{ i18n.t('footer.desc') }}</p>
          </div>
          
          <div class="flex flex-col md:flex-row gap-8 md:gap-16 text-center md:text-right">
            <div>
              <p class="text-xs uppercase tracking-widest text-accent font-bold mb-2">{{ i18n.t('footer.email') }}</p>
              <a href="mailto:getwyn.ma@gmail.com" class="text-xl text-white hover:text-accent transition-colors duration-300">getwyn.ma@gmail.com</a>
            </div>
            <div>
              <p class="text-xs uppercase tracking-widest text-accent font-bold mb-2">{{ i18n.t('footer.call') }}</p>
              <a href="tel:+1234567890" class="text-xl text-white hover:text-accent transition-colors duration-300">06 61 07 26 77</a>
            </div>
          </div>
        </div>
        
        <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-secondary text-xs">
          <p>&copy; 2026 getwyn. {{ i18n.t('footer.rights') }}</p>
         
        </div>
      </div>
    </footer>
  </div>
</template>

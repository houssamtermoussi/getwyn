<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const cardRef = ref<HTMLElement | null>(null)

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
        scrub: 1.5
      }
    })

    // Reveal
    gsap.fromTo(cardRef.value,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardRef.value,
          start: "top 85%",
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
        class="group bg-surface/40 backdrop-blur-xl p-12 md:p-20 rounded-[40px] border border-white/5 hover:border-accent/40 transition-all duration-700 hover:shadow-[0_20px_80px_rgba(239,68,68,0.1)] relative overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        
        <h3 class="text-sm uppercase tracking-widest text-secondary mb-12 font-mono group-hover:text-white transition-colors duration-300">About getwin.</h3>
        
        <div class="space-y-8 text-2xl md:text-4xl font-light leading-tight text-primary">
          <p>
            We are a digital development studio focused on building <span class="text-accent font-semibold">modern</span>, clean and <span class="text-accent font-semibold">scalable</span> digital experiences.
          </p>
          <p class="text-secondary/80">
            We design and develop custom web, mobile, and desktop solutions tailored to each client’s needs. Every project we deliver is crafted with attention to detail, <span class="text-accent font-semibold">performance</span>, and <span class="text-accent font-semibold">user experience</span>.
          </p>
          <p>
            Our goal is simple: turn ideas into <span class="text-accent font-semibold">powerful digital products</span> that are both <span class="text-accent font-semibold">beautiful</span> and <span class="text-accent font-semibold">functional</span>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const aboutText = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.fromTo(aboutText.value,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 75%",
      }
    }
  )
})
</script>

<template>
  <section class="about-section py-32 md:py-48 px-6 relative z-10">
    <div class="container mx-auto max-w-4xl">
      <div ref="aboutText" class="text-2xl md:text-4xl md:leading-snug font-light text-primary">
        <p class="mb-8">
          We are a digital development studio focused on building modern, clean and scalable digital experiences.
        </p>
        <p class="mb-8 text-secondary">
          We design and develop custom web, mobile, and desktop solutions tailored to each client’s needs. Every project we deliver is crafted with attention to detail, performance, and user experience.
        </p>
        <p>
          Our goal is simple: <span class="text-white font-medium">turn ideas into powerful digital products that are both beautiful and functional.</span>
        </p>
      </div>
    </div>
  </section>
</template>

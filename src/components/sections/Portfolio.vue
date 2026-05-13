<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const projects = [
  {
    title: 'Lumina E-Commerce',
    desc: 'A complete overhaul of a luxury brand e-commerce platform, focusing on seamless conversion and lightning-fast performance.',
    tech: ['Vue.js', 'Tailwind', 'Shopify API'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    title: 'FinSync Dashboard',
    desc: 'An intuitive data visualization and management dashboard for a leading financial technology startup.',
    tech: ['React', 'D3.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Vitality App',
    desc: 'A cross-platform mobile application tracking patient wellness and seamlessly integrating with modern wearable devices.',
    tech: ['React Native', 'Firebase', 'Redux'],
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop'
  }
]

const projectCards = ref<HTMLElement[]>([])

onMounted(() => {
  projectCards.value.forEach((card, index) => {
    // Reveal
    gsap.fromTo(card,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        }
      }
    )
    
    // Parallax on image inside card
    const img = card.querySelector('.portfolio-img')
    if (img) {
      gsap.to(img, {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    }
  })
})
</script>

<template>
  <section class="portfolio-section py-32 md:py-48 px-6 relative">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-24">
        <h2 class="text-4xl md:text-5xl font-bold">Selected Works.</h2>
        <p class="text-secondary font-light mt-4 md:mt-0 max-w-md text-sm md:text-base">
          A glimpse into some of our recent projects where design meets scalable architecture.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          ref="projectCards"
          class="group cursor-pointer flex flex-col"
        >
          <!-- Image Container -->
          <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-surface/50">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="portfolio-img absolute -top-[10%] left-0 w-full h-[120%] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
          
          <!-- Content -->
          <div>
            <h3 class="text-2xl font-semibold mb-3 text-white group-hover:text-accent transition-colors duration-300">{{ project.title }}</h3>
            <p class="text-secondary font-light text-sm mb-4 leading-relaxed">
              {{ project.desc }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(tech, i) in project.tech" 
                :key="i"
                class="px-3 py-1 text-xs font-medium text-primary bg-surface border border-white/10 rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import gsap from 'gsap'
import { i18n } from '../../i18n'

const projects = computed(() => [
  {
    title: i18n.t('portfolio.projects.0.title'),
    desc: i18n.t('portfolio.projects.0.desc'),
    tech: ['Vue.js', 'Node.js', 'PostgreSQL'],
    image: '/projects/medicale.png'
  },
  {
    title: i18n.t('portfolio.projects.1.title'),
    desc: i18n.t('portfolio.projects.1.desc'),
    tech: ['React', 'Express', 'MongoDB'],
    image: '/projects/clinice.png'
  },
  {
    title: i18n.t('portfolio.projects.2.title'),
    desc: i18n.t('portfolio.projects.2.desc'),
    tech: ['Angular', 'Spring Boot', 'AWS'],
    image: '/projects/notary.png'
  },
  {
    title: i18n.t('portfolio.projects.3.title'),
    desc: i18n.t('portfolio.projects.3.desc'),
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    title: i18n.t('portfolio.projects.4.title'),
    desc: i18n.t('portfolio.projects.4.desc'),
    tech: ['React Native', 'Firebase', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: i18n.t('portfolio.projects.5.title'),
    desc: i18n.t('portfolio.projects.5.desc'),
    tech: ['Vue.js', 'Tailwind', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: i18n.t('portfolio.projects.6.title'),
    desc: i18n.t('portfolio.projects.6.desc'),
    tech: ['React', 'GraphQL', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: i18n.t('portfolio.projects.7.title'),
    desc: i18n.t('portfolio.projects.7.desc'),
    tech: ['Next.js', 'Tailwind', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: i18n.t('portfolio.projects.8.title'),
    desc: i18n.t('portfolio.projects.8.desc'),
    tech: ['Full-Stack', 'Cloud Native', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
  }
])

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
  })
})
</script>

<template>
  <section class="portfolio-section py-32 md:py-48 px-6 relative">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-24">
        <h2 class="text-4xl md:text-5xl font-bold">{{ i18n.t('portfolio.title') }}</h2>
        <p class="text-secondary font-light mt-4 md:mt-0 max-w-md text-sm md:text-base">
          {{ i18n.t('portfolio.subtitle') }}
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
              class="portfolio-img absolute top-0 left-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 ease-out"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
          
          <!-- Content -->
          <div>
            <h3 class="text-2xl font-semibold mb-3 text-white group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300">{{ project.title }}</h3>
            <p class="text-secondary font-light text-sm mb-4 leading-relaxed">
              {{ project.desc }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(tech, i) in project.tech" 
                :key="i"
                class="px-3 py-1 text-xs font-medium text-primary bg-surface border border-white/10 rounded-full group-hover:border-accent/30 transition-colors duration-300"
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

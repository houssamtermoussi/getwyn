<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const projects = [
  {
    title: 'Medical Practice Management',
    desc: 'A comprehensive software suite designed to streamline medical practice operations, featuring advanced patient scheduling, electronic health records, and seamless billing integration.',
    tech: ['Vue.js', 'Node.js', 'PostgreSQL'],
    image: '/projects/medical.png'
  },
  {
    title: 'Clinic Management',
    desc: 'An intuitive, state-of-the-art clinic administration platform. Built for high performance, it optimizes daily workflows, from appointment booking to resource allocation.',
    tech: ['React', 'Express', 'MongoDB'],
    image: '/projects/clinic.png'
  },
  {
    title: 'Notary Office Management',
    desc: 'A highly secure, cloud-based platform tailored for notary offices. It ensures meticulous document tracking, automated compliance checks, and client data protection.',
    tech: ['Angular', 'Spring Boot', 'AWS'],
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop'
  },
  {
    title: 'Commercial Management System',
    desc: 'A robust enterprise solution providing real-time analytics, inventory tracking, and sales performance metrics. Engineered to scale with growing commercial demands.',
    tech: ['Vue.js', 'Laravel', 'MySQL'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
  },
  {
    title: 'Optical Store Management',
    desc: 'An elegant, all-in-one point of sale and inventory system specifically crafted for optical stores. It seamlessly handles prescription records, stock levels, and customer relationships.',
    tech: ['React Native', 'Firebase', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Hearing Aid Center Management',
    desc: 'A specialized application designed to elevate the patient experience at hearing aid centers. Features encompass audiology data management, follow-up scheduling, and integrated billing.',
    tech: ['Vue.js', 'Tailwind', 'Python'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Claims Expertise Firm Management',
    desc: 'A dynamic, high-end dashboard empowering insurance experts. It accelerates claims processing, facilitates evidence management, and delivers automated, comprehensive reporting.',
    tech: ['React', 'GraphQL', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'E-commerce Website',
    desc: 'A sophisticated, conversion-optimized digital storefront. Delivered with flawless aesthetics and lightning-fast load times, it provides an unparalleled online shopping experience.',
    tech: ['Next.js', 'Tailwind', 'Shopify'],
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Custom-Built Application Solutions',
    desc: 'Bespoke, cutting-edge software architecture crafted to address unique operational challenges. From conceptual design to deployment, we build scalable, future-proof applications.',
    tech: ['Full-Stack', 'Cloud Native', 'Microservices'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
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

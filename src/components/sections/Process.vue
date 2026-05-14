<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import gsap from 'gsap'
import { i18n } from '../../i18n'

const steps = computed(() => [
  { num: '01', title: i18n.t('process.steps.0.title'), desc: i18n.t('process.steps.0.desc') },
  { num: '02', title: i18n.t('process.steps.1.title'), desc: i18n.t('process.steps.1.desc') },
  { num: '03', title: i18n.t('process.steps.2.title'), desc: i18n.t('process.steps.2.desc') },
  { num: '04', title: i18n.t('process.steps.3.title'), desc: i18n.t('process.steps.3.desc') },
  { num: '05', title: i18n.t('process.steps.4.title'), desc: i18n.t('process.steps.4.desc') },
  { num: '06', title: i18n.t('process.steps.5.title'), desc: i18n.t('process.steps.5.desc') }
])

const stepsRef = ref<HTMLElement[]>([])
const progressLine = ref<HTMLElement | null>(null)

onMounted(() => {
  gsap.fromTo(progressLine.value,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".process-container",
        start: "top 60%",
        end: "bottom 80%",
        scrub: true
      }
    }
  )

  stepsRef.value.forEach((step, index) => {
    const isEven = index % 2 === 0
    gsap.fromTo(step,
      { x: isEven ? -100 : 100, y: 50, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: step,
          start: "top 85%",
          end: "top 50%",
          scrub: 1
        }
      }
    )
  })
})
</script>

<template>
  <section class="process-section py-32 md:py-48 px-6 bg-surface/20">
    <div class="container mx-auto max-w-5xl">
      <h2 class="text-4xl md:text-5xl font-bold mb-24 text-center">{{ i18n.t('process.title') }}</h2>
      
      <div class="process-container relative">
        <!-- Vertical Line -->
        <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
          <div ref="progressLine" class="absolute top-0 w-full bg-accent origin-top h-full"></div>
        </div>
        
        <div class="space-y-16 md:space-y-32">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            ref="stepsRef"
            class="relative flex flex-col md:flex-row items-center w-full group"
            :class="index % 2 === 0 ? 'md:flex-row-reverse' : ''"
          >
            <!-- Timeline Dot -->
            <div class="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(239,68,68,0.6)] group-hover:shadow-[0_0_25px_rgba(239,68,68,1)] group-hover:scale-125 transition-all duration-500"></div>
            
            <div class="w-full md:w-1/2 pl-16 md:pl-0" :class="index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'">
              <div class="text-accent text-sm font-bold tracking-widest mb-2 font-mono">{{ step.num }}</div>
              <h3 class="text-3xl font-semibold mb-4 text-white">{{ step.title }}</h3>
              <p class="text-secondary font-light leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

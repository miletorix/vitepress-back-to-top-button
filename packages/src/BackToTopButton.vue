<template>
  <Teleport to="body">
    <button
      v-if="isVisible"
      class="back-to-top-button"
      @click="scrollToTop"
      :style="{
        '--progress': scrollProgress + '%',
        '--progress-color': 'var(--vp-c-bg-soft)',
        '--button-bg': isDark ? '#1e1e1e' : '#fff',
        '--text-color': isDark ? '#fff' : '#000'
      }"
    >
      <svg class="progress-ring" viewBox="0 0 36 36">
        <path
          class="progress-bg"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="progress-bar"
          :d="circlePath"
          :stroke-dasharray="`${scrollProgress}, 100`"
        />
      </svg>
      <span class="progress-text" v-if="scrollProgress < 100">
        {{ Math.floor(scrollProgress) }}%
      </span>
      <span class="progress-icon" v-else v-html="arrowSvg"></span>
    </button>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const isDark = ref(false)

onMounted(() => {
  const updateDark = () => {
    isDark.value = document.documentElement.classList.contains('dark')
  }

  updateDark()
  const observer = new MutationObserver(updateDark)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
})

const isVisible = ref(false)
const scrollProgress = ref(0)
let scrollListener: (() => void) | null = null

const updateScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = (scrollTop / scrollHeight) * 100
  scrollProgress.value = Math.min(100, Math.max(0, progress))
  isVisible.value = scrollTop > 100
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    updateScroll()
    scrollListener = () => updateScroll()
    window.addEventListener('scroll', scrollListener)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined' && scrollListener) {
    window.removeEventListener('scroll', scrollListener)
  }
})

const arrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd">
    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
    <path fill="currentColor" d="M10.94 7.94a1.5 1.5 0 0 1 2.12 0l5.658 5.656a1.5 1.5 0 1 1-2.122 2.121L12 11.122l-4.596 4.596a1.5 1.5 0 1 1-2.122-2.12z" />
  </g>
</svg>`

const circlePath = `M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831`
</script>

<style scoped>
.back-to-top-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background-color: var(--button-bg);
  color: var(--text-color);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.progress-ring {
  position: absolute;
  width: 60px;
  height: 60px;
  transform: rotate(-90deg);
}

.progress-bg {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 4;
}

.progress-bar {
  fill: none;
  stroke: #42b983;
  stroke-width: 4;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
}

.progress-text,
.progress-icon {
  position: relative;
  font-size: 0.8rem;
  z-index: 1;
  color: var(--vp-c-text-1);
  text-align: center;
}

.progress-icon svg {
  width: 24px;
  height: 24px;
  color: var(--text-color);
}
</style>
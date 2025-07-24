<template>
  <Teleport to="body">
    <button
      v-show="isMounted"
      class="back-to-top-button"
      :class="{ visible: isVisible }"
      @click="scrollToTop"
      :style="{
        '--progress': scrollProgress + '%',
        '--progress-color': progressColor,
        '--button-bg': isDark ? '#1e1e1e' : '#fff',
        '--text-color': textColor || (isDark ? '#fff' : '#000')
      }"
    >
      <svg class="progress-ring" viewBox="0 0 36 36">
        <path
          class="progress-bg"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
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
import { ref, onMounted, onUnmounted, defineProps } from 'vue'

const props = defineProps<{
  progressColor?: string
  textColor?: string
  arrowSvg?: string
}>()

const isDark = ref(false)
const isMounted = ref(false)
const isVisible = ref(false)
const scrollProgress = ref(0)

let scrollListener: (() => void) | null = null
const ticking = ref(false)

const updateDark = () => {
  isDark.value = document.documentElement.classList.contains('dark')
}

const updateScroll = () => {
  if (!ticking.value) {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight

      let progress = (scrollTop / scrollHeight) * 100

      if (progress >= 99.5) progress = 100

      scrollProgress.value = Math.min(100, Math.max(0, progress))
      isVisible.value = scrollTop > 100

      ticking.value = false
    })
    ticking.value = true
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  isMounted.value = true
  updateDark()
  updateScroll()

  const observer = new MutationObserver(updateDark)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })

  scrollListener = () => updateScroll()
  window.addEventListener('scroll', scrollListener)
})

onUnmounted(() => {
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener)
  }
})

const circlePath = `M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831`

const defaultArrowSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none" fill-rule="evenodd">
		<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="M11.293 8.293a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414L12 10.414l-4.95 4.95a1 1 0 0 1-1.414-1.414z" />
	</g>
</svg>`

const arrowSvg = props.arrowSvg || defaultArrowSvg
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
  z-index: 998;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.9);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.back-to-top-button.visible {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
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
  stroke: var(--progress-color, #42b983);
  stroke-width: 4;
  stroke-linecap: round;
  /* transition: stroke-dasharray 0.3s ease; */
}

.progress-text,
.progress-icon {
  position: relative;
  font-size: 0.8rem;
  z-index: 1;
  color: var(--text-color);
  text-align: center;
}

.progress-icon svg {
  width: 24px;
  height: 24px;
  color: var(--text-color);
}
</style>

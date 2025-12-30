import { createVNode, render, type App } from 'vue'
import BackToTopButton from './BackToTopButton.vue'
import type { BackToTopButtonOptions } from './types'

export default function BackToTopButtonPlugin(
  app: App,
  options: BackToTopButtonOptions = {}
) {
  if (typeof window === 'undefined') return

  const el = document.createElement('div')
  el.id = 'back-to-top-container'
  document.body.appendChild(el)

  const vnode = createVNode(BackToTopButton, {
    progressColor: options.progressColor || '#42b983',
    textColor: options.textColor,
    arrowSvg: options.arrowSvg
  })

  render(vnode, el)
}

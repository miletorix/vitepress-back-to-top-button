// import BackToTopButton from './BackToTopButton.vue'
// export default BackToTopButton
// export { BackToTopButton }

import { createVNode, render, type App } from 'vue'
import BackToTopButton from './BackToTopButton.vue'

export interface BackToTopOptions {
  progressColor?: string
  textColor?: string
  arrowSvg?: string
}

export default function install(app: App, options: BackToTopOptions = {}) {
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

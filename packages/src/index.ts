// import BackToTopButton from './BackToTopButton.vue'
// export default BackToTopButton
// export { BackToTopButton }

import { createVNode, render, type App } from 'vue'
import BackToTopButton from './BackToTopButton.vue'

export default function install(app: App) {
  if (typeof window === 'undefined') return

  const el = document.createElement('div')
  el.id = 'back-to-top-container'
  document.body.appendChild(el)

  const vnode = createVNode(BackToTopButton)
  render(vnode, el)
}

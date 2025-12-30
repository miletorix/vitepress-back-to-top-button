import type { App } from 'vue'

export interface BackToTopButtonOptions {
  progressColor?: string
  textColor?: string
  arrowSvg?: string
}

declare const BackToTopButton: (
  app: App,
  options?: BackToTopButtonOptions
) => void

export default BackToTopButton

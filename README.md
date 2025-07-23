# vitepress-back-to-top-button

A lightweight Back-to-Top button Vue 3 component for VitePress. Features smooth scroll, progress ring indicating scroll percentage, dark/light theme support.

![npm](https://img.shields.io/npm/v/@miletorix/vitepress-back-to-top-button) ![npm](https://img.shields.io/npm/dw/@miletorix/vitepress-back-to-top-button) ![license](https://img.shields.io/npm/l/@miletorix/vitepress-back-to-top-button)

## Live Demo and more information

✨ See it in action:  
👉 [https://miletorix.github.io/vitepress-back-to-top-button/](https://miletorix.github.io/vitepress-back-to-top-button/)

📦 NPM Package:  
👉 [https://www.npmjs.com/package/@miletorix/vitepress-back-to-top-button](https://www.npmjs.com/package/@miletorix/vitepress-back-to-top-button)

## Installation

```sh
npm i @miletorix/vitepress-back-to-top-button
```

## Usage

### Configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BackToTopButton from '@miletorix/vitepress-back-to-top-button' //[!code ++]
import '@miletorix/vitepress-back-to-top-button/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app) //[!code ++]
  }
}
```

### Advanced configuration

```typescript
// docs/.vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BackToTopButton from '@miletorix/vitepress-back-to-top-button' //[!code ++]
import '@miletorix/vitepress-back-to-top-button/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app, { // [!code ++]
      progressColor: 'string', // default is #42b983 [!code ++]
      arrowSvg: `string` // only svg code [!code ++]
    })
  }
}
```

## Preview

### Preview - Desktop

![demo-1](./assets/demo.gif)
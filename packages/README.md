# vitepress-back-to-top-button

A lightweight Back-to-Top button Vue 3 component for VitePress. Features smooth scroll, progress ring indicating scroll percentage, dark/light theme support.

## Live Demo and more information

✨ See it in action:  
👉 [https://miletorix.github.io/vitepress-back-to-top-button/](https://miletorix.github.io/vitepress-back-to-top-button/)

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
      arrowSvg: `string` // svg code or path to svg file [!code ++]
    })
  }
}
```

## Preview

### Preview - Desktop

![demo-1](https://github.com/miletorix/vitepress-back-to-top-button/raw/main/assets/demo-1.gif)
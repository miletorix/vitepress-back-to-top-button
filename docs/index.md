---
prev: false
next: false
layout: doc
outline: [2, 3]
sidebar: false
---

# vitepress-back-to-top-button

A lightweight Back-to-Top button Vue 3 component for VitePress. Features smooth scroll, progress ring indicating scroll percentage, dark/light theme support.

![npm](https://img.shields.io/npm/v/@miletorix/vitepress-back-to-top-button)  
![npm](https://img.shields.io/npm/dw/@miletorix/vitepress-back-to-top-button)  
![license](https://img.shields.io/npm/l/@miletorix/vitepress-back-to-top-button)

## Installation

```sh [npm]
npm i @miletorix/vitepress-back-to-top-button
```

## Usage

```typescript  [docs/.vitepress/theme/index.ts]
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import BackToTopButton from '@miletorix/vitepress-back-to-top-button' //[!code ++]
import '@miletorix/vitepress-back-to-top-button/style.css' //[!code ++]

export default {
  extends: DefaultTheme,
  // Layout,
  enhanceApp(ctx) {
    BackToTopButton(ctx.app) //[!code ++]
  }
}
```

## Scrolling Test

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit sapien sed tellus bibendum mollis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce condimentum nulla neque, a consequat justo dignissim quis. Etiam dictum lacus eu commodo interdum. Pellentesque a nibh id libero malesuada dapibus. In purus leo, varius nec condimentum id, fringilla quis purus. Integer id lacus fermentum, rhoncus ex ut, efficitur velit. Integer mollis elit id leo dapibus, sit amet ornare felis viverra. Etiam leo urna, accumsan a ultricies ut, lacinia a velit. Etiam tempor elementum urna ac tempus. Pellentesque mollis, sapien eu vulputate viverra, diam eros aliquam augue, a rutrum tellus urna dignissim leo. Vivamus consectetur mi vitae volutpat sollicitudin. Donec bibendum pretium dui ut luctus. Nullam auctor convallis augue. Aliquam sapien justo, tempor ac nibh ut, aliquam malesuada velit. Nullam mauris justo, vulputate quis finibus et, blandit ut leo.

Curabitur eu vehicula nisi. Donec fringilla tortor urna, vitae sodales mauris viverra ac. Donec ultrices congue felis, sit amet interdum metus vulputate at. Nam dictum nec felis eget tempor. Mauris malesuada suscipit quam eget iaculis. Integer egestas, neque ut semper vestibulum, tortor lorem ultricies ipsum, in condimentum orci tellus eget arcu. Aliquam vitae metus ex. Fusce eleifend dui quis nibh varius volutpat. Suspendisse congue turpis mauris, eu mollis odio pharetra sit amet.

Mauris aliquet sed urna vel ultricies. Cras vestibulum aliquam est sed vestibulum. Duis ac est a enim iaculis accumsan. Nullam a porta neque. Etiam lorem magna, vestibulum eget quam ut, placerat bibendum mauris. Duis at odio molestie, accumsan metus ac, luctus dui. Duis pharetra, tortor nec sagittis sollicitudin, tellus mauris porta diam, nec sodales tellus diam sed mauris. Maecenas vehicula dignissim tortor a mollis. Aenean tempus, felis in maximus cursus, nunc nisl hendrerit orci, sit amet lacinia dui felis in enim. Proin sagittis accumsan enim, sit amet vulputate leo sodales quis. Aenean eu tempus augue, ac placerat libero. Donec sed vehicula leo, non iaculis elit. Curabitur tristique, libero vel porta ultrices, ex sem laoreet velit, sed placerat nibh dui sed magna. Suspendisse potenti.

Pellentesque eu lectus sed urna tristique hendrerit. Quisque vitae laoreet justo. Morbi nulla diam, placerat eu venenatis non, sollicitudin et neque. Integer finibus efficitur magna, non consectetur magna sodales ut. Maecenas eleifend, ipsum ut ultrices vehicula, turpis metus laoreet neque, et aliquet urna mauris vitae urna. Duis fringilla laoreet lobortis. Aliquam enim sem, interdum at erat vel, imperdiet egestas dolor. Sed fermentum est nibh, nec dapibus lectus ornare ut. Nullam a elit quis sem viverra aliquam sit amet vitae est. Cras tempus ultricies turpis sit amet ullamcorper. Cras congue venenatis ante, eu consequat nibh blandit eget.

Integer posuere in risus at efficitur. Pellentesque malesuada ante non fringilla tristique. Aliquam interdum bibendum ligula vel faucibus. Suspendisse tristique volutpat tincidunt. Etiam sed lobortis ipsum. Mauris mattis nulla eu lobortis dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus interdum sodales ante. Ut euismod sit amet turpis vitae sodales. Etiam euismod dolor scelerisque risus condimentum, in dapibus ex sagittis. Pellentesque in sapien vel turpis tempus facilisis. Vestibulum erat metus, rutrum eu sapien ac, congue iaculis nisl. Morbi eget nisl purus. Praesent blandit pretium nisl. Etiam a urna ultricies, tincidunt lectus id, bibendum urna.

Morbi laoreet sit amet elit a laoreet. Curabitur egestas justo turpis, sed laoreet augue auctor eget. In sit amet euismod nisl. Nunc sed pharetra arcu. Ut ac ante vel enim dapibus sodales. Sed ac porttitor lorem. Aenean rhoncus tristique lobortis. Nullam vestibulum vulputate massa viverra facilisis. Mauris gravida ligula a libero eleifend rutrum. Aliquam ultricies purus neque, quis ullamcorper elit egestas a.

Integer porttitor lobortis mauris, quis fermentum felis suscipit quis. Sed sem tellus, feugiat eget faucibus vitae, scelerisque ut sem. Curabitur id urna eu diam fermentum accumsan. Vivamus ornare consectetur leo, eget porttitor magna rutrum eget. Ut ac neque ac quam vestibulum placerat. Vestibulum dapibus, elit eget interdum consectetur, quam turpis faucibus augue, in lobortis sapien neque euismod mauris. Integer molestie lorem nisi, vel tincidunt metus consectetur a. Pellentesque in sem risus. In rhoncus varius tortor congue congue. Maecenas ut orci venenatis, vehicula lectus at, placerat augue. Proin eget erat luctus, placerat lectus non, lacinia magna. Cras a lacinia arcu. Fusce metus purus, dapibus ac pretium a, venenatis ut eros. Phasellus feugiat tellus augue, in ornare turpis eleifend nec. Praesent tempus nisl a mollis dignissim.

Fusce consequat tortor ante, sed consequat odio consequat id. Mauris id odio gravida, vestibulum enim sed, mollis est. Ut condimentum sagittis ante, et porttitor erat vulputate at. Donec hendrerit elit sed dapibus tempus. Duis pretium consequat justo, et consectetur est condimentum a. Suspendisse placerat augue nec dui bibendum feugiat. Mauris volutpat nisl enim, ac facilisis justo interdum sed.

Aliquam et eros suscipit, imperdiet purus in, vulputate erat. Proin metus metus, facilisis eu odio eget, congue tempus arcu. Proin ut tellus urna. Pellentesque convallis enim ut nunc fermentum interdum in non neque. Sed blandit risus sed tempor laoreet. Fusce sem libero, lobortis nec lacinia ut, rhoncus eget mauris. Nullam id ante sed nulla ultricies faucibus eu ut elit. Quisque dapibus aliquam volutpat. Donec non vulputate turpis, ac feugiat nibh. Integer sed volutpat augue, at rutrum ipsum.

Nam lacinia aliquet gravida. Praesent tincidunt pellentesque velit eu tincidunt. Nunc eget neque auctor, fermentum leo eget, tristique augue. Maecenas nec tellus et ex tempus congue id ut elit. Phasellus in ante eu massa consequat scelerisque. Morbi iaculis urna quis consequat aliquet. Sed aliquam, dui in convallis facilisis, sem ligula congue mauris, a condimentum sapien odio sit amet turpis. Suspendisse potenti. Etiam egestas sollicitudin tellus sed ornare. Aliquam mollis posuere massa. Sed elementum lacus sit amet sem facilisis tincidunt. Quisque sollicitudin venenatis dui id blandit. Integer a eros eu leo lacinia volutpat nec nec mauris. 
# Nuxt VCalendar (Nuxt 4 Compatible Fork)

This package is a Nuxt 4 compatible fork of @samk-dev/nuxt-vcalendar by Samk-dev.
The original project is licensed under the MIT License and copyright remains with the original author(s).

This fork updates the code to support Nuxt 4 while preserving all original functionality.

## Migration instructions

1. Modify `package.json`


```
'@samk-dev/nuxt-vcalendar',
↓
'@yuta-inoue-ph/nuxt-vcalendar',
```


2. Reinstall `package-lock.json`

```
npm install
```

3. Modify `nuxt.config.ts`

```
export default defineNuxtConfig({
  ...
  modules: [
    '@samk-dev/nuxt-vcalendar', // remove
    '@yuta-inoue-ph/nuxt-vcalendar', // add
  ],
  ...
})
```

# Nuxt VCalendar

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Integrates V Calendar in Nuxt

[VCalendar Docs](https://vcalendar.io/)

## Features

- Zero config
- Prefix VCalendar components
- Auto import all VCalendar components or only what you need

## Quick Setup

1. Add `@yuta-inoue-ph/nuxt-vcalendar` dependency to your project

```bash
npx nuxi@latest module add @yuta-inoue-ph/nuxt-vcalendar
```

That's it! You can now use Nuxt VCalendar in your Nuxt app ✨

## Manual Installation

1. Add @yuta-inoue-ph/nuxt-vcalendar dependency to your project

```bash
# Using pnpm
pnpm add -D @yuta-inoue-ph/nuxt-vcalendar

# Using yarn
yarn add --dev @yuta-inoue-ph/nuxt-vcalendar

# Using npm
npm install --save-dev @yuta-inoue-ph/nuxt-vcalendar
```

2. Add `@yuta-inoue-ph/nuxt-vcalendar` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['@yuta-inoue-ph/nuxt-vcalendar']
})
```

## Stackblitz example

[https://stackblitz.com/edit/nuxt-starter-2zwgab?file=app.vue](https://stackblitz.com/edit/nuxt-starter-2zwgab?file=app.vue)

## Usage Example

```html
<script setup lang="ts">
  import { ref } from '#imports'
  const date = ref(new Date())

  const attrs = ref([
    {
      key: 'today',
      highlight: {
        color: 'green',
        fillMode: 'solid'
      },
      dates: new Date()
    }
  ])
</script>

<template>
  <div>
    <client-only>
      <h2>Calendar</h2>
      <VCalendar v-model="date" />
      <h2>Date Picker</h2>
      <VDatePicker v-model="date" :attributes="attrs" />
    </client-only>
  </div>
</template>
```

## Module Options

```ts
export type VCalendarComponents = {
  DatePicker: boolean
  Calendar: boolean
}
export interface ModuleOptions {
  /**
   * @description prefix instead of v-
   * @default V
   */
  prefix: string
  /**
   * @description load v-calendar styles
   * @default true
   */
  defaultCss: boolean
  /**
   * @description load custom stylesheet
   * @default undefined
   */
  cssPath?: string
  /**
   * @description v-calendar options
   * @see https://vcalendar.io/calendar/api.html#defaults
   */
  calendarOptions?: Defaults
  /**
   * @description auto import v-calendar components
   * @default {DatePicker, true, Calendar: true}
   */
  autoImports: VCalendarComponents
}
```

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@yuta-inoue-ph/nuxt-vcalendar/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@yuta-inoue-ph/nuxt-vcalendar
[npm-downloads-src]: https://img.shields.io/npm/dm/@yuta-inoue-ph/nuxt-vcalendar.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@yuta-inoue-ph/nuxt-vcalendar
[license-src]: https://img.shields.io/npm/l/@yuta-inoue-ph/nuxt-vcalendar.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@yuta-inoue-ph/nuxt-vcalendar
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com

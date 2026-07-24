export default defineNuxtConfig({
  compatibilityDate: '2025-08-15',
  modules: ['../src/module'],
  vcalendar: {},
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit', 'v-calendar']
    }
  }
})

import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  vue: {
    config: {
      productionTip: true,
      ignoredElements: [
        'a-scene',
        'a-entity',
        'a-camera',
        'a-animation',
        'a-sky',
        'a-marker',
      ],
    },
  },
  // ssr: false,
  meta: {
    // titleTemplate: '',
    // title: '',
    // htmlAttrs: {
    //   lang: 'en',
    // },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      {
        src:
          'https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js',
      },
      {
        src: './utils/qrcode.js',
      },
    ],
  },
  // meta: {
  //   title: 'Vitesse Nuxt 3',
  // },
  buildModules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  vueuse: {
    ssrHandlers: true,
  },
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 1.2,
    },
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ],
  },
})

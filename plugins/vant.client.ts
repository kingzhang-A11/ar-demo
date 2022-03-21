import { Button, Progress } from 'vant'
import 'vant/lib/index.css'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Button, Progress)
})

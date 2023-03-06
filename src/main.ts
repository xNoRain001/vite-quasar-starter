import { createApp } from 'vue'
import { createPinia } from "pinia"
import { Quasar, Notify, Loading } from 'quasar'

import App from './App.vue'
import router from './router'

import './index.css'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)
const pinia = createPinia()

app
  .use(Quasar, {
    plugins: {
      Loading,
      Notify
    },
  })
  .use(pinia)
  .use(router)
  .mount('#app')

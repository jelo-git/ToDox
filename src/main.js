import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/js/all'

import store from './services/storeService.js'
const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

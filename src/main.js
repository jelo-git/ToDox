import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faListCheck, faFeatherPointed, faCheck, faPenToSquare, faXmark, faShareNodes, faPlus, faTrash, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

import store from './services/storeService.js'

library.add(faListCheck, faFeatherPointed, faCheck, faPenToSquare, faXmark, faShareNodes, faPlus, faTrash, faArrowsRotate)

const app = createApp(App)

app.use(router)

app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

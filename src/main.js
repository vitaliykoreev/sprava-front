import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'
const options = {
    // You can set your default options here
    position: POSITION.BOTTOM_CENTER,
    transition: 'Vue-Toastification__fade',
    maxToasts: 5,
    newestOnTop: false
}

import './assets/scss/main.scss'

const app = createApp(App)

app.use(router)
    .use(Toast, options)
    .use(PrimeVue)

app.mount('#app')

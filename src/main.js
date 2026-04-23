import { createApp } from 'vue'
import App from './App.vue'
import PNP from 'vue-pick-n-plop'

const app = createApp(App)
app.use(PNP)
app.mount('#app')

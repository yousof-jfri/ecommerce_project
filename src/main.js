import { createApp } from 'vue'
import App from './App.vue'

// vue router
import router from './router'

// vuex
import store from './store'

// tailwind css
import './index.css'

// fontawesome
import './assets/fontawesome/css/all.min.css'

createApp(App).use(store).use(router).mount('#app')

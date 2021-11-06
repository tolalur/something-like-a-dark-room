import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/style.scss'

createApp(App).use(router).use(createPinia()).mount('#app')

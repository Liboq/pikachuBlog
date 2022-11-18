import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './routes'


createApp(App).use(createPinia()).use(router).mount('#app')

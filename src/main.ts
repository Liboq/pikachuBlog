import { createApp } from 'vue'
import './style.scss'
import './assets/iconfont/iconfont.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './routes'
import directives from './directives'


const app =createApp(App)
app.use(createPinia())
app.use(router)
directives.forEach((item:any)=>{
    app.directive(item.name,item)
})
console.log(app);

app.mount('#app')

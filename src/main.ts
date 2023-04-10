import { createApp } from 'vue'
import './style.scss'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './routes'
import directives from './directives'
import 'amfe-flexible'
// @ts-ignore
import SimpleJsTracker from 'simple-js-tracker'


const app =createApp(App)
app.config.globalProperties.$simpleJsTracker= new SimpleJsTracker({
    debug: true,
    url: "", // 服务地址
    enableHeatMap: true, // 开启热力图
    enableHashTracker: true,
    config: {
        channel: '4', // 渠道
        session_id: '', // 用户请求
        device_type: '', // 设备类型
    }
  });
app.config.globalProperties.$simpleJsTracker.initDirectives(app)
app.use(createPinia())
app.use(router)
directives.forEach((item:any)=>{
    app.directive(item.name,item)
})
console.log(app);

app.mount('#app')

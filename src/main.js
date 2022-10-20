import { createApp } from 'vue'
import App from './App.vue'
// 导入 bootstrap 样式表
import './assets/css/bootstrap.css'
// 导入全局自定义样式表
import './index.css'
// login使用
import './assets/css/login.css'
import router from './router'
// amap
import VueAMap, { initAMapApiLoader } from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css'
// 创建 app 实例
const app = createApp(App)

initAMapApiLoader({
    key: 'e09545015c0396aa7e7efd3467c11ed6'
})
// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(VueAMap)
app.use(router)
app.use(ElementPlus)
// 挂载 app 实例
app.mount('#app')
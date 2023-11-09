import { createApp } from 'vue'
import App from './App.vue'
import com from '../index' // 你的组件库名称

const app = createApp(App)
app.use(com)
app.mount('#app')

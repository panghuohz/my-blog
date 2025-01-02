import { createApp } from 'vue'
import './style.css'
import './assets/font/index.css'
import App from './App.vue'
import router from './router'
// import 'prismjs'
// // import 'prismjs/themes/prism.css'  // 默认主题
// // 或者选择一个其他的主题
// import 'prismjs/themes/prism-tomorrow.css'

createApp(App).use(router).mount('#app')

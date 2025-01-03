import { createApp } from 'vue'
import './style.css'
import './assets/font/index.css'
import App from './App.vue'
import router from './router'
import 'highlight.js/styles/vs2015.min.css';
// import 'highlight.js/styles/default.css';  //默认主题
 

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import './style.css'
import './assets/font/index.css'
import App from './App.vue'
import router from './router'
import 'highlight.js/styles/github-dark-dimmed.css';
 
 

createApp(App).use(router).mount('#app')

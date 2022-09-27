import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// styles
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'highlight.js/styles/github-dark-dimmed.css'
import './styles/markdown.scss'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')

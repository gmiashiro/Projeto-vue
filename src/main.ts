import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//createApp(App).mount('#app')
const app = createApp(App)

app.use(router)

app.mount('#app')
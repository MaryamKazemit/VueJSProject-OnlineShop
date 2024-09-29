import 'bootstrap/dist/css/bootstrap.css'
import {createApp} from 'vue'
import './style.css'
import '../src/assets/sass/main.css'
import App from './App.vue'
import router from './router.js'

let app = createApp(App)

app.use(router)
app.mount('#app')

import 'bootstrap/dist/js/bootstrap'
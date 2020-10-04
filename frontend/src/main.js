import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bulma imports
require('@/assets/main.scss');

// Fontawesome CSS import
import './FontAwesome5.css'

createApp(App)
    .use(router)
    .mount('#app')

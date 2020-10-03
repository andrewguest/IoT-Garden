import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bulma imports
require('@/assets/main.scss');

// Fontawesome CSS import
import './FontAwesome5.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

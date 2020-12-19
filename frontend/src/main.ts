import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bulma imports
require('@/assets/main.scss');

// Fontawesome CSS import
import './FontAwesome5.css'

// vue-toastification imports
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
const options: PluginOptions = {};


createApp(App).use(store).use(router).use(Toast, options).mount('#app')

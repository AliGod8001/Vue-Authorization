import { createApp } from 'vue'
import App from './App.vue'

import Toast from 'vue-toastification'
import router from "./router.js";
import store from "./store/index.js";

import './style.css'
import "vue-toastification/dist/index.css";


const app = createApp(App)
app.use(router)
app.use(store)
app.use(Toast,{})
app.mount("#app")
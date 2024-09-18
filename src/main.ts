import './assets/main.css'

import { createApp } from 'vue'
import router from './router';
import App from './App.vue'

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)

app.use(router)
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
})
app.mount('#app')
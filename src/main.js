import { createApp } from 'vue'
import './style.css'
import router from './route';
import App from './App.vue'
import  AOS from "aos"
const app  = createApp(App);
app.use(router);
app.use(AOS)
app.mount('#app')

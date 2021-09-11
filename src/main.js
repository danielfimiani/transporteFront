import {createApp}  from 'vue'
import router from './router'
import App from './App.vue'
import Notifications from 'notiwind'
import './index.css'

createApp(App)
    .use(router)
    .use(Notifications)
    .mount('#app');


import {createApp}  from 'vue'
import router from './router'
import App from './App.vue'
import notifications from 'notiwind'
import './index.css'

createApp(App)
    .use(router)
    .use(notifications)
    .mount('#app');


import {createApp}  from 'vue';
import router from './router'
import App from './App.vue'
import '@fortawesome/fontawesome-free/js/all'
import 'mosha-vue-toastify/dist/style.css'
import './index.css'

createApp(App).use(router).mount('#app');


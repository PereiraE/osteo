import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/bootstrap-5.0.0-alpha-2.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
import { createApp } from 'vue';
// import L from 'leaflet';
import App from './App.vue';
import router from './router';
import 'leaflet/dist/leaflet';
import 'leaflet/dist/leaflet.css';

createApp(App).use(router).mount('#app');

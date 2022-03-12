import { createApp } from 'vue';
import App from './App.vue';
import CoreComponents from '@/components/core/plugin';
import 'virtual:windi.css';
import '@/assets/styles/main.scss';

createApp(App)
    .use(CoreComponents)
    .mount('#app');

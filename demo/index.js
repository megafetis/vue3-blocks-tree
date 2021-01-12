import {createApp } from 'vue';
import VueBlocksTree from '../src';
import App from './demo-app.vue';
createApp(App)
    .component('blocks-tree',VueBlocksTree)
    .mount('#app');
import {createApp } from 'vue';

import VueBlocksTree from '../dist/vue3-blocks-tree.common';
import '../dist/vue3-blocks-tree.css';


import App from './demo-app.vue';



createApp(App)
    // .component('blocks-tree',VueBlocksTree)
    .use(VueBlocksTree)
    .mount('#app');
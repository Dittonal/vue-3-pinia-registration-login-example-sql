import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { router } from './router';
import Antd from 'ant-design-vue'// 引入Ant Design Vue组件
import 'ant-design-vue/dist/antd.css' // 引入Ant Design Vue样式

// setup fake backend
import { fakeBackend } from './helpers';
fakeBackend();

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);
app.mount('#app');

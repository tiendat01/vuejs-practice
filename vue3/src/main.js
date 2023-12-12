import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// create root app
const app = createApp(App);

app.use(createPinia());
app.use(router);

// mount
app.mount('#app');

// app config
app.config.errorHandler = err => {
  // handle error
};

// global register assets (components, plugins)
// app.component('<name_of_assets>', <imported_asset>)

// explicitly define additional globals
// app.config.globalProperties

app.config.globalProperties.$alert = str => {
  window.alert(str);
};
app.config.globalProperties.$log = window.console.log;

console.log(app.config.globalProperties);

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

createApp(App).use(router).mount('#app')

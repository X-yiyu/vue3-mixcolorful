import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import router from "./router";

import axios from "axios";
app.config.globalProperties.$axios = axios;

import { theme } from "@/colorful";
app.config.globalProperties.$theme = theme;

app.use(router).mount("#app");
